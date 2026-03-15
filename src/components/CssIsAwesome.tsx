export default function CssIsAwesome() {
  return (
    <div className="fixed bottom-[14%] left-[6%] z-50 animate-bounce hidden md:block">
      <div className="bg-white border-[5px] border-black shadow-[8px_8px_0_#000] rotate-[-6deg] hover:rotate-[6deg] hover:scale-110 transition-all duration-500">
        <div className="border-[3px] border-black w-[120px] h-[85px] m-3 flex items-center justify-center overflow-visible">
          <span className="text-2xl font-black text-black leading-none whitespace-nowrap">
            CSS IS
            <br />
            <span className="text-3xl text-red-600 inline-block translate-x-2">
              AWESOME
            </span>
          </span>
        </div>
        <p className="text-[9px] font-black text-fuchsia-700 text-center pb-2">
          overflow: visible
        </p>
      </div>
    </div>
  );
}
