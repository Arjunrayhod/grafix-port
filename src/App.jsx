import React, { useState, useEffect } from 'react';
import Navbar from './components/common/Navbar';
import Hero from './components/sections/Hero';
import PowerProjects from './components/sections/PowerProjects';
import FeaturedWork from './components/sections/FeaturedWork';
import Services from './components/sections/Services';
import VideoPortfolio from './components/sections/VideoPortfolio';
import MotionGraphics from './components/sections/MotionGraphics';
import CaseStudies from './components/sections/CaseStudies';
import WorkProcess from './components/sections/WorkProcess';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Footer from './components/common/Footer';
import ProjectModal from './components/common/ProjectModal';
import VideoModal from './components/common/VideoModal';
import ImageLightbox from './components/common/ImageLightbox';
import './App.css';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('arjun_theme') || 'dark';
  });
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [lightboxData, setLightboxData] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('arjun_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleOpenContact = () => {
    const el = document.querySelector('#contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenLightbox = (imageUrl, caption) => {
    setLightboxData({ url: imageUrl, caption });
  };

  return (
    <div
      className="min-h-screen app-root"
      data-theme={theme}
      style={{
        backgroundColor: 'var(--bg-dark)',
        color: 'var(--text-primary)',
        transition: 'background-color 0.3s ease, color 0.3s ease'
      }}
    >
      {/* Navigation with Theme Toggle */}
      <Navbar
        onOpenContact={handleOpenContact}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Main Content Sections */}
      <main>
        {/* Section A: Hero Section */}
        <Hero
          theme={theme}
          onOpenProject={(proj) => setSelectedProject(proj)}
          onOpenVideo={(vid) => setSelectedVideo(vid)}
        />

        {/* Section B: Show Your Power (Vault Guard, Cloud Data Guard, Video & Motion Reel) */}
        <PowerProjects
          theme={theme}
          onOpenLightbox={handleOpenLightbox}
          onPlayVideo={(vid) => setSelectedVideo(vid)}
        />

        {/* Extended Split Screen Cinema & App Showcase */}
        <FeaturedWork
          theme={theme}
          onSelectProject={(proj) => setSelectedProject(proj)}
          onOpenLightbox={handleOpenLightbox}
        />

        <Services theme={theme} />
        <VideoPortfolio theme={theme} onPlayVideo={(vid) => setSelectedVideo(vid)} />
        <MotionGraphics theme={theme} onPlayVideo={(vid) => setSelectedVideo(vid)} />
        <CaseStudies theme={theme} onOpenImageLightbox={handleOpenLightbox} />
        <WorkProcess theme={theme} />
        <About theme={theme} />

        {/* Section C: Transparent Contact Anchor (24h Prototype Guarantee) */}
        <Contact theme={theme} />
      </main>

      {/* Footer */}
      <Footer theme={theme} />

      {/* Project Deep Dive Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          theme={theme}
          onClose={() => setSelectedProject(null)}
          onSelectProject={(nextProj) => setSelectedProject(nextProj)}
          onPlayVideo={(vid) => setSelectedVideo(vid)}
          onOpenLightbox={handleOpenLightbox}
        />
      )}

      {/* Cinematic Fullscreen Video Modal */}
      {selectedVideo && (
        <VideoModal
          video={selectedVideo}
          theme={theme}
          onClose={() => setSelectedVideo(null)}
        />
      )}

      {/* Full-Screen Edge-to-Edge Image Lightbox */}
      {lightboxData && (
        <ImageLightbox
          image={lightboxData.url}
          caption={lightboxData.caption}
          theme={theme}
          onClose={() => setLightboxData(null)}
        />
      )}
    </div>
  );
}
