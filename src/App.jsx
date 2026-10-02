import React, { useState } from 'react';
import Navbar from './components/common/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import FeaturedWork from './components/sections/FeaturedWork';
import VideoPortfolio from './components/sections/VideoPortfolio';
import MotionGraphics from './components/sections/MotionGraphics';
import CaseStudies from './components/sections/CaseStudies';
import WorkProcess from './components/sections/WorkProcess';
import Contact from './components/sections/Contact';
import Footer from './components/common/Footer';
import ProjectModal from './components/common/ProjectModal';
import VideoModal from './components/common/VideoModal';
import ImageLightbox from './components/common/ImageLightbox';
import './App.css';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [lightboxData, setLightboxData] = useState(null);

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
    <div className="min-h-screen bg-[#09090b] text-[#f4f4f6]">
      {/* Navigation */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Main Content Sections */}
      <main>
        <Hero
          onOpenProject={(proj) => setSelectedProject(proj)}
          onOpenVideo={(vid) => setSelectedVideo(vid)}
        />
        <FeaturedWork
          onSelectProject={(proj) => setSelectedProject(proj)}
          onOpenLightbox={handleOpenLightbox}
        />
        <Services />
        <VideoPortfolio onPlayVideo={(vid) => setSelectedVideo(vid)} />
        <MotionGraphics onPlayVideo={(vid) => setSelectedVideo(vid)} />
        <CaseStudies onOpenImageLightbox={handleOpenLightbox} />
        <WorkProcess />
        <About />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Deep Dive Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
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
          onClose={() => setSelectedVideo(null)}
        />
      )}

      {/* Full-Screen Edge-to-Edge Image Lightbox */}
      {lightboxData && (
        <ImageLightbox
          image={lightboxData.url}
          caption={lightboxData.caption}
          onClose={() => setLightboxData(null)}
        />
      )}
    </div>
  );
}
