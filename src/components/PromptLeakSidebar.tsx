import { aiSnippets } from "../data/content";

export default function PromptLeakSidebar() {
  return (
    <aside className="fixed right-3 top-1/2 -translate-y-1/2 z-40 hidden xl:block w-[270px] rotate-[2deg]">
      <div className="bg-white border-[8px] border-black shadow-[12px_12px_0_#000]">
        <div className="bg-fuchsia-500 text-yellow-200 px-4 py-2 border-b-[6px] border-black text-sm font-black uppercase tracking-[0.25em]">
          live prompt leak.txt
        </div>
        <div className="bg-lime-200 p-4 font-mono text-[13px] leading-6 font-bold text-blue-900">
          {aiSnippets.map((line, index) => (
            <div
              key={line}
              className={`${
                index % 2 === 0 ? "text-red-700" : "text-blue-900"
              } ${
                index === 4
                  ? "bg-yellow-300 px-2 rotate-[-1deg] border-2 border-black"
                  : ""
              }`}
            >
              {line}
            </div>
          ))}
          <div className="mt-3 bg-black text-cyan-300 px-2 py-1 inline-block rotate-[1deg] border-2 border-yellow-300">
            status: making it worse...
          </div>
        </div>
      </div>
    </aside>
  );
}
