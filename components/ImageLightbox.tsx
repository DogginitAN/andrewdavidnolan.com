'use client'

import { useState, useEffect } from 'react'

interface ImageLightboxProps {
  src: string
  alt: string
  className?: string
}

export default function ImageLightbox({ src, alt, className = '' }: ImageLightboxProps) {
  const [isOpen, setIsOpen] = useState(false)

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    
    if (isOpen) {
      document.addEventListener('keydown', handleEsc)
      document.body.style.overflow = 'hidden'
    }
    
    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <>
      {/* Thumbnail - clickable */}
      <div 
        className={`cursor-zoom-in group relative ${className}`}
        onClick={() => setIsOpen(true)}
      >
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.02]"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm font-medium bg-black/50 px-3 py-1.5 rounded-full">
            Click to expand
          </span>
        </div>
      </div>

      {/* Lightbox modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm cursor-zoom-out animate-fadeIn"
          onClick={() => setIsOpen(false)}
        >
          {/* Close button */}
          <button 
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors p-2"
            onClick={() => setIsOpen(false)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          {/* Expanded image */}
          <img 
            src={src} 
            alt={alt} 
            className="max-w-[95vw] max-h-[95vh] object-contain rounded-lg shadow-2xl animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          />
          
          {/* Caption */}
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm">
            Press ESC or click anywhere to close
          </p>
        </div>
      )}
    </>
  )
}
