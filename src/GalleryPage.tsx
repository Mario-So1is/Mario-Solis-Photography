import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, X, Download, Loader2 } from 'lucide-react';
import { galleriesData } from './galleryData';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

function ImageWithLoader({ src, alt, className, onClick }: { src: string; alt: string; className?: string; onClick?: (e: React.MouseEvent) => void }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
  }, [src]);

  return (
    <>
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#232920] z-0">
          <Loader2 className="w-8 h-8 text-[#A3A89D] animate-spin" />
        </div>
      )}
      <img 
        src={src} 
        alt={alt} 
        className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} relative z-10`}
        onLoad={() => setIsLoaded(true)}
        onClick={onClick}
        referrerPolicy="no-referrer"
      />
    </>
  );
}

export default function GalleryPage() {
  const { id } = useParams<{ id: string }>();
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const [isDownloadingGallery, setIsDownloadingGallery] = useState(false);
  const [isDownloadingImage, setIsDownloadingImage] = useState(false);

  const gallery = galleriesData.find((g) => g.id === id);

  // Close lightbox on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxImg(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleDownloadGallery = async () => {
    if (!gallery) return;
    setIsDownloadingGallery(true);
    try {
      const zip = new JSZip();
      const folder = zip.folder(gallery.title.replace(/\s+/g, '-').toLowerCase());

      const promises = gallery.images.map(async (img, index) => {
        try {
          const response = await fetch(img.url);
          const blob = await response.blob();
          const filename = `image-${index + 1}.jpg`;
          folder?.file(filename, blob);
        } catch (error) {
          console.error(`Failed to download image ${img.url}`, error);
        }
      });

      await Promise.all(promises);
      const content = await zip.generateAsync({ type: 'blob' });
      saveAs(content, `${gallery.title.replace(/\s+/g, '-').toLowerCase()}.zip`);
    } catch (error) {
      console.error('Failed to create zip file', error);
      alert('Failed to download gallery. Please try again.');
    } finally {
      setIsDownloadingGallery(false);
    }
  };

  const handleDownloadImage = async (url: string) => {
    setIsDownloadingImage(true);
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const filename = url.split('/').pop() || 'image.jpg';
      saveAs(blob, filename.includes('.') ? filename : `${filename}.jpg`);
    } catch (error) {
      console.error('Failed to download image', error);
      alert('Failed to download image. Please try again.');
    } finally {
      setIsDownloadingImage(false);
    }
  };

  if (!gallery) {
    return (
      <div className="min-h-screen bg-[#EAE6DF] text-[#1A2018] flex flex-col items-center justify-center">
        <h1 className="text-4xl font-serif mb-4">Gallery Not Found</h1>
        <Link to="/" className="text-[#A3A89D] hover:text-[#1A2018] transition-colors flex items-center gap-2">
          <ArrowLeft size={20} /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#EAE6DF] text-[#1A2018] font-sans selection:bg-[#232920] selection:text-[#EAE6DF]">
      {/* Header */}
      <header className="py-12 px-6 md:px-12 max-w-[1600px] mx-auto flex flex-col items-center text-center">
        <Link 
          to="/" 
          className="self-start text-[#A3A89D] hover:text-[#1A2018] transition-colors flex items-center gap-2 mb-8 uppercase tracking-widest text-sm"
        >
          <ArrowLeft size={16} /> Back to Portfolio
        </Link>
        <h1 className="text-5xl md:text-7xl font-serif font-semibold tracking-widest text-[#1A2018] mb-4 uppercase">
          {gallery.title}
        </h1>
        
        <button
          onClick={handleDownloadGallery}
          disabled={isDownloadingGallery}
          className="mb-8 flex items-center gap-2 px-6 py-3 bg-[#232920] text-[#EAE6DF] font-serif tracking-widest uppercase text-sm hover:bg-[#3A4234] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 rounded-sm disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isDownloadingGallery ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              Downloading...
            </>
          ) : (
            <>
              <Download size={16} />
              Download Gallery
            </>
          )}
        </button>

        <div className="w-24 h-px bg-[#3A4234] mb-12"></div>
      </header>

      {/* Masonry Grid */}
      <section className="px-4 md:px-8 pb-24 max-w-[1600px] mx-auto">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {gallery.images.map((img) => (
            <div 
              key={img.id}
              className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-sm bg-[#232920] shadow-md min-h-[200px]"
              onClick={() => setLightboxImg(img.url)}
            >
              <ImageWithLoader 
                src={img.url} 
                alt={img.alt} 
                className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImg && (
        <div 
          className="fixed inset-0 z-50 bg-[#1A2018]/95 flex items-center justify-center p-4 md:p-12 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setLightboxImg(null)}
        >
          {/* Action Buttons Container */}
          <div className="absolute top-6 right-6 md:top-10 md:right-10 flex items-center gap-4 z-50">
            <button 
              className="w-12 h-12 bg-white hover:bg-gray-200 rounded-sm flex items-center justify-center text-black transition-colors duration-300 shadow-lg"
              onClick={(e) => {
                e.stopPropagation();
                handleDownloadImage(lightboxImg);
              }}
              disabled={isDownloadingImage}
              aria-label="Download Image"
              title="Download Image"
            >
              {isDownloadingImage ? (
                <Loader2 size={20} className="animate-spin" />
              ) : (
                <Download size={20} strokeWidth={1.5} />
              )}
            </button>
            
            <button 
              className="w-12 h-12 bg-white hover:bg-gray-200 rounded-sm flex items-center justify-center text-black transition-colors duration-300 shadow-lg"
              onClick={() => setLightboxImg(null)}
              aria-label="Close Lightbox"
            >
              <X size={28} strokeWidth={1.5} />
            </button>
          </div>
          
          <div className="relative max-w-full max-h-full rounded-sm overflow-hidden shadow-2xl border border-[#3A4234] animate-in fade-in zoom-in duration-300 min-w-[300px] min-h-[300px] flex items-center justify-center bg-[#232920]">
            <ImageWithLoader 
              src={lightboxImg} 
              alt="Fullscreen view" 
              className="max-w-full max-h-[85vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
}
