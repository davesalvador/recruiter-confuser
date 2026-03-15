interface LoaderScreenProps {
  onDismiss: () => void;
}

export default function LoaderScreen({ onDismiss }: LoaderScreenProps) {
  return (
    <div className="fixed inset-0 z-[999] bg-black/88 backdrop-blur-sm flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-yellow-300 border-[12px] border-double border-red-600 shadow-[20px_20px_0_#ff00aa] p-8 rotate-[-1deg] text-center">
        <div className="text-7xl mb-4 animate-pulse">⚠️</div>
        <h2 className="text-4xl md:text-6xl font-black uppercase text-blue-900 mb-4">
          Morning Caution Screen
        </h2>
        <p className="text-2xl font-black text-red-700 leading-10 mb-5">
          Warning: opening this portfolio before full brain activation may cause
          flashbang emotions, meme exposure, and immediate confusion.
        </p>
        <button
          onClick={onDismiss}
          className="inline-block bg-black text-yellow-300 px-5 py-3 text-xl font-black border-[6px] border-cyan-300 animate-bounce hover:scale-110 hover:rotate-3 transition-all duration-300"
        >
          I ACCEPT THE COLORED PORTFOLIO
        </button>
      </div>
    </div>
  );
}
