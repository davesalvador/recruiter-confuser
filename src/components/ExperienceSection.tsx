import { workExperience } from "../data/work-experience";

export default function ExperienceSection() {
  return (
    <section id="experience" className="mb-10">
      <div className="bg-lime-300 border-[10px] border-double border-red-700 p-5 mb-6 rotate-[-1deg] shadow-[18px_18px_0_#7c3aed]">
        <p className="text-sm uppercase tracking-[0.4em] font-black text-blue-800">
          EMPLOYMENT ARC UNLOCKED
        </p>
        <h3 className="text-4xl md:text-6xl font-black text-fuchsia-700">
          WORK EXPERIENCE APOCALYPSE
        </h3>
      </div>

      <div className="xl:grid xl:grid-cols-[minmax(0,1fr)_320px] xl:gap-8 items-start">
        <div className="grid md:grid-cols-2 gap-8">
          {workExperience.slice(0, 4).map((job, index) => (
            <div
              key={`${job.company}-${index}`}
              className={`${job.color} border-[10px] ${
                index % 2 === 0 ? "border-dashed" : "border-double"
              } border-black p-6 shadow-[18px_18px_0_#000] ${
                index % 3 === 0
                  ? "rotate-[-3deg]"
                  : index % 3 === 1
                  ? "rotate-[2deg]"
                  : "rotate-[-2deg]"
              } ${job.hoverClass} transition-all duration-700`}
            >
              <div className="bg-white/50 border-[6px] border-black p-4 mb-5 text-center relative overflow-hidden">
                <div className="absolute top-1 right-2 text-xs font-black text-red-700 rotate-12">
                  VERY EMPLOYED
                </div>
                <div className="text-5xl mb-2">{job.emoji}</div>
                <p className="text-sm font-black uppercase tracking-[0.25em] text-red-600">
                  {job.period}
                </p>
              </div>
              <h4 className="text-3xl font-black text-blue-900 mb-1 leading-tight">
                {job.company}
              </h4>
              <p className="text-xl font-black text-fuchsia-700 mb-2">
                {job.role}
              </p>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-green-800 mb-4">
                {job.location}
              </p>
              <p className="text-lg font-bold leading-8 mb-4 text-black">
                {job.description}
              </p>
              <p className="text-lg font-black leading-8 mb-5 text-purple-900 bg-white/40 border-4 border-black p-3">
                {job.highlight}
              </p>
              <div className="flex flex-wrap gap-2">
                {job.tags.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-2 bg-black text-yellow-200 text-sm font-black border-4 border-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 xl:mt-0">
          {workExperience[4] && (
            <div
              className={`${workExperience[4].color} border-[10px] border-double border-black p-6 shadow-[18px_18px_0_#000] rotate-[2deg] ${workExperience[4].hoverClass} transition-all duration-700 xl:min-h-[900px] xl:flex xl:flex-col xl:justify-between`}
            >
              <div>
                <div className="bg-white/50 border-[6px] border-black p-4 mb-5 text-center relative overflow-hidden">
                  <div className="absolute top-1 right-2 text-xs font-black text-red-700 rotate-12">
                    VERTICAL EMPLOYMENT
                  </div>
                  <div className="text-6xl mb-3">
                    {workExperience[4].emoji}
                  </div>
                  <p className="text-sm font-black uppercase tracking-[0.25em] text-red-600">
                    {workExperience[4].period}
                  </p>
                </div>
                <h4 className="text-4xl font-black text-blue-900 mb-2 leading-tight break-words">
                  {workExperience[4].company}
                </h4>
                <p className="text-2xl font-black text-fuchsia-700 mb-3 leading-tight">
                  {workExperience[4].role}
                </p>
                <p className="text-sm font-black uppercase tracking-[0.2em] text-green-800 mb-5">
                  {workExperience[4].location}
                </p>
                <p className="text-xl font-bold leading-9 mb-5 text-black">
                  {workExperience[4].description}
                </p>
                <p className="text-xl font-black leading-9 mb-6 text-purple-900 bg-white/40 border-4 border-black p-4">
                  {workExperience[4].highlight}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 xl:flex-col xl:items-start">
                {workExperience[4].tags.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-2 bg-black text-yellow-200 text-sm font-black border-4 border-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
