import { useEffect, useState } from "react";

export default function AbstractPortfolio() {
  const [showLoader, setShowLoader] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeAd, setActiveAd] = useState<null | "hire" | "meme">(null);
  const [systemToast, setSystemToast] = useState<string | null>(null);
  const [fallingGithub, setFallingGithub] = useState<null | {
    x: number;
    y: number;
    landed: boolean;
  }>(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!fallingGithub) return;
    if (fallingGithub.landed) return;

    const raf = requestAnimationFrame(() => {
      setFallingGithub((prev) =>
        prev
          ? {
              ...prev,
              y: window.innerHeight - 110,
              landed: true,
            }
          : prev
      );
    });

    return () => cancelAnimationFrame(raf);
  }, [fallingGithub]);

  useEffect(() => {
    const messages = [
      "warning: too much frontend aura detected",
      "recruiter confidence rising",
    ];

    const timeout = setTimeout(() => {
      const pick = messages[Math.floor(Math.random() * messages.length)];
      setSystemToast(pick);
      const hide = setTimeout(() => setSystemToast(null), 3600);
      return () => clearTimeout(hide);
    }, 2800);

    return () => clearTimeout(timeout);
  }, []);

  const workExperience = [
    {
      company: "Law practive AI",
      role: "Software Engineer II",
      location: "Los Angeles, California, United States",
      period: "February 2024 – Present",
      description:
        "Shipped production-ready UI in C#, Blazor, and React.js for legal-tech workflows, template systems, demand forms, and product-facing improvements — serious software, mildly unhinged deadlines.",
      highlight:
        "Highlighted win: boosted Lighthouse performance from around 40 to around 80 by trimming re-renders and asset chaos like a caffeinated UI barbarian, but with better commit messages.",
      tags: ["React", "Blazor", "C#", "Legal Tech", "Lighthouse"],
      color: "bg-lime-400",
      emoji: "⚖️",
      hoverClass: "hover:-translate-y-8 hover:rotate-[360deg] hover:scale-105",
    },
    {
      company: "Bulacan State University",
      role: "Technical Lead / Former Programmer / AI-ML Goblin",
      location: "Malolos, Bulacan, Philippines",
      period: "March 2022 – December 2024",
      description:
        "Led frontend and full-stack delivery across web apps, AI/ML flavored systems, and team execution while evolving from programmer to technical lead — the classic side quest that became the main plot.",
      highlight:
        "Highlighted win: dragged Lighthouse scores from around 30 to around 95 and designed a microservice-based backend because apparently sleep was treated as downloadable content.",
      tags: ["React", "AI/ML", "Microservices", "Leadership"],
      color: "bg-pink-500",
      emoji: "🎓",
      hoverClass: "hover:-translate-y-10 hover:-rotate-6 hover:scale-110",
    },
    {
      company: "Skillspire",
      role: "Teaching Assistant (Full-Stack Development)",
      location: "Bellevue, Washington, United States",
      period: "April 2024 – October 2025",
      description:
        "Helped students survive full-stack development, projects, algorithms, data structures, and the strange swamp called web architecture without drowning in tutorial hell.",
      highlight:
        "Highlighted win: translated technical chaos into human language without sacrificing correctness. Rare, beautiful, and mildly suspicious in the best way.",
      tags: ["Mentoring", "Full Stack", "Algorithms", "Debugging"],
      color: "bg-cyan-400",
      emoji: "🧠",
      hoverClass: "",
    },
    {
      company: "Myte Group Inc.",
      role: "Full Stack Developer / AI-ML Engineer",
      location: "Montreal, Quebec, Canada",
      period: "January 2024 – April 2024",
      description:
        "Built full-stack web apps with React.js and Python Flask, designed databases and APIs, and worked with large datasets plus machine learning integrations — one of those jobs where the stack politely refuses to be small.",
      highlight:
        "Highlighted win: handled dynamic interfaces, APIs, and data-heavy workflows without letting the app turn into a haunted spreadsheet with trust issues.",
      tags: ["React", "Python", "Flask", "APIs"],
      color: "bg-yellow-300",
      emoji: "🤖",
      hoverClass: "hover:-translate-y-12 hover:rotate-12 hover:scale-110",
    },
    {
      company: "The Philippine Stock Exchange, Inc. (PSE)",
      role: "Software Developer",
      location: "Makati, Philippines",
      period: "May 2021 – August 2021",
      description:
        "Early professional software developer arc unlocked inside the ancient cathedral of enterprise reality, where bugs wear business casual.",
      highlight:
        "Highlighted win: gained real-world delivery experience, stronger instincts, and a healthy suspicion of corporate mystery systems, which remains one of my most stable skills.",
      tags: ["Software Dev", "Enterprise", "Foundations", "Code"],
      color: "bg-orange-300",
      emoji: "📈",
      hoverClass: "hover:translate-y-3 hover:rotate-[360deg] hover:scale-95",
    },
  ];

  const cursedQuotes = [
    "Certified Pixel Overthinker Since Birth",
    "Warning: May Contain Enterprise Forms",
    "Built Different, Styled Worse",
    "Lighthouse Enjoyer, Recruiter Confuser",
    "100% Real Developer, 0% Subtlety",
  ];

  const highlightedWins = [
    "Lighthouse 40 → 80",
    "Lighthouse 30 → 95",
    "React + Blazor + Python + Flask",
    "Frontend + Architecture + Performance",
  ];

  const fakeAwards = [
    {
      text: "🏆 Best Button Clicker 2026",
      className: "hover:rotate-[360deg] hover:-translate-y-4",
    },
    {
      text: "🥇 Senior CSS Goblin of the Month",
      className: "hover:-translate-y-6 hover:scale-110",
    },
    {
      text: "💀 Most Likely To Rotate A Card For No Reason",
      className: "",
    },
    {
      text: "🔥 Certified Shipper Of Frontend Nonsense",
      className: "hover:translate-y-3 hover:rotate-6",
    },
  ];

  const aiSnippets = [
    "> user: make it ugly",
    "> ai: understood",
    "> user: uglier",
    "> ai: this is now legally questionable",
    "> user: ur idiot lmao",
    "> ai: correct. deploying anyway",
    "> user: add performative male",
    "> ai: adding concentrated nonsense",
  ];

  const skills = [
    "React",
    "JavaScript",
    "TypeScript",
    "Blazor",
    "C#",
    "Python",
    "Node.js",
    "Flask",
    "MongoDB",
    "REST APIs",
    "Zustand",
    "HTML",
    "CSS",
    "Tailwind",
    "Frontend Architecture",
    "UI Engineering",
    "Performance Optimization",
    "Lighthouse",
    "Design Systems",
    "Reusable Components",
    "Full-Stack Development",
    "AI/ML Integration",
    "Microservices",
    "Database Design",
    "Debugging",
    "Mentoring",
    "Product UI",
    "Forms & Workflow Systems",
  ];

  return (
    <div
      className={`${
        isDarkMode
          ? "bg-[#0b1020] text-white"
          : "bg-[repeating-linear-gradient(45deg,#ff00aa_0px,#ff00aa_24px,#00ffee_24px,#00ffee_48px,#ffff00_48px,#ffff00_72px,#7c3aed_72px,#7c3aed_96px)] text-black"
      } min-h-screen overflow-x-hidden font-serif relative transition-colors duration-500`}
    >
      {showLoader && (
        <div className="fixed inset-0 z-[999] bg-black/88 backdrop-blur-sm flex items-center justify-center p-6">
          <div className="max-w-2xl w-full bg-yellow-300 border-[12px] border-double border-red-600 shadow-[20px_20px_0_#ff00aa] p-8 rotate-[-1deg] text-center">
            <div className="text-7xl mb-4 animate-pulse">⚠️</div>
            <h2 className="text-4xl md:text-6xl font-black uppercase text-blue-900 mb-4">
              Morning Caution Screen
            </h2>
            <p className="text-2xl font-black text-red-700 leading-10 mb-5">
              Warning: opening this portfolio before full brain activation may
              cause flashbang emotions, meme exposure, and immediate confusion.
            </p>
            <button
              onClick={() => setShowLoader(false)}
              className="inline-block bg-black text-yellow-300 px-5 py-3 text-xl font-black border-[6px] border-cyan-300 animate-bounce hover:scale-110 hover:rotate-3 transition-all duration-300"
            >
              I ACCEPT THE COLORED PORTFOLIO
            </button>
          </div>
        </div>
      )}

      <marquee className="bg-red-600 text-yellow-200 text-2xl font-bold py-3 border-b-[8px] border-dashed border-lime-300">
        🔥🔥🔥 DAVE SALVADOR PORTFOLIO MEGA PORTAL • NOW 300% UGLIER • HR
        NIGHTMARE EDITION • UNAUTHORIZED GLITTER PATCH APPLIED 🔥🔥🔥
      </marquee>

      <div className="fixed top-4 right-4 z-50 animate-bounce text-6xl rotate-12">
        💥
      </div>
      <div className="fixed bottom-6 left-4 z-50 animate-pulse text-6xl -rotate-12">
        🚀
      </div>
      <div className="fixed top-1/3 left-2 z-50 text-5xl animate-spin">⭐</div>
      <div className="fixed bottom-1/4 right-2 z-50 text-5xl animate-bounce">
        🗿
      </div>
      <div className="fixed top-24 left-1/2 z-50 text-5xl animate-ping">
        ☢️
      </div>
      <div className="fixed top-[18%] right-[18%] z-50 text-5xl animate-spin">
        🍕
      </div>
      <div className="fixed bottom-[18%] left-[22%] z-50 text-5xl animate-pulse">
        🐸
      </div>
      <div className="fixed top-[62%] right-[24%] z-50 text-4xl animate-bounce">
        💀
      </div>
      <div className="fixed top-[42%] left-[48%] z-50 text-4xl animate-spin">
        🐙
      </div>
      <div className="fixed bottom-[8%] right-[12%] z-50 text-5xl animate-pulse">
        🦄
      </div>
      <div className="fixed top-[12%] left-[14%] z-50 text-4xl animate-bounce">
        🍔
      </div>

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

      <main className="max-w-[1500px] mx-auto px-4 py-6">
        {fallingGithub && (
          <a
            href="https://github.com/davesalvador"
            target="_blank"
            rel="noreferrer"
            className="fixed z-[996] bg-cyan-300 px-6 py-4 border-[6px] border-black text-xl font-black shadow-[8px_8px_0_#000] inline-block hover:rotate-6 hover:scale-110"
            style={{
              left: `${fallingGithub.x}px`,
              top: `${fallingGithub.y}px`,
              transition: "top 900ms cubic-bezier(0.2, 0.9, 0.2, 1.1)",
              transform: "rotate(1deg)",
            }}
          >
            GitHub
          </a>
        )}

        {systemToast && (
          <div className="fixed bottom-6 right-6 z-[997] max-w-md bg-black text-lime-300 border-[6px] border-fuchsia-400 shadow-[10px_10px_0_#000] px-5 py-4 rotate-[-2deg] animate-pulse">
            <div className="text-xs uppercase tracking-[0.3em] font-black text-yellow-300 mb-2">
              system warning.exe
            </div>
            <div className="text-lg md:text-xl font-black">{systemToast}</div>
          </div>
        )}

        {activeAd && (
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
                  onClick={() => setActiveAd(null)}
                  className="bg-black text-yellow-300 px-4 py-2 border-[4px] border-white font-black hover:rotate-12 transition-all duration-300"
                >
                  X
                </button>
              </div>

              {activeAd === "hire" ? (
                <div>
                  <p className="text-xl font-black text-purple-900 leading-9 mb-4">
                    Hello recruiter. This is a completely unbiased pop-up
                    reminding you that hiring Dave Salvador would improve your
                    frontend, your Lighthouse score, and possibly your emotional
                    well-being.
                  </p>
                  <div className="bg-white/60 border-[6px] border-black p-4 text-lg font-black text-red-700 rotate-[1deg] mb-4">
                    side effects of not hiring Dave may include regret, slower
                    UI, and spiritually misaligned buttons.
                  </div>
                  <button
                    onClick={() => setActiveAd(null)}
                    className="bg-red-500 text-white px-6 py-3 border-[5px] border-black font-black text-xl hover:-translate-y-2 hover:scale-110 transition-all duration-300"
                  >
                    OKAY FINE I WILL CONSIDER IT
                  </button>
                </div>
              ) : (
                <div>
                  <p className="text-xl font-black text-blue-950 leading-9 mb-4">
                    Congratulations. You have unlocked the premium meme ad
                    experience. No purchase required. No dignity included.
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
                    onClick={() => setActiveAd(null)}
                    className="bg-black text-cyan-300 px-6 py-3 border-[5px] border-yellow-300 font-black text-xl hover:rotate-[360deg] transition-all duration-500"
                  >
                    I HAVE SEEN ENOUGH
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

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

        <nav
          className={`${
            isDarkMode
              ? "bg-slate-900 border-cyan-300 shadow-[20px_20px_0_#111827] text-white"
              : "bg-orange-300 border-blue-900 shadow-[20px_20px_0_#ff00aa]"
          } mb-8 border-[10px] border-double rotate-[-1deg] transition-colors duration-500`}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-6 relative">
            <button
              onClick={() => setIsDarkMode((v) => !v)}
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
                Lead Programmer / Frontend Wizard / Button Enjoyer / Chaos
                Curator
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
              Lead programmer with frontend instincts, product taste,
              architecture obsession, meme durability, and enough emotional
              intelligence to survive enterprise software without becoming a
              spreadsheet.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => setActiveAd("meme")}
                className="bg-red-500 text-white px-8 py-4 text-2xl font-black border-[6px] border-black shadow-[8px_8px_0_#000] transition-all duration-700 hover:-translate-y-6 hover:translate-x-4 hover:rotate-[360deg] hover:scale-110"
              >
                LOOK AT MY PORTFOLIO LORE
              </button>
              <button
                onClick={() => setActiveAd("hire")}
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
                performance, maintainable architecture, and shipping interfaces
                that feel fast, readable, and a little bit disrespectful to
                boring design.
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

        <section className="mb-8 bg-white border-[12px] border-dotted border-red-600 p-6 rotate-[-1deg] shadow-[18px_18px_0_#000]">
          <h3 className="text-4xl md:text-6xl font-black text-fuchsia-700 uppercase mb-4">
            Totally Real Testimonials
          </h3>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 text-xl font-black">
            <div className="xl:col-span-3 bg-black text-yellow-300 border-[6px] border-fuchsia-400 px-4 py-2 mb-2 rotate-[1deg] text-center uppercase">
              Review summary: too loud, still hiring
            </div>
            <div className="bg-yellow-300 border-[6px] border-black p-4 rotate-[-2deg]">
              “He touched the CSS and somehow it survived.” — Some Manager
              Probably
            </div>
            <div className="bg-cyan-300 border-[6px] border-black p-4 rotate-[2deg]">
              “Fast, dangerous, and weirdly effective.” — A Concerned Teammate
            </div>
            <div className="bg-pink-300 border-[6px] border-black p-4 rotate-[-3deg]">
              “I feared the hover effects, yet I respected them.” — Anonymous
              Recruiter
            </div>
          </div>
        </section>

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
              Welcome to the stack bazaar. Everything is loud, but technically
              real.
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
              “Good design should punch the eyeballs, pass Lighthouse, and then
              steal your recruiter.”
            </blockquote>
          </div>
        </section>

        <section
          id="contact"
          className={`${
            isDarkMode
              ? "bg-slate-800 border-cyan-300 shadow-[22px_22px_0_#020617] text-white"
              : "bg-red-300 border-black shadow-[22px_22px_0_#facc15]"
          } border-[12px] border-double p-8 rotate-[1deg] mb-8 transition-colors duration-500`}
        >
          <div className="text-6xl mb-4">📞📧🔥💼🦐</div>
          <h3
            className={`${
              isDarkMode ? "text-yellow-300" : "text-blue-900"
            } text-4xl md:text-6xl font-black mb-4 uppercase`}
          >
            Contact Explosion
          </h3>
          <p
            className={`${
              isDarkMode ? "text-white" : "text-black"
            } text-2xl font-bold leading-10 max-w-3xl mb-3`}
          >
            Need frontend engineering, product UI, architecture cleanup,
            performance work, or a developer who can build serious things while
            still respecting the sacred power of dumb jokes? Behold, the cursed
            contact buttons.
          </p>
          <p
            className={`${
              isDarkMode ? "text-cyan-300" : "text-blue-900"
            } text-lg md:text-xl font-black leading-8 max-w-3xl mb-6`}
          >
            Available for frontend engineering, product UI, and
            performance-focused work.
          </p>
          <div className="flex flex-wrap gap-4 text-xl font-black">
            <a
              href="mailto:work@davesalvador.com"
              className="bg-yellow-300 px-6 py-4 border-[6px] border-black hover:-translate-y-5 hover:rotate-[360deg] hover:scale-110 transition-all duration-700"
            >
              work@davesalvador.com
            </a>

            <button
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                setFallingGithub({
                  x: rect.left,
                  y: rect.top,
                  landed: false,
                });
              }}
              className="bg-cyan-300 px-6 py-4 border-[6px] border-black transition-all duration-700 hover:-translate-y-3 hover:rotate-6 hover:scale-110"
            >
              {!fallingGithub ? "GitHub" : "..."}
            </button>

            <a
              href="https://www.linkedin.com/in/dave-salvador/"
              target="_blank"
              rel="noreferrer"
              className="bg-lime-300 px-6 py-4 border-[6px] border-black hover:-translate-y-10 hover:rotate-[360deg] transition-all duration-700"
            >
              LinkedIn
            </a>

            <a
              href="tel:+639178581599"
              className="bg-fuchsia-300 px-6 py-4 border-[6px] border-black transition-all duration-700 hover:translate-y-3 hover:rotate-12 hover:scale-95"
            >
              +63 917 858 1599
            </a>
          </div>
        </section>

        <div className="mb-8 bg-lime-300 border-[10px] border-double border-black p-6 rotate-[1deg] shadow-[18px_18px_0_#ff00aa]">
          <h3 className="text-4xl md:text-5xl font-black text-blue-900 uppercase mb-4">
            Important Legal Disclaimer
          </h3>
          <p className="text-2xl font-black leading-10 text-red-700">
            This website may cause dizziness, recruiter confusion, spontaneous
            laughter, and an uncontrollable urge to hire Dave Salvador
            immediately.
          </p>
        </div>

        <footer className="bg-black text-yellow-300 text-center text-2xl font-black py-4 border-[8px] border-fuchsia-500 animate-pulse rotate-[0.5deg]">
          ✨ THANK YOU FOR VISITING THIS MONUMENT TO QUESTIONABLE TASTE AND
          PORTFOLIO LORE ✨
        </footer>
      </main>
    </div>
  );
}