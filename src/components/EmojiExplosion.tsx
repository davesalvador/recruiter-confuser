import { useEffect, useRef, useCallback } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  rotationSpeed: number;
  emoji: string;
  size: number;
  life: number;
  maxLife: number;
  gravity: number;
  friction: number;
  bounce: number;
}

const EMOJI_POOL = [
  "💥", "🔥", "✨", "⭐", "💀", "🚀", "🗿", "🍕", "🐸", "🦄",
  "🎪", "☢️", "🧠", "🤡", "💅", "🎯", "⚡", "🌈", "🍔", "🐙",
  "😤", "🫠", "💻", "🎨", "🏆", "👾", "🛸", "🌶️", "🧃", "🪄",
];

const PARTICLE_COUNT = 18;
const GRAVITY = 0.35;
const FRICTION = 0.985;
const BOUNCE_DAMPING = 0.6;
const MAX_LIFE = 180;

function createParticle(x: number, y: number): Particle {
  const angle = Math.random() * Math.PI * 2;
  const speed = 4 + Math.random() * 12;
  return {
    x,
    y,
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed - 6,
    rotation: Math.random() * 360,
    rotationSpeed: (Math.random() - 0.5) * 20,
    emoji: EMOJI_POOL[Math.floor(Math.random() * EMOJI_POOL.length)],
    size: 18 + Math.random() * 22,
    life: 0,
    maxLife: MAX_LIFE + Math.floor(Math.random() * 60),
    gravity: GRAVITY + Math.random() * 0.1,
    friction: FRICTION,
    bounce: BOUNCE_DAMPING + Math.random() * 0.15,
  };
}

export default function EmojiExplosion() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number>(0);
  const lastClickRef = useRef<{ x: number; y: number; time: number }>({
    x: 0,
    y: 0,
    time: 0,
  });

  const handleClick = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (
      target.tagName === "BUTTON" ||
      target.tagName === "A" ||
      target.closest("button") ||
      target.closest("a") ||
      target.closest("iframe")
    ) {
      return;
    }

    const now = Date.now();
    const last = lastClickRef.current;
    const isRapid =
      now - last.time < 300 &&
      Math.abs(e.clientX - last.x) < 50 &&
      Math.abs(e.clientY - last.y) < 50;

    const count = isRapid ? PARTICLE_COUNT * 3 : PARTICLE_COUNT;

    for (let i = 0; i < count; i++) {
      particlesRef.current.push(createParticle(e.clientX, e.clientY));
    }

    lastClickRef.current = { x: e.clientX, y: e.clientY, time: now };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);
    document.addEventListener("click", handleClick);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        p.vy += p.gravity;
        p.vx *= p.friction;
        p.vy *= p.friction;

        p.x += p.vx;
        p.y += p.vy;

        p.rotation += p.rotationSpeed;
        p.life++;

        // bounce off walls
        if (p.x < p.size / 2) {
          p.x = p.size / 2;
          p.vx = Math.abs(p.vx) * p.bounce;
          p.rotationSpeed *= -0.8;
        }
        if (p.x > canvas.width - p.size / 2) {
          p.x = canvas.width - p.size / 2;
          p.vx = -Math.abs(p.vx) * p.bounce;
          p.rotationSpeed *= -0.8;
        }

        // bounce off floor
        if (p.y > canvas.height - p.size / 2) {
          p.y = canvas.height - p.size / 2;
          p.vy = -Math.abs(p.vy) * p.bounce;
          p.vx *= 0.9;
          p.rotationSpeed *= 0.7;

          // stop jittering when nearly still
          if (Math.abs(p.vy) < 1.5) {
            p.vy = 0;
            p.gravity = 0;
          }
        }

        // bounce off ceiling
        if (p.y < p.size / 2) {
          p.y = p.size / 2;
          p.vy = Math.abs(p.vy) * p.bounce;
        }

        // fade out
        const lifeRatio = p.life / p.maxLife;
        const alpha = lifeRatio > 0.7 ? 1 - (lifeRatio - 0.7) / 0.3 : 1;

        // scale squash on bounce
        const squash =
          p.y >= canvas.height - p.size / 2 - 2 && Math.abs(p.vy) < 2
            ? 0.7
            : 1;

        ctx.save();
        ctx.globalAlpha = Math.max(0, alpha);
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.scale(1, squash);
        ctx.font = `${p.size}px serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(p.emoji, 0, 0);
        ctx.restore();

        if (p.life >= p.maxLife) {
          particles.splice(i, 1);
        }
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      document.removeEventListener("click", handleClick);
    };
  }, [handleClick]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[995] pointer-events-none"
    />
  );
}
