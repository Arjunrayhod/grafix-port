export const projectCategories = [
  "All",
  "Branding",
  "UI / Web",
  "Graphic Design",
  "Video Editing"
];

export const projects = [
  {
    id: "master-brand-identities",
    title: "Master Brand Identity Collection (9 Logos)",
    category: "Branding",
    secondaryCategory: "Graphic Design",
    typeBadge: "Brand Identity Folio",
    tagline: "DukaanPilot • CloudDataGuard • Brewora • Flexora • Vidzen • Luméa • Nexora",
    shortDescription: "A curated collection of 9 distinct brand identities and vector logomarks spanning AI technology, cloud cybersecurity, artisan coffee, fitness, and video software.",
    fullDescription: "A comprehensive brand identity portfolio engineered to demonstrate vector geometry, typography hierarchies, and distinctive industry positioning. From the organic curves of Luméa to the geometric origami wing of DukaanPilot and the isometric security shield of CloudDataGuard.",
    year: "2026",
    role: "Brand Identity Designer",
    tools: ["Adobe Illustrator", "Figma", "Photoshop"],
    accentColor: "#f97316",
    coverImage: "./assets/logos/master-logo-grid.png",
    gallery: [
      {
        url: "./assets/logos/master-logo-grid.png",
        caption: "Master Folio: 9 Original Logomarks and Visual Identities"
      }
    ],
    videoUrl: "./assets/videos/arjun-video-1.mp4", // Paired with video for split-screen autoplay!
    videoTitle: "Brand & Logo Motion Reel",
    hasCaseStudy: true,
    caseStudyId: "dukaanpilot-brand-system",
    challenge: "Demonstrating design versatility across vastly different industries while maintaining strict mathematical grid discipline.",
    approach: "Explored unique metaphors for each company: folded navigation wing for retail AI, isometric shield for security, and steam-infused bean for coffee.",
    designProcess: [
      "Conceptual Discovery: Mapping brand voice and emotional tone.",
      "Vector Construction in Illustrator: Geometric drafting with golden ratio nodes.",
      "Typography Pairing: Pairing each symbol with bespoke display and grotesk typefaces."
    ],
    outcome: "A versatile identity portfolio proving complete grasp of modern brand system development and logo design craft."
  },
  {
    id: "cloudbus-transit-network",
    title: "CloudBus — Smart Transit Network",
    category: "UI / Web",
    secondaryCategory: "Branding",
    typeBadge: "Personal & Concept Project",
    tagline: "Mobile App UI / Smart Transit / Digital E-Pass",
    shortDescription: "Complete mobile product design and brand identity system for CloudBus — digital bus ticketing, student concession pass, and smart transit network.",
    fullDescription: "As a BCA Cloud Computing student deeply passionate about user experience, I conceptualized and designed CloudBus to streamline bus travel for students and daily commuters. Features clear visual categorization, barcode pass scanning, and accessible typography.",
    year: "2026",
    role: "Product UI/UX, Visual Marketing",
    tools: ["Figma", "Adobe Photoshop", "Illustrator"],
    accentColor: "#2563eb",
    coverImage: "./assets/projects/cloudbus-app-poster.jpeg",
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
    videoUrl: "./assets/videos/arjun-video-2.mp4", // Paired with video for split-screen autoplay!
    videoTitle: "CloudBus Dynamic Motion & UI Flow",
    hasCaseStudy: false,
    challenge: "Public transit booking apps are often cluttered and confusing for daily commuters on the go.",
    approach: "Designed a friendly blue gradient identity with high-contrast touch targets, quick concession access, and bold headline hierarchy.",
    designProcess: [
      "User Flow Mapping: Streamlining pass purchase to under 3 taps.",
      "High-Fidelity Prototyping: Creating scalable mobile components in Figma.",
      "Marketing Collateral: Designing high-converting app showcase posters."
    ],
    outcome: "A production-grade mobile app showcase bridging cloud infrastructure with consumer UI design."
  },
  {
    id: "cloudbus-ui-helpdesk",
    title: "CloudBus — Help Desk & Live Chat UI",
    category: "UI / Web",
    secondaryCategory: "Branding",
    typeBadge: "Mobile App UI",
    tagline: "Passenger Help & Query Desk / Conversational UI",
    shortDescription: "Interactive 24/7 passenger support desk interface with category filters, multi-lingual queries, and conversational chat bubbles.",
    fullDescription: "An in-depth UI design for the CloudBus passenger query desk. Enables commuters to receive instant support for route delays, student passes, and ticket inquiries with dedicated support team status badges.",
    year: "2026",
    role: "UI/UX Designer",
    tools: ["Figma", "Photoshop"],
    accentColor: "#3b82f6",
    coverImage: "./assets/projects/cloudbus-ui-helpdesk.jpeg",
    gallery: [
      {
        url: "./assets/projects/cloudbus-ui-helpdesk.jpeg",
        caption: "Passenger Help & Query Desk: Chat Interface & Mobile Flow"
      }
    ],
    videoUrl: "./assets/videos/arjun-video-1.mp4",
    videoTitle: "Interactive UI & Micro-Interaction Reel",
    hasCaseStudy: false,
    challenge: "Designing a mobile support desk that feels responsive, friendly, and non-intimidating for users during transit emergencies.",
    approach: "Structured conversational chat with clear user vs agent message bubbles, category dropdowns, and reassurance badges.",
    designProcess: [
      "Information Hierarchy: Prioritizing common pass questions and quick answers.",
      "Color & Visual Tokens: Trust-inspiring navy and sky blue color palettes.",
      "Mobile Squint Test: Ensuring legibility under direct sunlight."
    ],
    outcome: "An accessible, friendly support interface that improves passenger satisfaction and reduces inquiry friction."
  },
  {
    id: "focus-editorial-poster",
    title: "FOCUS — High-Contrast Editorial Graphic Poster",
    category: "Graphic Design",
    secondaryCategory: "Branding",
    typeBadge: "Editorial Graphic Design",
    tagline: "Monochrome Poster / Typography / Dramatic Lighting",
    shortDescription: "Dramatic monochrome typography poster combining heavy textured display lettering with sculpted silhouette lighting.",
    fullDescription: "An exploration of international typographic style and intense contrast lighting. The poster demonstrates tight spatial interaction between background typography ('FOCUS'), textured concrete typography, and anatomical silhouette.",
    year: "2026",
    role: "Graphic Designer",
    tools: ["Photoshop", "Lightroom"],
    accentColor: "#e4e4e7",
    coverImage: "./assets/projects/focus-poster.jpg",
    gallery: [
      {
        url: "./assets/projects/focus-poster.jpg",
        caption: "FOCUS High-Contrast Monochrome Editorial Poster"
      }
    ],
    videoUrl: "./assets/videos/arjun-video-2.mp4",
    videoTitle: "Kinetic Poster & Lighting Reel",
    hasCaseStudy: false,
    challenge: "Creating commanding visual drama and depth using exclusively black, white, and grayscale tonal values.",
    approach: "Intertwined condensed typography behind the subject's silhouette while preserving typographic legibility through edge lighting.",
    designProcess: [
      "Subject Lighting & Edge Masking: High-precision tonal masking in Photoshop.",
      "Typography Placement: Heavy sans-serif display lettering with concrete texture maps.",
      "Contrast Calibration: Preserving specular highlights against deep obsidian blacks."
    ],
    outcome: "A commanding print and digital poster proving advanced Photoshop lighting, masking, and typography craft."
  },
  {
    id: "cloud-industry-carousel",
    title: "Cloud Industry Insights — Social Media Hook",
    category: "Graphic Design",
    secondaryCategory: "UI / Web",
    typeBadge: "Social & Carousel Design",
    tagline: "High-CTR Visual / 3D Asset Composition / Social Carousel",
    shortDescription: "High-engagement social media visual hook and carousel slide designed for tech founders and cloud computing developers.",
    fullDescription: "A high-impact social media creative engineered around modern scroll-stop psychology ('These three projects will change the cloud industry'). Features 3D brain assets, realistic drop shadows, and clean directional prompting.",
    year: "2026",
    role: "Graphic Designer, Content Specialist",
    tools: ["Photoshop", "Illustrator"],
    accentColor: "#ef4444",
    coverImage: "./assets/projects/social-cloud-carousel.jpeg",
    gallery: [
      {
        url: "./assets/projects/social-cloud-carousel.jpeg",
        caption: "Hook Slide: 'These Three Projects Will Actually Change The Cloud Industry'"
      }
    ],
    videoUrl: "./assets/videos/arjun-video-1.mp4",
    videoTitle: "Social Hook & Dynamic Asset Reel",
    hasCaseStudy: false,
    challenge: "Capturing user attention in dense LinkedIn and social feeds where readers scroll past within 1.5 seconds.",
    approach: "High-contrast typography, realistic floating 3D elements, and clean editorial whitespace.",
    designProcess: [
      "Curiosity Hook Formulation: Developing an authoritative question.",
      "Asset Lighting & Shadow Mapping: Compositing 3D brain and currency depth.",
      "Mobile Scale Testing: Verifying that text is 100% readable on small screens."
    ],
    outcome: "A scroll-stopping visual hook that elevates technical cloud topics into premium, shareable visual media."
  }
];
