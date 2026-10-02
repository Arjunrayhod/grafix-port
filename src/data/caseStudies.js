export const brandCaseStudies = [
  {
    id: "dukaanpilot-brand-system",
    brandName: "DukaanPilot & CloudBus Brand Systems",
    typeBadge: "Comprehensive Brand Identity Case Study",
    year: "2026",
    tagline: "Retail AI & Smart Transit Visual Identity Systems",
    heroDescription: "A deep dive into how I approach complete brand systems — from initial strategic discovery and vector logomark construction to UI design, typography scales, color palettes, and social collateral.",
    toolsUsed: ["Adobe Illustrator", "Figma", "Photoshop", "After Effects"],
    accentColor: "#2563eb",
    sections: {
      s01_overview: {
        number: "01",
        title: "Brand Overview",
        summary: "Modernizing the identity of technology and digital mobility.",
        content: "When designing for products like DukaanPilot (AI retail intelligence) and CloudBus (smart transit network), the mission is clear: translate complex underlying systems into approachable, visually magnetic, and trustworthy experiences. The identity systems must establish authority while feeling human, seamless, and dependable.",
        corePillars: [
          { name: "Clarity", desc: "Instantly recognizable forms that convey function at a glance." },
          { name: "Velocity", desc: "Forward-moving geometry symbolizing speed, modern transit, and AI guidance." },
          { name: "System Scalability", desc: "Built to work flawlessly from a 16px mobile favicon to large transit signage." }
        ]
      },
      s02_logo: {
        number: "02",
        title: "Logo Mark & Construction",
        summary: "Geometric synthesis of form, function, and memorable silhouette.",
        content: "Logomarks are engineered on strict mathematical grids with balanced corner radii. For DukaanPilot, a dynamic folding ribbon forms a letter 'D' and aerodynamic navigation wing. For CloudBus, a friendly rounded transit glyph sits within a balanced squircle container designed for mobile app launchers.",
        logoImage: "/assets/logos/master-logo-grid.png",
        constructionNotes: "Crafted in Adobe Illustrator using golden-ratio circular arcs and 8-degree kinetic slants."
      },
      s03_variations: {
        number: "03",
        title: "Logo Variations & Responsive Sizing",
        summary: "Adaptive configurations designed for dark, light, and compact digital viewports.",
        variations: [
          { type: "Horizontal Header Lockup", desc: "Mark + Wordmark aligned for desktop web headers and documents." },
          { type: "App Launcher Squircle", desc: "High-contrast solo glyph optimized for iOS/Android home screens." },
          { type: "Stacked Centered Identity", desc: "Balanced vertical alignment for marketing posters and presentation covers." },
          { type: "High-Contrast Monochrome", desc: "Single-tone black/white vector paths for embroidery, print, and stamps." }
        ]
      },
      s04_colors: {
        number: "04",
        title: "Color Palette & Token System",
        summary: "High-contrast dark neutrals calibrated with energetic, functional signal accents.",
        palette: [
          { name: "Obsidian Canvas", hex: "#09090b", role: "Dark Canvas & Negative Space", textDark: false },
          { name: "Transit Electric Blue", hex: "#2563eb", role: "Primary Brand Beacon & Trust", textDark: true },
          { name: "Indigo Momentum", hex: "#4f46e5", role: "Secondary Gradient Accent", textDark: true },
          { name: "Telemetry Mint", hex: "#10b981", role: "Confirmed Status & Growth", textDark: true },
          { name: "Muted Surface Carbon", hex: "#18181b", role: "Card Elevation & Contrast", textDark: false },
          { name: "Pure Signal White", hex: "#ffffff", role: "Headlines & Sharp Legibility", textDark: true }
        ],
        rationale: "Deep obsidian surfaces reduce visual strain, while energetic blue and indigo gradients provide instant recognition and digital credibility."
      },
      s05_typography: {
        number: "05",
        title: "Typography Architecture",
        summary: "Modern geometric grotesque contrasted with ultra-clean technical body type.",
        primaryFont: {
          family: "Plus Jakarta Sans / Syne",
          usage: "Display Headlines, Hero Text & Brand Marks",
          weights: "Bold (700), ExtraBold (800)",
          characteristics: "Contemporary, wide stance, tight geometric counters with sharp authority."
        },
        secondaryFont: {
          family: "Inter / Space Grotesk",
          usage: "UI Controls, Commuter Data, Timetables & Body Copy",
          weights: "Regular (400), Medium (500), SemiBold (600)",
          characteristics: "Maximized legibility across all screen densities, tall x-height, monospaced tabular numerals."
        }
      },
      s06_social: {
        number: "06",
        title: "Social Media & Marketing Collateral",
        summary: "Cohesive multi-platform templates engineered for high scroll-stop rates.",
        content: "Created promotional carousels, feature announcement graphics, and benefit-focused visual cards. Each template adheres to rigid 48px margin boundaries, bold value propositions, and dynamic 3D elements that stand out in crowded feeds.",
        previewImage: "/assets/projects/social-cloud-carousel.jpeg"
      },
      s07_website: {
        number: "07",
        title: "Website & Digital Product UI",
        summary: "Conversion-optimized digital interfaces and responsive user experiences.",
        content: "Designed high-fidelity mobile application flows including pass booking, live GPS routes, and conversational customer support desks. Features smooth card elevations, clear button touch targets, and intuitive data categorization.",
        previewImage: "/assets/projects/cloudbus-ui-helpdesk.jpeg"
      },
      s08_mockups: {
        number: "08",
        title: "Real-World Mockups & Posters",
        summary: "Testing the visual identity in physical and digital commuter environments.",
        items: [
          { name: "Mobile Transit App Showcase", desc: "Full smartphone presentation with active tickets and concession passes." },
          { name: "High-CTR Promotional Posters", desc: "Large-format print and digital billboard advertising 'Travel Smarter, Go Further'." },
          { name: "Digital Helpdesk Portal", desc: "Clean interactive support interface connecting commuters with transit assistants." }
        ],
        previewImage: "/assets/projects/cloudbus-app-poster.jpeg"
      },
      s09_final_result: {
        number: "09",
        title: "Final Result & System Impact",
        summary: "A unified, production-ready design language that conveys credibility and craft.",
        achievements: [
          "Developed complete brand ecosystem spanning identity, mobile UI, and promotional assets.",
          "Ensured full visual consistency across digital screens, dark interfaces, and marketing posters.",
          "Demonstrated how technical knowledge (Cloud Computing) powers pragmatic, user-first design decisions."
        ]
      },
      s10_process: {
        number: "10",
        title: "Design Process & Retrospective",
        summary: "The disciplined 5-stage workflow behind every project deliverable.",
        steps: [
          { phase: "01 Understand", desc: "Target demographic research, commuter pain points, and brand positioning criteria." },
          { phase: "02 Explore", desc: "Rapid pencil ideation, logo silhouette thumbnails, and visual moodboarding." },
          { phase: "03 Design", desc: "Vector precision drafting in Illustrator, typography grid calibration, and UI components in Figma." },
          { phase: "04 Refine", desc: "Contrast testing, mobile readability audits, spacing adjustments, and color harmony." },
          { phase: "05 Deliver", desc: "Exporting production-ready vector assets, high-res mockups, and component specifications." }
        ]
      }
    }
  }
];
