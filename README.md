# Arjun Rathod — Creative Portfolio

> **Graphic Designer | Brand & Visual Designer | Video Editor | Motion Graphics**  
> *BCA Cloud Computing • Mandsaur University*

A production-ready personal creative portfolio website built with a modern creative-studio editorial aesthetic. Engineered with React, Vite, and modular CSS with fast static asset bundling.

Live Repository: [https://github.com/Arjunrayhod/grafix-port](https://github.com/Arjunrayhod/grafix-port)

---

## 🌟 Key Features

1. **Editorial Studio Aesthetic**:
   - Deep obsidian neutral palette (`#09090b`) with refined typography and controlled studio accents.
   - Zero generic AI clichés, zero fake stats, zero fake client testimonials.
   - Honest labeling: "Concept Project", "Personal Project", "Brand Identity Folio".

2. **Featured Work & Filterable Gallery**:
   - Filter categories: **All, Branding, UI / Web, Graphic Design, Video Editing, Motion Graphics**.
   - Interactive Project Detail Modal with high-res showcase, challenge, approach, design process breakdown, tools, and next-project navigator.

3. **Dedicated Video Portfolio**:
   - Supports actual production **MP4 video files** (`/assets/videos/arjun-video-1.mp4`, `arjun-video-2.mp4`).
   - Clean video viewer modal with standard playback controls (no unwanted autoplay with sound).
   - Aspect ratio tags (16:9 widescreen vs 9:16 vertical reels) and duration indicators.

4. **10-Step Brand Identity Case Study Inspector**:
   - Step 01: Brand Overview & Core Pillars
   - Step 02: Logo Mark & Geometric Construction
   - Step 03: Logo Variations & Responsive Sizing
   - Step 04: Color Palette & Swatches (with one-click hex copy to clipboard)
   - Step 05: Typography Architecture (Display vs Technical Body type)
   - Step 06: Social Media Identity & High-CTR Carousels
   - Step 07: Website & Product UI Mockups
   - Step 08: Real-World Mockups & Signage
   - Step 09: Final Result & System Impact
   - Step 10: 5-Stage Design Process Retrospective

5. **Motion Graphics Showroom**:
   - Dynamic showcases for logo animations, kinetic typography, UI micro-interactions, and 3D camera orbits.
   - FPS indicators (`60 FPS`), duration tags, and technique chips (Shape Layer Morphing, Trim Paths, Graph Easing).

6. **Work Process & Services**:
   - 4 Specialized Services: Brand & Visual Design, Graphic Design, Video Editing, Motion Graphics.
   - 5-Stage Methodology: 01 Understand → 02 Explore → 03 Design → 04 Refine → 05 Deliver.

7. **Direct Inquiry & Contact**:
   - Click-to-copy email badge (`arjunrathod.creative@gmail.com`).
   - Direct links to LinkedIn and GitHub.
   - Interactive inquiry form that automatically prepares a pre-filled mailto draft.

---

## 📁 Project Structure

```text
grafix-port/
├── public/
│   ├── assets/
│   │   ├── hero/            # Hero graphic assets (hero-isometric.png)
│   │   ├── logos/           # Master brand logo grids (master-logo-grid.png)
│   │   ├── projects/        # Project covers & UI mockups (CloudBus, Focus, Carousels)
│   │   └── videos/          # Real MP4 videos (arjun-video-1.mp4, arjun-video-2.mp4)
│   └── favicon.svg          # AR Studio Monogram Favicon
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Navbar.jsx       # Sticky header with mobile drawer
│   │   │   ├── Footer.jsx       # Studio footer with copyright and links
│   │   │   ├── Icons.jsx        # Vector SVG icons (LinkedIn, GitHub)
│   │   │   ├── ProjectModal.jsx # Fullscreen project case deep-dive
│   │   │   └── VideoModal.jsx   # Clean native MP4 video player modal
│   │   └── sections/
│   │       ├── Hero.jsx         # Hero with 3D preview & CTAs
│   │       ├── About.jsx        # Bio & Mandsaur University education
│   │       ├── Services.jsx     # 4 Core service cards
│   │       ├── FeaturedWork.jsx # Filterable work gallery
│   │       ├── VideoPortfolio.jsx # Dedicated MP4 video section
│   │       ├── MotionGraphics.jsx # Kinetic animation showroom
│   │       ├── CaseStudies.jsx  # Interactive 10-step brand inspector
│   │       ├── WorkProcess.jsx  # 5-stage design workflow
│   │       └── Contact.jsx      # Inquiry form & direct social links
│   ├── data/
│   │   ├── personal.js      # Arjun's bio, education, email & social links
│   │   ├── projects.js      # All portfolio projects and gallery data
│   │   ├── videos.js        # Video files, aspect ratios, and metadata
│   │   ├── motion.js        # Motion graphics cards and techniques
│   │   ├── caseStudies.js   # 10-step brand identity system data
│   │   ├── services.js      # 4 Primary services and deliverables
│   │   └── process.js       # 5-stage workflow details
│   ├── App.css              # Studio UI components and card styling
│   ├── index.css            # Design tokens, typography & dark theme
│   ├── App.jsx              # Main React application
│   └── main.jsx             # Entry point
├── index.html               # SEO metadata, Open Graph & Twitter tags
├── vite.config.js           # Vite configuration
└── package.json
```

---

## 🛠️ How to Manage and Add New Content

You don't need complex coding skills to update your portfolio. Everything is neatly separated in `src/data/` and `public/assets/`.

### 1. Adding a New Project
1. Drop your project image into `public/assets/projects/my-new-project.jpg`
2. Open `src/data/projects.js`
3. Add a new object inside the `projects` array:
```javascript
{
  id: "my-new-project",
  title: "Brand Name",
  category: "Branding", // "Branding" | "UI / Web" | "Graphic Design" | "Video Editing" | "Motion Graphics"
  typeBadge: "Concept Project", // Or "Personal Project"
  tagline: "Short one-line subtitle",
  shortDescription: "A sentence describing what you designed.",
  fullDescription: "Detailed background about the client or project goals.",
  year: "2026",
  role: "Brand Designer, Graphic Designer",
  tools: ["Photoshop", "Illustrator"],
  coverImage: "/assets/projects/my-new-project.jpg",
  gallery: [
    { url: "/assets/projects/my-new-project.jpg", caption: "Main Brand Cover" }
  ],
  videoUrl: null, // Or "/assets/videos/my-video.mp4"
  challenge: "What problem were you solving?",
  approach: "How did you design the solution?",
  designProcess: [
    "Step 1: Moodboard and sketching",
    "Step 2: Vector drafting and color palette"
  ],
  outcome: "What was the final impact or deliverable?"
}
```
4. Save the file. Your new project will automatically appear with filtering and modal details!

---

### 2. Adding a New Video
1. Place your MP4 video file into `public/assets/videos/my-video.mp4`
2. Place a thumbnail image into `public/assets/projects/my-poster.jpg`
3. Open `src/data/videos.js`
4. Add an entry:
```javascript
{
  id: "my-video-edit",
  title: "Commercial Reel Title",
  category: "Showreel", // "Showreel" | "Short-Form / Reels" | "Commercial & Motion"
  aspectRatio: "16:9", // Or "9:16" for vertical mobile reels
  duration: "0:45",
  year: "2026",
  description: "Description of the edit, pacing, and color grade.",
  poster: "/assets/projects/my-poster.jpg",
  videoUrl: "/assets/videos/my-video.mp4",
  tools: ["Premiere Pro", "After Effects"],
  highlights: ["Sound Design", "Speed Ramps", "Color Grade"]
}
```

---

### 3. Updating Personal Contact Info
Open `src/data/personal.js`:
- Update `email`, `linkedin`, `instagram`, or `github` URLs.
- Change the bio, education details, or hero subtext.

---

## 🚀 Running and Deploying

### Local Development
To preview the website live on your machine:
```bash
npm run dev
```
Open the browser at `http://localhost:5173`.

### Production Build
To create an optimized production build:
```bash
npm run build
```
This produces lightning-fast static files inside the `dist/` directory.

### Pushing to GitHub
Your repository is already connected to `https://github.com/Arjunrayhod/grafix-port.git`.
Run:
```bash
git add .
git commit -m "feat: complete production portfolio for Arjun Rathod"
git push -u origin main
```

### Free 1-Click Hosting Options:
- **Vercel**: Import your GitHub repository `Arjunrayhod/grafix-port` on [vercel.com](https://vercel.com) — it will auto-detect Vite and deploy in 30 seconds.
- **Netlify**: Connect `Arjunrayhod/grafix-port` on [netlify.com](https://netlify.com) — Build command: `npm run build`, Publish directory: `dist`.
- **GitHub Pages**: Add `"base": "./"` to `vite.config.js` and deploy via GitHub Actions.

---

© 2026 Arjun Rathod. All rights reserved.
