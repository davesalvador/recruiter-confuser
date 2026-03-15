export interface WorkExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  description: string;
  highlight: string;
  tags: string[];
  color: string;
  emoji: string;
  hoverClass: string;
}

export const workExperience: WorkExperienceItem[] = [
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
