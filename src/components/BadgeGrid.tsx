import { fakeAwards, cursedQuotes, highlightedWins } from "../data/content";

export function AwardsGrid() {
  return (
    <section className="mb-6 grid md:grid-cols-2 xl:grid-cols-4 gap-4">
      {fakeAwards.map((award, index) => (
        <div
          key={award.text}
          className={`border-[8px] border-black p-4 text-center text-xl font-black shadow-[10px_10px_0_#000] ${
            index % 4 === 0
              ? "bg-yellow-300 rotate-[-3deg]"
              : index % 4 === 1
              ? "bg-cyan-300 rotate-[2deg]"
              : index % 4 === 2
              ? "bg-pink-300 rotate-[-2deg]"
              : "bg-lime-300 rotate-[3deg]"
          } ${award.className} transition-all duration-700`}
        >
          {award.text}
        </div>
      ))}
    </section>
  );
}

export function QuotesGrid() {
  return (
    <section className="mb-6 grid md:grid-cols-2 xl:grid-cols-5 gap-4">
      {cursedQuotes.map((quote, index) => (
        <div
          key={quote}
          className={`border-[6px] border-dashed border-black px-4 py-3 text-center text-lg font-black uppercase shadow-[8px_8px_0_#000] ${
            index % 5 === 0
              ? "bg-red-300 rotate-[-2deg]"
              : index % 5 === 1
              ? "bg-fuchsia-300 rotate-[2deg]"
              : index % 5 === 2
              ? "bg-orange-300 rotate-[-1deg]"
              : index % 5 === 3
              ? "bg-green-300 rotate-[1deg]"
              : "bg-sky-300 rotate-[-3deg]"
          } ${
            index % 2 === 0 ? "hover:scale-110 hover:translate-y-2" : ""
          } ${index === 1 ? "hover:rotate-[360deg]" : ""} transition-all duration-700`}
        >
          {quote}
        </div>
      ))}
    </section>
  );
}

export function WinsGrid() {
  return (
    <section className="mb-6 grid md:grid-cols-2 xl:grid-cols-4 gap-4">
      {highlightedWins.map((win, index) => (
        <div
          key={win}
          className={`border-[8px] border-black p-4 text-center text-xl font-black shadow-[10px_10px_0_#000] ${
            index % 4 === 0
              ? "bg-orange-300 rotate-[-2deg]"
              : index % 4 === 1
              ? "bg-lime-300 rotate-[2deg]"
              : index % 4 === 2
              ? "bg-cyan-300 rotate-[-1deg]"
              : "bg-pink-300 rotate-[1deg]"
          } ${
            index === 1
              ? "hover:-translate-y-4 hover:rotate-[360deg]"
              : "hover:scale-105"
          } transition-all duration-700`}
        >
          {win}
        </div>
      ))}
    </section>
  );
}
