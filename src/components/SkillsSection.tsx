import { skills } from "../data/skills";

interface SkillsSectionProps {
  isDarkMode: boolean;
}

export default function SkillsSection({ isDarkMode }: SkillsSectionProps) {
  return (
    <section className="grid lg:grid-cols-12 gap-6 mb-10 items-start">
      <div
        id="skills"
        className={`${
          isDarkMode
            ? "bg-slate-800 border-cyan-300 shadow-[18px_18px_0_#020617]"
            : "bg-orange-200 border-fuchsia-700 shadow-[18px_18px_0_#00f]"
        } lg:col-span-7 border-[10px] border-dotted p-6 rotate-[2deg] transition-colors duration-500 overflow-hidden relative`}
      >
        <div className="absolute -top-4 -right-2 text-6xl rotate-12 animate-bounce">
          🎪
        </div>
        <div className="absolute top-16 right-10 text-4xl animate-spin">
          ⚙️
        </div>
        <div className="absolute bottom-8 left-4 text-5xl animate-pulse">
          🧃
        </div>
        <div className="absolute inset-x-8 top-20 h-4 bg-black border-4 border-fuchsia-400 rotate-[-2deg]" />
        <div className="absolute inset-x-12 top-32 h-4 bg-cyan-300 border-4 border-black rotate-[1deg]" />
        <h3
          className={`${
            isDarkMode ? "text-yellow-300" : "text-red-600"
          } text-4xl md:text-5xl font-black mb-2 relative z-10`}
        >
          SKILL CARNIVAL
        </h3>
        <p
          className={`${
            isDarkMode ? "text-cyan-300" : "text-blue-900"
          } text-lg md:text-xl font-black mb-8 relative z-10`}
        >
          Welcome to the stack bazaar. Everything is loud, but technically real.
        </p>
        <div className="flex flex-wrap gap-3 relative z-10">
          {skills.map((skill, index) => (
            <span
              key={skill}
              className={`px-4 py-3 text-lg font-black border-[5px] ${
                isDarkMode ? "border-white text-black" : "border-black"
              } ${
                index % 4 === 0
                  ? "bg-yellow-300 rotate-[-2deg]"
                  : index % 4 === 1
                  ? "bg-cyan-300 rotate-[2deg]"
                  : index % 4 === 2
                  ? "bg-pink-300 rotate-[-1deg]"
                  : "bg-lime-300 rotate-[1deg]"
              } ${
                index % 6 === 0
                  ? "hover:-translate-y-3 hover:rotate-[360deg]"
                  : index % 5 === 0
                  ? "hover:translate-y-2 hover:scale-110"
                  : "hover:scale-105"
              } transition-all duration-700 shadow-[6px_6px_0_#000] inline-block`}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div
        className={`${
          isDarkMode
            ? "bg-slate-900 border-pink-300 shadow-[18px_18px_0_#111827]"
            : "bg-purple-300 border-yellow-200 shadow-[18px_18px_0_#ff0000]"
        } lg:col-span-5 border-[10px] p-6 rotate-[-3deg] transition-colors duration-500`}
      >
        <h3
          className={`${
            isDarkMode ? "text-cyan-300" : "text-yellow-100"
          } text-3xl font-black mb-4`}
        >
          PHILOSOPHY CORNER
        </h3>
        <blockquote
          className={`${
            isDarkMode ? "text-white" : "text-blue-950"
          } text-3xl font-black italic leading-tight`}
        >
          "Good design should punch the eyeballs, pass Lighthouse, and then
          steal your recruiter."
        </blockquote>
      </div>
    </section>
  );
}
