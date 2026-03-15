interface AdPopupProps {
  activeAd: "hire" | "meme";
  onClose: () => void;
}

export default function AdPopup({ activeAd, onClose }: AdPopupProps) {
  return (
    <div className="fixed inset-0 z-[998] bg-black/70 backdrop-blur-sm flex items-center justify-center p-6">
      <div
        className={`max-w-xl w-full border-[10px] border-black shadow-[16px_16px_0_#000] p-6 rotate-[-1deg] ${
          activeAd === "hire" ? "bg-yellow-300" : "bg-cyan-300"
        }`}
      >
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] font-black text-red-700">
              totally normal advertisement
            </p>
            <h3 className="text-3xl md:text-5xl font-black text-blue-900 leading-tight">
              {activeAd === "hire"
                ? "HIRE ME OR I WILL BE A LITTLE SAD"
                : "BREAKING NEWS: THIS PORTFOLIO HAS ACHIEVED MAXIMUM NONSENSE"}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="bg-black text-yellow-300 px-4 py-2 border-[4px] border-white font-black hover:rotate-12 transition-all duration-300"
          >
            X
          </button>
        </div>

        {activeAd === "hire" ? (
          <div>
            <p className="text-xl font-black text-purple-900 leading-9 mb-4">
              Hello recruiter. This is a completely unbiased pop-up reminding
              you that hiring Dave Salvador would improve your frontend, your
              Lighthouse score, and possibly your emotional well-being.
            </p>
            <div className="bg-white/60 border-[6px] border-black p-4 text-lg font-black text-red-700 rotate-[1deg] mb-4">
              side effects of not hiring Dave may include regret, slower UI, and
              spiritually misaligned buttons.
            </div>
            <button
              onClick={onClose}
              className="bg-red-500 text-white px-6 py-3 border-[5px] border-black font-black text-xl hover:-translate-y-2 hover:scale-110 transition-all duration-300"
            >
              OKAY FINE I WILL CONSIDER IT
            </button>
          </div>
        ) : (
          <div>
            <p className="text-xl font-black text-blue-950 leading-9 mb-4">
              Congratulations. You have unlocked the premium meme ad experience.
              No purchase required. No dignity included.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-pink-300 border-[5px] border-black p-3 text-lg font-black rotate-[-2deg]">
                performative male detected
              </div>
              <div className="bg-lime-300 border-[5px] border-black p-3 text-lg font-black rotate-[2deg]">
                matcha reserves stable
              </div>
              <div className="bg-orange-300 border-[5px] border-black p-3 text-lg font-black rotate-[1deg]">
                airpods rejected
              </div>
              <div className="bg-fuchsia-300 border-[5px] border-black p-3 text-lg font-black rotate-[-1deg]">
                headset supremacy
              </div>
            </div>
            <button
              onClick={onClose}
              className="bg-black text-cyan-300 px-6 py-3 border-[5px] border-yellow-300 font-black text-xl hover:rotate-[360deg] transition-all duration-500"
            >
              I HAVE SEEN ENOUGH
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
