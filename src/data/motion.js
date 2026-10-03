import { resolveAsset } from '../utils/assets';

export const motionCategories = [
  "All",
  "Logo Animation",
  "UI & Product Motion",
  "Kinetic Typography",
  "Social & Loop Motion"
];

export const motionItems = [
  {
    id: "motion-logo-matrix",
    title: "Brand Logo Reveals & Vector Stings",
    category: "Logo Animation",
    description: "Multi-layered vector unfolding with geometric wing rotation and snap lock for DukaanPilot and Nexora.",
    tools: ["After Effects", "Illustrator"],
    fps: "60 FPS",
    duration: "4.2s",
    previewImage: resolveAsset("./assets/logos/master-logo-grid.png"),
    videoUrl: resolveAsset("./assets/videos/arjun-video-1.mp4"),
    aspectRatio: "16:9",
    techniques: ["Shape Layer Morphing", "Trim Paths", "Custom Graph Easing", "Subtle Glow Pass"]
  },
  {
    id: "motion-isometric-layers",
    title: "3D Layer Elevation & Product Depth",
    category: "UI & Product Motion",
    description: "Isometric perspective camera orbit displaying floating UI design layers and glowing optical rims.",
    tools: ["After Effects", "Photoshop"],
    fps: "60 FPS",
    duration: "5.0s",
    previewImage: resolveAsset("./assets/hero/hero-isometric.png"),
    videoUrl: resolveAsset("./assets/videos/arjun-video-1.mp4"),
    aspectRatio: "16:9",
    techniques: ["Isometric Projection", "Depth Lighting", "Camera Null Rigging", "Motion Blur"]
  },
  {
    id: "motion-cloudbus-ui",
    title: "CloudBus — Mobile UI Micro-Interactions",
    category: "UI & Product Motion",
    description: "Fluid 60fps mobile transitions showing ticket pass activation, conversational chat typing, and route telemetry.",
    tools: ["Figma", "After Effects"],
    fps: "60 FPS",
    duration: "6.0s",
    previewImage: resolveAsset("./assets/projects/cloudbus-ui-helpdesk.jpeg"),
    videoUrl: resolveAsset("./assets/videos/arjun-video-2.mp4"),
    aspectRatio: "9:16",
    techniques: ["Component State Animation", "Spring Easing", "Bezier Velocity Curves"]
  },
  {
    id: "motion-kinetic-focus",
    title: "FOCUS — Editorial Kinetic Typography",
    category: "Kinetic Typography",
    description: "High-contrast dynamic typography reveal with texture displacements and rhythmic audio transients.",
    tools: ["After Effects", "Photoshop"],
    fps: "60 FPS",
    duration: "3.5s",
    previewImage: resolveAsset("./assets/projects/focus-poster.jpg"),
    videoUrl: resolveAsset("./assets/videos/arjun-video-2.mp4"),
    aspectRatio: "16:9",
    techniques: ["Text Animators", "Displacement Mapping", "Rhythmic Beat Easing"]
  },
  {
    id: "motion-cloud-carousel",
    title: "Cloud Tech Hook — 3D Asset Motion",
    category: "Social & Loop Motion",
    description: "Floating 3D elements, dynamic drop shadows, and visual directional cues built for social feeds.",
    tools: ["Photoshop", "After Effects"],
    fps: "60 FPS",
    duration: "4.0s loop",
    previewImage: resolveAsset("./assets/projects/social-cloud-carousel.jpeg"),
    videoUrl: resolveAsset("./assets/videos/arjun-video-1.mp4"),
    aspectRatio: "1:1",
    techniques: ["Particle Float", "Dynamic Shadows", "Stop-Rate Hook Pacing"]
  }
];
