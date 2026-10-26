export const personalInfo = {
  name: "Tanay Umre",
  role: "Full-Stack Developer & Problem Solver",
  tagline: "Bridging algorithmic thinking with full-stack engineering. Building scalable backends with FastAPI and modern, reactive interfaces with React.",
  bio: "I am a developer with a deep foundation in Data Structures, Algorithms, and Competitive Programming (LeetCode Knight, 1870 peak rating) paired with practical hands-on experience building full-stack web platforms, desktop applications, and AI-powered tools.",
  email: "tanayumre@gmail.com",
  location: "India",
  status: "Open to Internships, Full-Time Roles & Collaborations",
  resumeUrl: "#", // User can replace with Google Drive link or static PDF
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
    detail: "Top ~5% globally · 500+ problems solved across DSA & Algorithmic paradigms",
    link: "https://leetcode.com/u/TANAY_UMRE/",
    color: "#FFA116",
    badge: "Knight (1870)"
  },
  {
    platform: "CodeChef",
    rank: "3-Star Coder",
    rating: "1654",
    detail: "Division 2 Contests · Consistent problem solving across math, greedy, and dynamic programming",
    link: "https://www.codechef.com/users/tu1235",
    color: "#9b51e0",
    badge: "★★★ (1654)"
  },
  {
    platform: "Codeforces",
    rank: "Pupil",
    rating: "1293",
    detail: "Active participant in Div. 2 and Div. 3 rounds focusing on speed and accuracy",
    link: "https://codeforces.com/profile/TANAY1235",
    color: "#22c55e",
    badge: "Pupil (1293)"
  },
  {
    platform: "AtCoder",
    rank: "Brown",
    rating: "712",
    detail: "Regular contest participation in AtCoder Beginner Contests (ABC)",
    link: "https://atcoder.jp/users/tu1235",
    color: "#a8713a",
    badge: "Brown (712)"
  },
  {
    platform: "HackerRank",
    rank: "Gold Badges",
    rating: "5★ C++ & SQL",
    detail: "5★ in C++, 5★ in SQL, 4★ in C, 3★ in Python and Problem Solving",
    link: "https://www.hackerrank.com/tanayumre",
    color: "#26a65b",
    badge: "5★ C++ & SQL"
  }
];

export const skillCategories = [
  {
    category: "Languages",
    skills: ["C++", "Python", "JavaScript (ES6+)", "SQL", "Kotlin", "C"]
  },
  {
    category: "Backend & Systems",
    skills: ["FastAPI", "SQLAlchemy", "Alembic", "Pydantic", "REST APIs", "JWT Auth", "Flask"]
  },
  {
    category: "Frontend & UI",
    skills: ["React", "Vite", "Electron", "HTML5", "CSS3 / Modern CSS", "Tailwind CSS", "Responsive Design"]
  },
  {
    category: "Databases & Cloud",
    skills: ["PostgreSQL (Neon)", "MySQL", "SQLite", "Render", "Vercel", "GitHub Actions (CI/CD / Cron)", "Git & GitHub", "Linux"]
  },
  {
    category: "Data & AI",
    skills: ["Hugging Face Inference API", "LLMs (Qwen)", "Pandas", "NumPy", "Matplotlib", "Oxlint"]
  }
];

export const projects = [
  {
    id: "url-shortener",
    title: "Full-Stack URL Shortener & Analytics",
    category: "fullstack",
    tagline: "Enterprise-grade URL management platform with JWT authentication, custom alias engine, and automated background link pruning.",
    featured: true,
    tech: ["FastAPI", "React", "PostgreSQL", "SQLAlchemy", "Alembic", "JWT", "GitHub Actions", "Render"],
    description: "Architected a decoupled full-stack URL shortener that resolves links with sub-second latency. Includes custom alias validation, click analytics tracking, and automated 30-day link expiration through GitHub Actions cron tasks.",
    highlights: [
      "Secure user registration and JWT-based authentication with bcrypt password hashing (pwdlib).",
      "Dynamic custom alias checking and automated 30-day URL lifecycle expiration.",
      "Scheduled cleanup of stale links utilizing automated GitHub Actions cron jobs.",
      "Live analytics dashboard displaying user link metrics, total clicks, and 20-link quota limits.",
      "Deployed frontend and backend independently on Render with a serverless Neon PostgreSQL cluster."
    ],
    liveUrl: "https://urlshortener-frontend-1uyh.onrender.com",
    apiUrl: "https://urlshortener-api-jra0.onrender.com",
    githubUrl: "https://github.com/TanayUmre/URLShortner",
    demoNote: "Note: Free Render backends may take ~30s on first request to wake up from spin-down."
  },
  {
    id: "chef-ai",
    title: "Chef AI – Smart Indian Recipe Generator",
    category: "ai",
    tagline: "AI pantry assistant turning household ingredients into authentic regional Indian recipes via Hugging Face LLMs.",
    featured: true,
    tech: ["React", "Vite", "Hugging Face API", "Qwen 2.5 7B", "CSS", "react-markdown"],
    description: "Developed an AI-driven culinary application that generates tailored North, South, East, and West Indian recipes based exclusively on ingredients the user has in their pantry.",
    highlights: [
      "Zero-waste pantry algorithm: accepts dynamic ingredient tags and prioritizes available staples.",
      "Engineered prompts with Qwen/Qwen2.5-7B-Instruct for culinary authenticity and practical measurement suggestions.",
      "Real-time Markdown rendering for step-by-step cooking directions and serving recommendations.",
      "Fast, modular UI built with Vite and React component architecture."
    ],
    liveUrl: null,
    githubUrl: "https://github.com/TanayUmre/AI-Chef"
  },
  {
    id: "pomodoro-timer",
    title: "Pomodoro Desktop Focus App",
    category: "desktop",
    tagline: "Distraction-free desktop productivity timer with mathematical circular progress rings and native window controls.",
    featured: true,
    tech: ["Electron", "React", "JavaScript", "SVG Geometry", "Canvas Confetti"],
    description: "Engineered a native cross-platform desktop application designed for deep work sessions, featuring floating window mode and custom SVG ring animations.",
    highlights: [
      "Computed real-time SVG stroke-dashoffset geometry (2 * π * r) for smooth, tick-free circular progress.",
      "Native desktop window controls configured with alwaysOnTop mode for zero-distraction productivity.",
      "Instant Dark & Light theme switcher with state persistence.",
      "Rewarding session-completion animations using canvas-confetti."
    ],
    liveUrl: null,
    githubUrl: "https://github.com/TanayUmre/Pomodoro-Timer"
  },
  {
    id: "tenzies-game",
    title: "Interactive Tenzies Dice Game",
    category: "frontend",
    tagline: "Feature-packed React 19 dice game featuring dynamic scoring, ARIA accessibility, and persistent leaderboards.",
    featured: false,
    tech: ["React 19", "Vite 8", "JavaScript", "localStorage API", "ARIA Live", "Vercel"],
    description: "Reimagined the classic Tenzies game into a full-fledged competitive web app with multiple difficulty tiers, millisecond-accurate timer, and persistent leaderboards.",
    highlights: [
      "Three difficulty modes (8, 10, 12 dice) with dynamic roll and time penalty score calculation.",
      "Persistent client-side leaderboard saving top scores and fewest rolls in browser localStorage.",
      "Fully accessible UX with keyboard navigation, focus management, and ARIA live screen-reader announcements.",
      "Live production deployment on Vercel with linting via Oxlint."
    ],
    liveUrl: "https://tenzies-tu-7422.vercel.app/",
    githubUrl: "https://github.com/TanayUmre/Tenzies-Game"
  },
  {
    id: "cp-31",
    title: "CP-31 Sheet in C++",
    category: "competitive",
    tagline: "Systematic mastery of competitive programming paradigms across Codeforces rating ladders.",
    featured: false,
    tech: ["C++", "STL", "Algorithms", "Data Structures", "Codeforces"],
    description: "Curated problem-solving repository solving the well-known CP-31 sheet covering ratings 800 to 1600+ with clean, modern C++ implementations.",
    highlights: [
      "Structured implementations covering Prefix Sums, Binary Search, Two Pointers, Dynamic Programming, and Graph Traversals.",
      "Optimized time and space complexity with custom fast I/O templates."
    ],
    liveUrl: null,
    githubUrl: "https://github.com/TanayUmre/CP31_SHEET_IN_CPP"
  },
  {
    id: "ecommerce-sales-analysis",
    title: "E-Commerce Sales Data Analysis",
    category: "data",
    tagline: "Exploratory data analysis and trend extraction on retail sales datasets using Python scientific stack.",
    featured: false,
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Kaggle"],
    description: "Data analysis project identifying sales drivers, seasonal purchasing behavior, customer retention metrics, and product revenue distribution.",
    highlights: [
      "Data cleaning, missing value imputation, and feature engineering on Kaggle retail datasets.",
      "Visualized revenue distributions, cohort purchase frequencies, and product performance curves."
    ],
    liveUrl: null,
    githubUrl: "https://github.com/TanayUmre/Ecommerce-Sales-Analysis"
  },
  {
    id: "ecommerce-app",
    title: "Android E-Commerce Mobile App",
    category: "desktop",
    tagline: "Native mobile e-commerce interface built using Kotlin and Gradle for Android devices.",
    featured: false,
    tech: ["Kotlin", "Android SDK", "Gradle"],
    description: "Native mobile application exploring mobile shopping UX, product catalog layouts, and item cart interactions in Kotlin.",
    highlights: [
      "Engineered mobile layouts using modern Android components.",
      "Configured Gradle build script and dependency management in Kotlin DSL."
    ],
    liveUrl: null,
    githubUrl: "https://github.com/TanayUmre/Ecommerce-app"
  }
];
