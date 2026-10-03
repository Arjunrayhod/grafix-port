export const projectCategories = [
  "All",
  "Web & Security",
  "App Development",
  "Video & Motion",
  "Branding & Design"
];

export const powerProjects = [
  {
    id: "vault-guard-system",
    title: "Vault Guard System",
    category: "Web & Security",
    secondaryCategory: "Full-Stack Web",
    typeBadge: "CodeAlpha Security Project",
    tagline: "Encryption-based Web Protection Layer / 2FA / SQL Injection Proofing",
    writeUp: "Designed an encryption-based web protection layer with 2FA and SQL injection proofing, locking site safety to 90%.",
    shortDescription: "Designed an encryption-based web protection layer with 2FA and SQL injection proofing, locking site safety to 90%.",
    fullDescription: "Engineered as an enterprise-grade cybersecurity layer during CodeAlpha training, Vault Guard provides a multi-stage defense architecture. It features AES-256 payload encryption, strict two-factor authentication (2FA), parameterized database queries to eliminate SQL injection attacks, and automated threat session lockdown.",
    year: "2026",
    role: "Lead Security & Full-Stack Developer",
    metrics: [
      { label: "Site Safety Rating", value: "90%" },
      { label: "SQLi Vulnerability", value: "0% (Proofed)" },
      { label: "Auth Protocol", value: "2FA + AES-256" }
    ],
    highlights: [
      "AES-256 payload encryption on sensitive data transport",
      "Two-factor authentication (2FA) with time-based verification",
      "Parameterized SQL query enforcement eliminating injection attacks",
      "Automated session timeout and suspicious activity lockdown",
      "Comprehensive audit logs and security dashboard"
    ],
    tools: ["React", "Node.js", "Express", "AES-256", "2FA / TOTP", "PostgreSQL", "Cybersecurity"],
    accentColor: "#3b82f6",
    coverImage: "./assets/projects/cloudbus-icon.jpeg",
    githubUrl: "https://github.com/Arjunrayhod",
    liveDemoUrl: "https://github.com/Arjunrayhod/grafix-port",
    videoUrl: "./assets/videos/arjun-video-1.mp4",
    videoTitle: "Vault Guard Security Protocol Demo"
  },
  {
    id: "cloud-data-guard",
    title: "Cloud Data Guard",
    category: "Web & Security",
    secondaryCategory: "Cloud & Backend",
    typeBadge: "Automated Cloud Pipeline",
    tagline: "Automated Secure Pipeline / Active Session Banning",
    writeUp: "Built an automated secure pipeline preventing duplicate cloud entries with automated active session banning.",
    shortDescription: "Built an automated secure pipeline preventing duplicate cloud entries with automated active session banning.",
    fullDescription: "A resilient cloud security pipeline designed to ensure data deduplication and block unauthorized concurrency abuse. The system enforces SHA-256 idempotency hashing, drops duplicate payloads in real-time, and detects token misuse to immediately terminate and ban active malicious sessions.",
    year: "2026",
    role: "Cloud Backend & Security Architect",
    metrics: [
      { label: "Duplicate Entry Rate", value: "0.00%" },
      { label: "Session Banning", value: "Instant Auto-Kill" },
      { label: "Data Pipeline", value: "Real-Time Cloud" }
    ],
    highlights: [
      "Zero-duplicate cloud pipeline with cryptographic idempotency checks",
      "Automated active session banning on suspicious or concurrent token replay",
      "Real-time event streaming and anomalous entry rejection",
      "Rate-limited cloud endpoints protecting downstream microservices",
      "Designed for cloud infrastructure (BCA Cloud Computing project)"
    ],
    tools: ["Cloud Computing", "Node.js", "Python", "Redis", "REST APIs", "Docker", "Cloud Security"],
    accentColor: "#10b981",
    coverImage: "./assets/projects/cloudbus-lockup.jpeg",
    githubUrl: "https://github.com/Arjunrayhod",
    liveDemoUrl: "https://github.com/Arjunrayhod/grafix-port",
    videoUrl: "./assets/videos/arjun-video-2.mp4",
    videoTitle: "Cloud Data Guard Pipeline Walkthrough"
  },
  {
    id: "video-motion-reel",
    title: "Video Editing & Motion Graphics Reel",
    category: "Video & Motion",
    secondaryCategory: "Video Editing",
    typeBadge: "Commercial Showreel 2026",
    tagline: "High-Retention Visual Storytelling / 4K Kinetic Motion",
    writeUp: "Engineered high-retention video edits and motion graphics with fast-paced cuts, sound design, and 3D visual effects.",
    shortDescription: "Direct operational video showcase featuring high-energy editing pacing, kinetic typography, and 3D motion design.",
    fullDescription: "An all-in-one motion design and video editing showreel engineered for modern creators, agencies, and brands. Demonstrates retention-driven pacing, rhythmic audio sync, color grading, and After Effects kinetic title cards.",
    year: "2026",
    role: "Video Editor & Motion Designer",
    metrics: [
      { label: "Playback Format", value: "4K / 60 FPS" },
      { label: "Retention Impact", value: "High Hook CTR" },
      { label: "Tools", value: "Premiere + AE" }
    ],
    highlights: [
      "Rhythmic retention-first video editing with seamless audio sync",
      "Kinetic typography sequences with smooth easing curves",
      "Custom motion graphics, logo reveals, and lower thirds",
      "Color grading calibrated for modern OLED and mobile displays",
      "Direct playable video stream embedded right inside portfolio"
    ],
    tools: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "Photoshop", "Sound Design"],
    accentColor: "#f59e0b",
    coverImage: "./assets/projects/focus-poster.jpg",
    youtubeEmbedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
    videoUrl: "./assets/videos/arjun-video-1.mp4",
    videoTitle: "Arjun Rathod Motion & Video Showreel",
    githubUrl: "https://github.com/Arjunrayhod"
  }
];

export const projects = [
  ...powerProjects,
  {
    id: "cloudbus-transit-network",
    title: "CloudBus — Smart Transit & Ticketing Mobile App",
    category: "App Development",
    secondaryCategory: "Web & Security",
    typeBadge: "Mobile App Maker Showcase",
    tagline: "Mobile App UI / Smart Transit / Digital E-Pass",
    shortDescription: "Production-ready mobile product architecture for CloudBus — digital bus ticketing, student concession pass, and live route management.",
    fullDescription: "As a BCA Cloud Computing student passionate about app creation, I engineered and designed CloudBus to streamline bus travel for students and daily commuters. Features streamlined 3-tap checkout, barcode ticket scanning, and accessible component hierarchies.",
    year: "2026",
    role: "Product App Designer & Prototype Maker",
    tools: ["React Native / Figma", "Adobe Photoshop", "Illustrator"],
    accentColor: "#2563eb",
    coverImage: "./assets/projects/cloudbus-app-poster.jpeg",
    githubUrl: "https://github.com/Arjunrayhod",
    liveDemoUrl: "https://github.com/Arjunrayhod/grafix-port",
    gallery: [
      {
        url: "./assets/projects/cloudbus-app-poster.jpeg",
        caption: "CloudBus Mobile App Presentation: E-Tickets, Student Concession & Digital Pass"
      },
      {
        url: "./assets/projects/cloudbus-icon.jpeg",
        caption: "Official App Icon Mark: Gradient Squircle & Vector Bus Glyph"
      },
      {
        url: "./assets/projects/cloudbus-lockup.jpeg",
        caption: "Horizontal Header Brand Lockup"
      }
    ],
    videoUrl: "./assets/videos/arjun-video-2.mp4",
    videoTitle: "CloudBus Mobile App Flow & Screen Walkthrough",
    hasCaseStudy: false,
    challenge: "Transit booking apps often fail users due to clutter and complicated navigation during rush hours.",
    approach: "Engineered high-contrast touch targets, fast student concession workflows, and instant barcode generation.",
    outcome: "A production-grade mobile app showcase bridging cloud infrastructure with consumer UI design."
  },
  {
    id: "master-brand-identities",
    title: "Master Brand Identity Folio (9 Logos)",
    category: "Branding & Design",
    secondaryCategory: "Design",
    typeBadge: "Brand Identity Folio",
    tagline: "DukaanPilot • CloudDataGuard • Brewora • Vidzen • Luméa",
    shortDescription: "A curated collection of 9 distinct brand systems and vector logomarks spanning AI tech, cloud cybersecurity, and video software.",
    fullDescription: "A comprehensive brand identity portfolio engineered to demonstrate vector geometry, typography hierarchies, and distinctive industry positioning.",
    year: "2026",
    role: "Brand Identity Designer",
    tools: ["Adobe Illustrator", "Figma", "Photoshop"],
    accentColor: "#f97316",
    coverImage: "./assets/logos/master-logo-grid.png",
    githubUrl: "https://github.com/Arjunrayhod",
    gallery: [
      {
        url: "./assets/logos/master-logo-grid.png",
        caption: "Master Folio: 9 Original Logomarks and Visual Identities"
      }
    ],
    videoUrl: "./assets/videos/arjun-video-1.mp4",
    videoTitle: "Brand & Logo Motion Reel",
    hasCaseStudy: true,
    outcome: "A versatile identity portfolio proving complete grasp of modern brand systems."
  },
  {
    id: "focus-editorial-poster",
    title: "FOCUS — High-Contrast Editorial Graphic Poster",
    category: "Branding & Design",
    secondaryCategory: "Design",
    typeBadge: "Editorial Graphic Design",
    tagline: "Monochrome Poster / Typography / Dramatic Lighting",
    shortDescription: "Dramatic monochrome typography poster combining heavy textured display lettering with sculpted silhouette lighting.",
    fullDescription: "An exploration of international typographic style and intense contrast lighting with deep obsidian blacks.",
    year: "2026",
    role: "Graphic Designer",
    tools: ["Photoshop", "Lightroom"],
    accentColor: "#e4e4e7",
    coverImage: "./assets/projects/focus-poster.jpg",
    videoUrl: "./assets/videos/arjun-video-2.mp4",
    videoTitle: "Kinetic Poster & Lighting Reel",
    outcome: "A commanding print and digital poster proving advanced lighting, masking, and typography craft."
  }
];
