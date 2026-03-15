interface NavbarProps {
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

export default function Navbar({ isDarkMode, onToggleDarkMode }: NavbarProps) {
  return (
    <nav
      className={`${
        isDarkMode
          ? "bg-slate-900 border-cyan-300 shadow-[20px_20px_0_#111827] text-white"
          : "bg-orange-300 border-blue-900 shadow-[20px_20px_0_#ff00aa]"
      } mb-8 border-[10px] border-double rotate-[-1deg] transition-colors duration-500`}
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-6 relative">
        <button
          onClick={onToggleDarkMode}
          className={`${
            isDarkMode
              ? "bg-yellow-300 text-black"
              : "bg-black text-yellow-300"
          } absolute right-4 top-4 px-4 py-2 border-4 border-current font-black text-sm md:text-base hover:scale-110 hover:-translate-y-1 transition-all duration-300`}
        >
          {isDarkMode ? "LIGHT MODE 🤢" : "DARK MODE 😈"}
        </button>

        <div>
          <p
            className={`${
              isDarkMode ? "text-cyan-300" : "text-fuchsia-700"
            } text-xs tracking-[0.5em] uppercase font-bold`}
          >
            PORTFOLIO ZONE
          </p>
          <h1
            className={`${
              isDarkMode ? "text-yellow-300" : "text-blue-900"
            } text-4xl md:text-6xl font-black underline decoration-wavy inline-block`}
          >
            Dave{" "}
            <span className="inline-block animate-[spin_2.5s_linear_infinite]">
              S
            </span>
            alvador
          </h1>
          <p
            className={`${
              isDarkMode ? "text-pink-300" : "text-green-700"
            } text-lg font-bold`}
          >
            Lead Programmer / Frontend Wizard / Button Enjoyer / Chaos Curator
          </p>
        </div>

        <div className="flex flex-wrap gap-3 text-lg font-bold">
          <a
            href="#about"
            className="bg-yellow-300 px-4 py-2 border-4 border-black hover:-translate-y-4 hover:rotate-[360deg] hover:scale-110 transition-all duration-700"
          >
            About
          </a>
          <a
            href="#experience"
            className="bg-cyan-300 px-4 py-2 border-4 border-black transition-all duration-700 hover:-translate-y-6 hover:-rotate-12 hover:scale-125"
          >
            Work
          </a>
          <a
            href="#skills"
            className="bg-lime-300 px-4 py-2 border-4 border-black transition-all duration-700"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="bg-pink-300 px-4 py-2 border-4 border-black hover:translate-y-2 hover:rotate-12 hover:scale-110 transition-all duration-700"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
