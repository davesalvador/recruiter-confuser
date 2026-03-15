interface ContactSectionProps {
  isDarkMode: boolean;
  fallingGithub: { x: number; y: number; landed: boolean } | null;
  onGithubClick: (rect: DOMRect) => void;
}

export default function ContactSection({
  isDarkMode,
  fallingGithub,
  onGithubClick,
}: ContactSectionProps) {
  return (
    <section
      id="contact"
      className={`${
        isDarkMode
          ? "bg-slate-800 border-cyan-300 shadow-[22px_22px_0_#020617] text-white"
          : "bg-red-300 border-black shadow-[22px_22px_0_#facc15]"
      } border-[12px] border-double p-8 rotate-[1deg] mb-8 transition-colors duration-500`}
    >
      <div className="text-6xl mb-4">📞📧🔥💼🦐</div>
      <h3
        className={`${
          isDarkMode ? "text-yellow-300" : "text-blue-900"
        } text-4xl md:text-6xl font-black mb-4 uppercase`}
      >
        Contact Explosion
      </h3>
      <p
        className={`${
          isDarkMode ? "text-white" : "text-black"
        } text-2xl font-bold leading-10 max-w-3xl mb-3`}
      >
        Need frontend engineering, product UI, architecture cleanup, performance
        work, or a developer who can build serious things while still respecting
        the sacred power of dumb jokes? Behold, the cursed contact buttons.
      </p>
      <p
        className={`${
          isDarkMode ? "text-cyan-300" : "text-blue-900"
        } text-lg md:text-xl font-black leading-8 max-w-3xl mb-6`}
      >
        Available for frontend engineering, product UI, and performance-focused
        work.
      </p>
      <div className="flex flex-wrap gap-4 text-xl font-black">
        <a
          href="mailto:work@davesalvador.com"
          className="bg-yellow-300 px-6 py-4 border-[6px] border-black hover:-translate-y-5 hover:rotate-[360deg] hover:scale-110 transition-all duration-700"
        >
          work@davesalvador.com
        </a>

        <button
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            onGithubClick(rect);
          }}
          className="bg-cyan-300 px-6 py-4 border-[6px] border-black transition-all duration-700 hover:-translate-y-3 hover:rotate-6 hover:scale-110"
        >
          {!fallingGithub ? "GitHub" : "..."}
        </button>

        <a
          href="https://www.linkedin.com/in/dave-salvador/"
          target="_blank"
          rel="noreferrer"
          className="bg-lime-300 px-6 py-4 border-[6px] border-black hover:-translate-y-10 hover:rotate-[360deg] transition-all duration-700"
        >
          LinkedIn
        </a>

        <a
          href="tel:+639178581599"
          className="bg-fuchsia-300 px-6 py-4 border-[6px] border-black transition-all duration-700 hover:translate-y-3 hover:rotate-12 hover:scale-95"
        >
          +63 917 858 1599
        </a>
      </div>
    </section>
  );
}
