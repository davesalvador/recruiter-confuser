export default function TestimonialsSection() {
  return (
    <section className="mb-8 bg-white border-[12px] border-dotted border-red-600 p-6 rotate-[-1deg] shadow-[18px_18px_0_#000]">
      <h3 className="text-4xl md:text-6xl font-black text-fuchsia-700 uppercase mb-4">
        Totally Real Testimonials
      </h3>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 text-xl font-black">
        <div className="xl:col-span-3 bg-black text-yellow-300 border-[6px] border-fuchsia-400 px-4 py-2 mb-2 rotate-[1deg] text-center uppercase">
          Review summary: too loud, still hiring
        </div>
        <div className="bg-yellow-300 border-[6px] border-black p-4 rotate-[-2deg]">
          "He touched the CSS and somehow it survived." — Some Manager Probably
        </div>
        <div className="bg-cyan-300 border-[6px] border-black p-4 rotate-[2deg]">
          "Fast, dangerous, and weirdly effective." — A Concerned Teammate
        </div>
        <div className="bg-pink-300 border-[6px] border-black p-4 rotate-[-3deg]">
          "I feared the hover effects, yet I respected them." — Anonymous
          Recruiter
        </div>
      </div>
    </section>
  );
}
