import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { ArrowDown, X } from 'lucide-react';
import { galleriesData } from './galleryData';
import GalleryPage from './GalleryPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/gallery/:id" element={<GalleryPage />} />
    </Routes>
  );
}

function HomePage() {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  // Smooth scroll to the Gallery section
  const scrollToGallery = () => {
    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Close lightbox on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxImg(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#EAE6DF] text-[#1A2018] font-sans selection:bg-[#232920] selection:text-[#EAE6DF]">
      
      {/* 1. Hero Landing Page - Earthy & Elegant */}
      <section className="relative min-h-[95vh] w-full flex flex-col items-center justify-center pt-20 pb-12 px-6 md:px-12 max-w-[1600px] mx-auto">
        
        {/* Stark, Elegant Greeting */}
        <div className="text-center max-w-4xl mx-auto mb-12 z-10">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-semibold tracking-widest text-[#1A2018] mb-6 uppercase">
            Mario Solis
          </h1>
          <p className="text-lg md:text-xl text-[#4A5343] max-w-2xl mx-auto font-serif italic tracking-wider">
            Rooted in nature, drawn to the quiet dark.
          </p>
        </div>

        {/* Sharp Hero Image Container */}
        <div className="w-full max-w-6xl h-[45vh] md:h-[55vh] rounded-sm overflow-hidden shadow-2xl relative group cursor-pointer border border-[#C2BDB4]">
          <img 
            src="https://picsum.photos/seed/dark-nature/1920/1080" 
            alt="Hero Background" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-[#1A2018]/20 group-hover:bg-transparent transition-colors duration-500"></div>
          
          {/* Sharp Action Button */}
          <button 
            onClick={scrollToGallery}
            className="absolute bottom-0 right-0 w-16 h-16 md:w-20 md:h-20 bg-[#232920] flex items-center justify-center hover:bg-[#3A4234] transition-all duration-300 text-[#EAE6DF]"
            aria-label="Scroll to Gallery"
          >
            <ArrowDown size={32} strokeWidth={1.5} />
          </button>
        </div>
      </section>

      {/* 2. About Me Section - Dark Olive & Moody */}
      <section className="py-16 px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="bg-[#232920] rounded-sm p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 md:gap-20 shadow-2xl relative overflow-hidden border border-[#3A4234]">
          
          {/* Profile Image - Sharp edges */}
          <div className="relative z-10 w-48 h-64 md:w-64 md:h-80 shrink-0 rounded-sm overflow-hidden border border-[#3A4234] shadow-2xl">
            <img 
              src="https://picsum.photos/seed/profile-earth/400/500" 
              alt="Profile" 
              className="w-full h-full object-cover grayscale opacity-90 hover:opacity-100 transition-opacity duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Biography Text */}
          <div className="relative z-10 flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-serif tracking-widest uppercase mb-6 text-[#EAE6DF] border-b border-[#3A4234] pb-4 inline-block">
              Behind the Lens
            </h2>
            <p className="text-[#A3A89D] leading-relaxed text-lg font-light">
              I believe photography is the art of capturing the ephemeral. Drawn to stark contrasts, deep shadows, and the quiet melancholy of overgrown spaces, my work seeks to reveal the hidden elegance in the natural world. Whether navigating the sharp geometry of a rocky coastline or the untamed edges of a dense forest, I am always looking for the story lingering just out of sight.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Interactive Photo Libraries (Masonry Gallery) */}
      <section id="gallery" className="py-20 px-4 md:px-8 max-w-[1600px] mx-auto">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif tracking-widest uppercase text-[#1A2018] mb-4 border-b-2 border-[#1A2018] pb-2">
            Selected Works
          </h2>
        </div>
        
        {/* CSS Columns for Masonry Layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {galleriesData.map((item) => (
            <Link 
              key={item.id}
              to={`/gallery/${item.id}`}
              className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-sm bg-[#232920] shadow-md block"
            >
              {/* Gallery Image */}
              <img 
                src={item.thumbnailImg} 
                alt={item.title} 
                className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              
              {/* Gothic Hover Overlay - Darkens image and shows light text */}
              <div className="absolute inset-0 bg-[#1A2018]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="text-[#EAE6DF] font-serif text-xl md:text-2xl tracking-widest uppercase text-center px-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {item.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer & Contact */}
      <footer className="py-20 mt-12 bg-[#232920] rounded-t-sm max-w-[1600px] mx-auto border-t border-[#3A4234]">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <h3 className="text-3xl font-serif tracking-widest uppercase text-[#EAE6DF] mb-4">Let's Create</h3>
          <p className="text-[#A3A89D] font-light mb-12 font-serif italic text-lg">Reach out to discuss your next project or just to say hello.</p>
          
          <form 
            className="flex flex-col gap-6 mb-16 text-left" 
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const name = formData.get('name');
              const email = formData.get('email');
              const message = formData.get('message');
              
              const subject = encodeURIComponent(`New Inquiry from ${name}`);
              const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
              
              window.location.href = `mailto:mariosolis04@icloud.com?subject=${subject}&body=${body}`;
            }}
          >
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <label htmlFor="name" className="block text-[#A3A89D] text-sm tracking-widest uppercase mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  className="w-full bg-transparent border-b border-[#3A4234] py-2 text-[#EAE6DF] focus:outline-none focus:border-[#A3A89D] transition-colors rounded-none"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="flex-1">
                <label htmlFor="email" className="block text-[#A3A89D] text-sm tracking-widest uppercase mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  className="w-full bg-transparent border-b border-[#3A4234] py-2 text-[#EAE6DF] focus:outline-none focus:border-[#A3A89D] transition-colors rounded-none"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-[#A3A89D] text-sm tracking-widest uppercase mb-2">Message</label>
              <textarea 
                id="message" 
                name="message"
                rows={4}
                className="w-full bg-transparent border-b border-[#3A4234] py-2 text-[#EAE6DF] focus:outline-none focus:border-[#A3A89D] transition-colors resize-none rounded-none"
                placeholder="How can we work together?"
                required
              ></textarea>
            </div>
            <button 
              type="submit"
              className="mt-4 self-center md:self-start px-8 py-3 bg-[#EAE6DF] text-[#1A2018] font-serif tracking-widest uppercase text-sm hover:bg-[#C2BDB4] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 rounded-sm"
            >
              Send Message
            </button>
          </form>

          <div className="pt-8 border-t border-[#3A4234] flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#A3A89D] font-light font-serif italic">mariosolis04@icloud.com</p>
            <p className="text-[#4A5343] text-xs tracking-widest uppercase">
              &copy; {new Date().getFullYear()} Mario Solis. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* 4. Lightbox / Modal - Sharp edges */}
      {lightboxImg && (
        <div 
          className="fixed inset-0 z-50 bg-[#1A2018]/95 flex items-center justify-center p-4 md:p-12 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setLightboxImg(null)}
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 md:top-10 md:right-10 w-12 h-12 bg-white hover:bg-gray-200 rounded-sm flex items-center justify-center text-black transition-colors duration-300 z-50 shadow-lg"
            onClick={() => setLightboxImg(null)}
            aria-label="Close Lightbox"
          >
            <X size={28} strokeWidth={1.5} />
          </button>
          
          {/* Fullscreen Image */}
          <div className="relative max-w-full max-h-full rounded-sm overflow-hidden shadow-2xl border border-[#3A4234] animate-in fade-in zoom-in duration-300">
            <img 
              src={lightboxImg} 
              alt="Fullscreen view" 
              className="max-w-full max-h-[85vh] object-contain"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      )}
    </div>
  );
}
