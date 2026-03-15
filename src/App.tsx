import { useEffect, useState } from "react";
import LoaderScreen from "./components/LoaderScreen";
import FloatingEmojis from "./components/FloatingEmojis";
import PromptLeakSidebar from "./components/PromptLeakSidebar";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ExperienceSection from "./components/ExperienceSection";
import TestimonialsSection from "./components/TestimonialsSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import AdPopup from "./components/AdPopup";
import { AwardsGrid, QuotesGrid, WinsGrid } from "./components/BadgeGrid";
import CssIsAwesome from "./components/CssIsAwesome";
import EmojiExplosion from "./components/EmojiExplosion";
import CursorTrail from "./components/CursorTrail";

export default function AbstractPortfolio() {
  const [showLoader, setShowLoader] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeAd, setActiveAd] = useState<null | "hire" | "meme">(null);
  const [systemToast, setSystemToast] = useState<string | null>(null);
  const [fallingGithub, setFallingGithub] = useState<null | {
    x: number;
    y: number;
    landed: boolean;
  }>(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!fallingGithub) return;
    if (fallingGithub.landed) return;

    const raf = requestAnimationFrame(() => {
      setFallingGithub((prev) =>
        prev
          ? {
              ...prev,
              y: window.innerHeight - 110,
              landed: true,
            }
          : prev
      );
    });

    return () => cancelAnimationFrame(raf);
  }, [fallingGithub]);

  useEffect(() => {
    const messages = [
      "warning: too much frontend aura detected",
      "recruiter confidence rising",
    ];

    const timeout = setTimeout(() => {
      const pick = messages[Math.floor(Math.random() * messages.length)];
      setSystemToast(pick);
      const hide = setTimeout(() => setSystemToast(null), 3600);
      return () => clearTimeout(hide);
    }, 2800);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`${
        isDarkMode
          ? "bg-[#0b1020] text-white"
          : "bg-[repeating-linear-gradient(45deg,#ff00aa_0px,#ff00aa_24px,#00ffee_24px,#00ffee_48px,#ffff00_48px,#ffff00_72px,#7c3aed_72px,#7c3aed_96px)] text-black"
      } min-h-screen overflow-x-hidden font-serif relative transition-colors duration-500`}
    >
      {showLoader && (
        <LoaderScreen onDismiss={() => setShowLoader(false)} />
      )}

      <marquee className="bg-red-600 text-yellow-200 text-2xl font-bold py-3 border-b-[8px] border-dashed border-lime-300">
        🔥🔥🔥 DAVE SALVADOR PORTFOLIO MEGA PORTAL • NOW 300% UGLIER • HR
        NIGHTMARE EDITION • UNAUTHORIZED GLITTER PATCH APPLIED 🔥🔥🔥
      </marquee>

      <EmojiExplosion />
      <CursorTrail />
      <FloatingEmojis />
      <CssIsAwesome />
      <PromptLeakSidebar />

      <main className="max-w-[1500px] mx-auto px-4 py-6">
        {fallingGithub && (
          <a
            href="https://github.com/davesalvador"
            target="_blank"
            rel="noreferrer"
            className="fixed z-[996] bg-cyan-300 px-6 py-4 border-[6px] border-black text-xl font-black shadow-[8px_8px_0_#000] inline-block hover:rotate-6 hover:scale-110"
            style={{
              left: `${fallingGithub.x}px`,
              top: `${fallingGithub.y}px`,
              transition: "top 900ms cubic-bezier(0.2, 0.9, 0.2, 1.1)",
              transform: "rotate(1deg)",
            }}
          >
            GitHub
          </a>
        )}

        {systemToast && (
          <div className="fixed bottom-6 right-6 z-[997] max-w-md bg-black text-lime-300 border-[6px] border-fuchsia-400 shadow-[10px_10px_0_#000] px-5 py-4 rotate-[-2deg] animate-pulse">
            <div className="text-xs uppercase tracking-[0.3em] font-black text-yellow-300 mb-2">
              system warning.exe
            </div>
            <div className="text-lg md:text-xl font-black">{systemToast}</div>
          </div>
        )}

        {activeAd && (
          <AdPopup activeAd={activeAd} onClose={() => setActiveAd(null)} />
        )}

        <AwardsGrid />
        <QuotesGrid />

        <Navbar
          isDarkMode={isDarkMode}
          onToggleDarkMode={() => setIsDarkMode((v) => !v)}
        />

        <WinsGrid />

        <HeroSection
          onShowMemeAd={() => setActiveAd("meme")}
          onShowHireAd={() => setActiveAd("hire")}
        />

        <ExperienceSection />
        <TestimonialsSection />
        <SkillsSection isDarkMode={isDarkMode} />

        <ContactSection
          isDarkMode={isDarkMode}
          fallingGithub={fallingGithub}
          onGithubClick={(rect) =>
            setFallingGithub({ x: rect.left, y: rect.top, landed: false })
          }
        />

        <Footer />
      </main>
    </div>
  );
}
