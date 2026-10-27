export const personalInfo = {
  name: "Tanay Umre",
  handle: "TanayUmre",
  role: "Full-Stack Developer & Problem Solver",
  tagline: "I write fast APIs in FastAPI, reactive interfaces in React, and solve algorithmic puzzles in C++ that make my brain hurt.",
  shortBio: "Hey! I'm Tanay — a developer who genuinely loves coding. Half my time is spent building practical full-stack projects, and the other half is spent grinding contest problems on LeetCode and Codeforces.",
  email: "tanayumre@gmail.com",
  location: "India 🇮🇳",
  status: "Available for internships, full-time engineering roles & cool projects",
  resumeUrl: "#", // Replace with your Google Drive / static PDF link
  now: [
    { label: "Grinding", text: "CP-31 sheet in C++ (aiming for 1400+ on Codeforces)" },
    { label: "Building", text: "Production-ready web tools with FastAPI, React & PostgreSQL" },
    { label: "Learning", text: "Systems internals, async architectures & LLM integrations" },
    { label: "Fun Fact", text: "Solved 500+ LeetCode problems; Knight badge with 1870 peak rating" }
  ],
  socials: {
    github: "https://github.com/TanayUmre",
    linkedin: "https://www.linkedin.com/in/tanay-umre/",
    leetcode: "https://leetcode.com/u/TANAY_UMRE/",
    codeforces: "https://codeforces.com/profile/TANAY1235",
    codechef: "https://www.codechef.com/users/tu1235",
    atcoder: "https://atcoder.jp/users/tu1235",
    hackerrank: "https://www.hackerrank.com/tanayumre",
    codolio: "https://codolio.com/profile/NOOBCODE",
  }
};

export const codingStats = [
  {
    platform: "LeetCode",
    rank: "Knight",
    rating: "1870",
    detail: "Top ~5% globally. 500+ problems solved across DP, Graphs, Binary Search, and Trees.",
    link: "https://leetcode.com/u/TANAY_UMRE/",
    color: "#FFA116",
    badge: "Knight (1870)",
    icon: "⚔️"
  },
  {
    platform: "CodeChef",
    rank: "3-Star Coder",
    rating: "1654",
    detail: "Division 2 contest regular. Solving under tight contest clocks with greedy & math approaches.",
    link: "https://www.codechef.com/users/tu1235",
    color: "#a855f7",
    badge: "★★★ (1654)",
    icon: "⭐"
  },
  {
    platform: "Codeforces",
    rank: "Pupil",
    rating: "1293",
    detail: "Competing in Div. 2 & Div. 3 rounds. The best proving ground for speed and edge-case handling.",
    link: "https://codeforces.com/profile/TANAY1235",
    color: "#22c55e",
    badge: "Pupil (1293)",
    icon: "🎯"
  },
  {
    platform: "AtCoder",
    rank: "Brown",
    rating: "712",
    detail: "Weekend AtCoder Beginner Contests (ABC) focusing on clean mathematical proofs and logic.",
    link: "https://atcoder.jp/users/tu1235",
    color: "#b45309",
    badge: "Brown (712)",
    icon: "🥋"
  },
  {
    platform: "HackerRank",
    rank: "Gold Badges",
    rating: "5★ C++ & SQL",
    detail: "5 Stars in C++, 5 Stars in SQL queries, 4 Stars in C, plus Problem Solving certified.",
    link: "https://www.hackerrank.com/tanayumre",
    color: "#10b981",
    badge: "5★ C++ & SQL",
    icon: "🏅"
  }
];

export const skillCategories = [
  {
    category: "Languages",
    description: "What I write most days",
    skills: [
      { name: "C++", level: "Primary for CP & DSA" },
      { name: "Python", level: "APIs, Scripting & Data" },
      { name: "JavaScript", level: "ES6+, React & Frontend" },
      { name: "SQL", level: "Relational Queries & Joins" },
      { name: "C", level: "Low-level Fundamentals" }
    ]
  },
  {
    category: "Backend & Systems",
    description: "Designing resilient services",
    skills: [
      { name: "FastAPI", level: "Async, REST & OpenAPI" },
      { name: "PostgreSQL", level: "Neon, Schemas & Indices" },
      { name: "SQLAlchemy", level: "ORM & Query Builder" },
      { name: "Alembic", level: "Database Migrations" },
      { name: "Pydantic", level: "Strict Request Validation" },
      { name: "JWT Auth", level: "Tokens & Password Hashing" },
      { name: "Flask", level: "Microframeworks" }
    ]
  },
  {
    category: "Frontend & UI",
    description: "Building responsive interfaces",
    skills: [
      { name: "React", level: "Hooks, State & Context" },
      { name: "Vite", level: "Next-gen Build Tooling" },
      { name: "Electron", level: "Cross-platform Desktop" },
      { name: "Modern CSS", level: "Flex, Grid & Variables" },
      { name: "Tailwind CSS", level: "Utility-first Styling" },
      { name: "Responsive UI", level: "Mobile-first Polish" }
    ]
  },
  {
    category: "DevOps & Tools",
    description: "Shipping and automating",
    skills: [
      { name: "Git & GitHub", level: "Version Control & PRs" },
      { name: "GitHub Actions", level: "CI/CD & Cron Jobs" },
      { name: "Render", level: "PaaS Cloud Hosting" },
      { name: "Vercel", level: "Frontend Edge Deployment" },
      { name: "Linux / Bash", level: "CLI & Server Basics" }
    ]
  },
  {
    category: "AI & Data Tools",
    description: "Applied machine learning & analytics",
    skills: [
      { name: "Hugging Face API", level: "Inference & Prompt Tuning" },
      { name: "Qwen LLMs", level: "Instruction Generation" },
      { name: "Pandas & NumPy", level: "Data Wrangling & Stats" },
      { name: "Matplotlib", level: "Data Visualization" }
    ]
  }
];

export const projects = [
  {
    id: "url-shortener",
    title: "Full-Stack URL Shortener & Analytics",
    category: "fullstack",
    tagline: "Custom short links with JWT auth, click tracking, and automated GitHub Actions garbage collection.",
    story: "I wanted to understand how Bitly works under the hood — how collisions are handled, how custom aliases validate cleanly, and how to expire old URLs without slowing down PostgreSQL. I built this full-stack app with FastAPI and React, set up Alembic migrations, and hooked up a GitHub Actions cron job to automatically purge 30-day expired links.",
    featured: true,
    tech: ["FastAPI", "React", "PostgreSQL (Neon)", "SQLAlchemy", "Alembic", "JWT", "GitHub Actions", "Render"],
    highlights: [
      "JWT user auth with bcrypt password hashing (pwdlib)",
      "Custom alias reservation engine & click-count analytics",
      "Automated 30-day URL expiration via scheduled GitHub Actions cron jobs",
      "Per-user dashboard tracking 20 stored links with live stats",
      "Independent deployments on Render (FastAPI backend + React frontend)"
    ],
    liveUrl: "https://urlshortener-frontend-1uyh.onrender.com",
    apiUrl: "https://urlshortener-api-jra0.onrender.com",
    githubUrl: "https://github.com/TanayUmre/URLShortner",
    demoNote: "💡 Free tier Render backends sleep when inactive and may take ~30s on first load to wake up."
  },
  {
    id: "chef-ai",
    title: "Chef AI – Smart Indian Recipe Assistant",
    category: "ai",
    tagline: "Turn leftover pantry ingredients into authentic regional Indian recipes using Hugging Face LLMs.",
    story: "Ever opened your fridge at 9 PM, saw two random vegetables, and had zero idea what to cook? I built Chef AI to solve that exact problem. You dump in whatever ingredients you currently have at home, and the AI suggests a practical, authentic North, South, East, or West Indian recipe with realistic spices and step-by-step instructions.",
    featured: true,
    tech: ["React", "Vite", "Hugging Face Inference", "Qwen 2.5 7B", "CSS", "react-markdown"],
    highlights: [
      "Zero-waste pantry algorithm that strictly prioritizes user-entered ingredients",
      "Prompt-tuned Qwen 2.5 7B Instruct model tailored for Indian regional culinary methods",
      "Markdown formatting for easy reading of ingredients and numbered cooking steps",
      "Responsive, clean UI with dynamic ingredient chip additions"
    ],
    liveUrl: null,
    githubUrl: "https://github.com/TanayUmre/AI-Chef"
  },
  {
    id: "pomodoro-timer",
    title: "Minimalist Pomodoro Desktop App",
    category: "desktop",
    tagline: "Distraction-free desktop focus timer featuring mathematical circular SVG rings and always-on-top mode.",
    story: "Browser-based focus timers always ended up lost in my 50 open Chrome tabs. So I built a native desktop app with Electron and React. It features an 'always-on-top' floating window that stays gently in the corner while I study or code, a circular SVG ring that calculates remaining time with geometry (2 * π * r), and a burst of confetti when a focus sprint finishes.",
    featured: true,
    tech: ["Electron", "React", "JavaScript", "SVG Geometry", "Canvas Confetti"],
    highlights: [
      "Circular SVG ring calculated mathematically (dashoffset = circumference * (1 - progress))",
      "Native desktop window configured with alwaysOnTop distraction-free toggle",
      "Instant Dark / Light theme switcher with local state persistence",
      "Celebratory confetti reward animation upon session completion"
    ],
    liveUrl: null,
    githubUrl: "https://github.com/TanayUmre/Pomodoro-Timer"
  },
  {
    id: "tenzies-game",
    title: "Interactive Tenzies Dice Game",
    category: "frontend",
    tagline: "Fast-paced dice game with dynamic difficulty multipliers, millisecond timer, and persistent leaderboards.",
    story: "Took the classic dice-matching concept and leveled it up into a competitive, accessible web game. Added three difficulty tiers, dynamic roll and time penalties, local-storage leaderboard persistence, and ARIA screen-reader announcements.",
    featured: false,
    tech: ["React 19", "Vite 8", "JavaScript", "localStorage API", "ARIA Live", "Vercel"],
    highlights: [
      "Three difficulty levels (8, 10, and 12 dice) with live multiplier calculations",
      "Client-side persistent leaderboards saving top 3 lowest rolls and highest scores per mode",
      "Accessible design with keyboard navigation and ARIA live announcements",
      "Deployed on Vercel with clean code quality vetted by Oxlint"
    ],
    liveUrl: "https://tenzies-tu-7422.vercel.app/",
    githubUrl: "https://github.com/TanayUmre/Tenzies-Game"
  },
  {
    id: "cp-31",
    title: "CP-31 Sheet in C++",
    category: "competitive",
    tagline: "Systematic mastery of competitive programming paradigms across Codeforces rating ladders.",
    story: "Competitive programming is where I train my analytical muscles. This repo contains clean, optimized C++ solutions for the renowned CP-31 sheet (800 to 1600+ rating brackets) covering greedy algorithms, binary search, prefix sums, and dynamic programming.",
    featured: false,
    tech: ["C++", "STL", "Algorithms", "Data Structures", "Codeforces"],
    highlights: [
      "Structured implementations covering Prefix Sums, Binary Search, Two Pointers, and DP",
      "Optimized runtime and memory complexities with fast I/O templates"
    ],
    liveUrl: null,
    githubUrl: "https://github.com/TanayUmre/CP31_SHEET_IN_CPP"
  },
  {
    id: "ecommerce-sales-analysis",
    title: "E-Commerce Sales Data Analysis",
    category: "data",
    tagline: "Exploratory data analysis uncovering revenue patterns and purchasing habits using Python & Pandas.",
    story: "Analyzed an e-commerce sales dataset from Kaggle to understand what actually drives retail transactions. Cleaned inconsistent records, computed cohort purchasing frequencies, and visualized seasonal sales spikes.",
    featured: false,
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Kaggle"],
    highlights: [
      "Handled data cleaning, missing value imputation, and feature engineering",
      "Visualized revenue distributions, customer retention curves, and product trends"
    ],
    liveUrl: null,
    githubUrl: "https://github.com/TanayUmre/Ecommerce-Sales-Analysis"
  }
];
