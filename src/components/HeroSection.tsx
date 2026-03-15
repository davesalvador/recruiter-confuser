interface HeroSectionProps {
  onShowMemeAd: () => void;
  onShowHireAd: () => void;
}

export default function HeroSection({
  onShowMemeAd,
  onShowHireAd,
}: HeroSectionProps) {
  return (
    <section className="grid lg:grid-cols-12 gap-6 mb-10 items-start">
      <div className="lg:col-span-8 bg-yellow-200 border-[12px] border-dotted border-fuchsia-700 shadow-[24px_24px_0_#00ffee] p-8 rotate-[1deg]">
        <div className="mb-4 text-6xl">🎨💻⚡🌈🤡</div>
        <p className="text-sm font-black uppercase tracking-[0.4em] text-red-600 mb-4">
          TOTALLY SERIOUS DEVELOPER
        </p>
        <h2 className="text-5xl md:text-8xl leading-none font-black text-blue-800 uppercase">
          DAVE
          <span className="block text-pink-600 italic rotate-[-1deg]">
            SALVADOR
          </span>
        </h2>
        <p className="mt-6 text-2xl font-bold text-purple-900 max-w-3xl leading-10">
          Lead programmer with frontend instincts, product taste, architecture
          obsession, meme durability, and enough emotional intelligence to
          survive enterprise software without becoming a spreadsheet.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <button
            onClick={onShowMemeAd}
            className="bg-red-500 text-white px-8 py-4 text-2xl font-black border-[6px] border-black shadow-[8px_8px_0_#000] transition-all duration-700 hover:-translate-y-6 hover:translate-x-4 hover:rotate-[360deg] hover:scale-110"
          >
            LOOK AT MY PORTFOLIO LORE
          </button>
          <button
            onClick={onShowHireAd}
            className="bg-lime-400 text-blue-900 px-8 py-4 text-2xl font-black border-[6px] border-black rounded-full transition-all duration-700 hover:-translate-y-2 hover:scale-110"
          >
            HIRE ME MAYBE
          </button>
        </div>
      </div>

      <div className="lg:col-span-4 grid gap-6">
        <div
          id="about"
          className="bg-cyan-200 border-[10px] border-black p-6 rotate-[-2deg] shadow-[16px_16px_0_#facc15]"
        >
          <h3 className="text-3xl font-black text-fuchsia-700 mb-4 underline">
            ABOUT ME!!!
          </h3>
          <p className="text-xl font-bold leading-9 text-blue-900">
            Lead programmer focused on frontend systems, product UI,
            performance, maintainable architecture, and shipping interfaces that
            feel fast, readable, and a little bit disrespectful to boring
            design.
          </p>
        </div>

        <div className="bg-pink-200 border-[10px] border-dashed border-green-700 p-6 rotate-[3deg] shadow-[16px_16px_0_#2563eb]">
          <div className="mb-3 inline-block bg-black text-yellow-300 px-3 py-1 text-sm font-black rotate-[-4deg]">
            TOP 10 ANIME BETRAYALS
          </div>
          <h3 className="text-3xl font-black text-red-700 mb-4">
            WHY I AM VERY COOL
          </h3>
          <ul className="text-xl font-bold leading-9 list-disc pl-6 text-purple-900">
            <li>I make UI go brrrr</li>
            <li>I fight bugs in hand-to-hand combat</li>
            <li>I boost Lighthouse like a goblin mechanic</li>
            <li>I can center a div spiritually</li>
            <li>performative male</li>
            <li>leni supporter</li>
            <li>emotional intelligence</li>
            <li>introvert</li>
            <li>prefers headset over wireless AirPods</li>
            <li>ios ecosystem</li>
            <li>matcha lover</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
