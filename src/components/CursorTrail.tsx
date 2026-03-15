import { useEffect, useRef } from "react";

const TRAIL_LENGTH = 14;
const SPRING = 0.38;
const DAMPING = 0.72;
const TRAIL_EMOJIS = ["🔥", "✨", "💀", "⚡", "🗿", "💥", "🚀", "🐸", "🍕", "☢️", "🧠", "🤡", "🦄", "🎯"];

interface TrailPoint {
  x: number;
  y: number;
  vx: number;
  vy: number;
  emoji: string;
  rotation: number;
}

export default function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -100, y: -100 });
  const pointsRef = useRef<TrailPoint[]>([]);
  const rafRef = useRef(0);
  const activeRef = useRef(false);
  const hideTimerRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // init trail points offscreen
    pointsRef.current = Array.from({ length: TRAIL_LENGTH }, (_, i) => ({
      x: -100,
      y: -100,
      vx: 0,
      vy: 0,
      emoji: TRAIL_EMOJIS[i % TRAIL_EMOJIS.length],
      rotation: 0,
    }));

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      activeRef.current = true;
      clearTimeout(hideTimerRef.current);
      hideTimerRef.current = window.setTimeout(() => {
        activeRef.current = false;
      }, 3000);
    };
    window.addEventListener("mousemove", onMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const points = pointsRef.current;

      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        const target = i === 0 ? mouseRef.current : points[i - 1];

        // spring physics: each point chases the one in front
        const dx = target.x - p.x;
        const dy = target.y - p.y;

        p.vx += dx * SPRING;
        p.vy += dy * SPRING;
        p.vx *= DAMPING;
        p.vy *= DAMPING;

        p.x += p.vx;
        p.y += p.vy;

        // rotation based on velocity
        p.rotation = Math.atan2(p.vy, p.vx);
      }

      if (activeRef.current) {
        for (let i = points.length - 1; i >= 0; i--) {
          const p = points[i];
          const progress = i / points.length;

          // size decreases along the tail
          const size = 28 - progress * 16;

          // opacity decreases along the tail
          const alpha = 1 - progress * 0.7;

          // wobble based on velocity magnitude
          const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
          const wobble = Math.sin(Date.now() * 0.01 + i * 1.2) * Math.min(speed * 0.5, 8);

          ctx.save();
          ctx.globalAlpha = alpha;
          ctx.translate(p.x, p.y + wobble);
          ctx.rotate(p.rotation * 0.3);

          // scale squash/stretch based on speed
          const stretch = 1 + Math.min(speed * 0.01, 0.3);
          ctx.scale(stretch, 1 / stretch);

          ctx.font = `${size}px serif`;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(p.emoji, 0, 0);
          ctx.restore();
        }
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      clearTimeout(hideTimerRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[994] pointer-events-none hidden md:block"
    />
  );
}
