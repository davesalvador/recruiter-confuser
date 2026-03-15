import { useRef, useCallback } from "react";

export default function HoloCard() {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = x / rect.width;
    const py = y / rect.height;

    const rotateY = (px - 0.5) * 30;
    const rotateX = (0.5 - py) * 30;

    card.style.setProperty("--rx", `${rotateX}deg`);
    card.style.setProperty("--ry", `${rotateY}deg`);
    card.style.setProperty("--px", `${px * 100}%`);
    card.style.setProperty("--py", `${py * 100}%`);
    card.style.setProperty("--mx", `${px}`);
    card.style.setProperty("--my", `${py}`);
    card.style.setProperty("--hyp", `${Math.sqrt((px - 0.5) ** 2 + (py - 0.5) ** 2)}`);
  }, []);

  const handleLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty("--rx", "0deg");
    card.style.setProperty("--ry", "0deg");
    card.style.setProperty("--px", "50%");
    card.style.setProperty("--py", "50%");
    card.style.setProperty("--mx", "0.5");
    card.style.setProperty("--my", "0.5");
    card.style.setProperty("--hyp", "0");
  }, []);

  return (
    <div className="flex justify-center my-10" style={{ perspective: "1200px" }}>
      <div
        ref={cardRef}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className="holo-card"
        style={{
          "--rx": "0deg",
          "--ry": "0deg",
          "--px": "50%",
          "--py": "50%",
          "--mx": "0.5",
          "--my": "0.5",
          "--hyp": "0",
        } as React.CSSProperties}
      >
        {/* card content */}
        <div className="holo-card__content">
          <div className="holo-card__header">
            <span className="holo-card__label">LEGENDARY</span>
            <span className="holo-card__hp">HP 9999</span>
          </div>

          <div className="holo-card__portrait">
            <div className="holo-card__portrait-inner">
              <span className="holo-card__portrait-emoji">👨‍💻</span>
            </div>
          </div>

          <div className="holo-card__name">DAVE SALVADOR</div>
          <div className="holo-card__title">Lead Programmer / Frontend Wizard</div>

          <div className="holo-card__stats">
            <div className="holo-card__stat">
              <span className="holo-card__stat-label">ATK</span>
              <span className="holo-card__stat-value">Lighthouse 95</span>
            </div>
            <div className="holo-card__stat">
              <span className="holo-card__stat-label">DEF</span>
              <span className="holo-card__stat-value">TypeScript Armor</span>
            </div>
            <div className="holo-card__stat">
              <span className="holo-card__stat-label">SPD</span>
              <span className="holo-card__stat-value">Ships Fast</span>
            </div>
          </div>

          <div className="holo-card__desc">
            <p>
              When this card enters the field, all CSS bugs are instantly resolved.
              Opposing recruiters lose 50% confusion resistance.
              Cannot be countered by !important.
            </p>
          </div>

          <div className="holo-card__footer">
            <span>⚡ RECRUITER CONFUSER SET</span>
            <span>★ ★ ★ ★ ★</span>
          </div>
        </div>

        {/* holographic layers */}
        <div className="holo-card__glare" />
        <div className="holo-card__holo" />
        <div className="holo-card__sparkle" />
      </div>
    </div>
  );
}
