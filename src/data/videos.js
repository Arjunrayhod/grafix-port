import { resolveAsset } from '../utils/assets';

export const videoCategories = [
  "All",
  "Project Explanation",
  "Editing Showcase",
  "Motion & Commercial"
];

export const videos = [
  {
    id: "project-explanation-long",
    title: "Project Architecture & Full In-Depth Walkthrough",
    category: "Project Explanation",
    tagline: "Comprehensive Project Breakdown • Code & Architecture",
    badge: "Long Video • In-Depth Explanation",
    aspectRatio: "16:9",
    duration: "Long Walkthrough",
    year: "2026",
    description: "In-depth video where I explain the complete project architecture, technical decisions, problem statement, development stack, and operational workflows.",
    poster: resolveAsset("./assets/projects/cloudbus-app-poster.jpeg"),
    videoUrl: resolveAsset("./assets/videos/project-explanation-long.mp4"),
    client: "Arjun Rathod Original Breakdown",
    tools: ["Full-Stack Architecture", "Screen Recording", "Technical Breakdown", "Premiere Pro"],
    highlights: [
      "End-to-End System Architecture Breakdown",
      "Full-Stack Web & Security Pipeline Insights",
      "Real-World Problem Solving & Architecture Rationale",
      "Live Operational Walkthrough"
    ],
    notes: "Detailed project explanation video recorded by Arjun Rathod."
  },
  {
    id: "editing-showcase-short",
    title: "Video Editing & Viral Retention Pacing Reel",
    category: "Editing Showcase",
    tagline: "Speed Ramps • Beat Matching • High-Retention Hooks",
    badge: "Short Video • Editing Showcase",
    aspectRatio: "16:9",
    duration: "Short-Form Reel",
    year: "2026",
    description: "High-energy short video demonstrating rhythm beat matching, dynamic speed ramping, audio SFX risers, and retention-first editing designed for creators and brands.",
    poster: resolveAsset("./assets/projects/focus-poster.jpg"),
    videoUrl: resolveAsset("./assets/videos/editing-showcase-short.mp4"),
    client: "Arjun Rathod Original Edit",
    tools: ["Premiere Pro", "CapCut Pro", "DaVinci Resolve", "Sound Design"],
    highlights: [
      "Dynamic Speed Ramping & Beat Drops",
      "Visual Hook Creation & Retention Pacing",
      "Punchy Subtitles & Motion Callouts",
      "Cinematic Sound Design & Audio Risers"
    ],
    notes: "Short editing showcase highlighting retention pacing and dynamic cuts."
  },
  {
    id: "motion-creative-showcase",
    title: "Creative Motion Graphics & Visual Showcase",
    category: "Motion & Commercial",
    tagline: "Kinetic Typography • 3D Compositing • Visual Energy",
    badge: "Creative Production",
    aspectRatio: "16:9",
    duration: "Creative Cut",
    year: "2026",
    description: "Multi-layered creative production integrating motion design elements, graphic overlays, sound design, and clean visual storytelling.",
    poster: resolveAsset("./assets/logos/master-logo-grid.png"),
    videoUrl: resolveAsset("./assets/videos/motion-creative-showcase.mp4"),
    client: "Arjun Rathod Original Creative",
    tools: ["After Effects", "Premiere Pro", "Photoshop"],
    highlights: [
      "Motion Graphics & Vector Reveals",
      "High-Contrast Color Calibration",
      "Graphic Overlays & Text Animators",
      "Engagement-Driven Visual Pacing"
    ],
    notes: "Creative motion and visual design cut."
  },
  {
    id: "cloudbus-transit-video",
    title: "CloudBus — Smart Transit Feature Walkthrough",
    category: "Project Explanation",
    tagline: "Mobile App Flow • Digital E-Pass • Query Desk",
    badge: "Mobile App Walkthrough",
    aspectRatio: "9:16",
    duration: "App Walkthrough",
    year: "2026",
    description: "Mobile app feature walkthrough focusing on the digital e-pass, concession cards, and instant passenger query desk.",
    poster: resolveAsset("./assets/projects/cloudbus-ui-helpdesk.jpeg"),
    videoUrl: resolveAsset("./assets/videos/arjun-video-2.mp4"),
    client: "CloudBus Showcase",
    tools: ["Figma", "Premiere Pro", "CapCut Pro"],
    highlights: [
      "Mobile App UI Walkthrough",
      "Concession Pass Verification Flow",
      "Passenger Query Desk Interaction",
      "Vertical Format Suited for Mobile Demos"
    ],
    notes: "Mobile application interface walkthrough."
  },
  {
    id: "brand-logo-motion-reel",
    title: "Brand Systems & Vector Logomark Reel",
    category: "Motion & Commercial",
    tagline: "Vector Geometry • Logomark Reveals • Sound Sync",
    badge: "Logo Motion",
    aspectRatio: "16:9",
    duration: "Motion Cut",
    year: "2026",
    description: "Animated logomark reveals showcasing vector origami wings, security shield glyphs, and brand stings in 60 FPS motion.",
    poster: resolveAsset("./assets/hero/hero-isometric.png"),
    videoUrl: resolveAsset("./assets/videos/arjun-video-1.mp4"),
    client: "Brand Systems Showcase",
    tools: ["After Effects", "Adobe Illustrator", "Premiere Pro"],
    highlights: [
      "Vector Shape Unfolding & Morphing",
      "60 FPS Smooth Easing Transitions",
      "Sound Design & Sub-Bass Drops"
    ],
    notes: "Brand identity and vector motion presentation."
  }
];
