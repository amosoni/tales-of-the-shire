'use client';

import { useState, useEffect } from 'react';
import { ImageOff } from 'lucide-react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  fallback?: string;
}

export default function LazyImage({ 
  src, 
  alt, 
  className = '', 
  placeholder = '/placeholder.jpg',
  fallback = '/fallback.jpg'
}: LazyImageProps) {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [imageRef, setImageRef] = useState<HTMLImageElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let observer: IntersectionObserver;
    let didCancel = false;

    if (imageRef && imageSrc === placeholder) {
      if (IntersectionObserver) {
        observer = new IntersectionObserver(
          entries => {
            entries.forEach(entry => {
              if (
                !didCancel &&
                (entry.intersectionRatio > 0 || entry.isIntersecting)
              ) {
                setImageSrc(src);
                observer.unobserve(imageRef);
              }
            });
          },
          {
            threshold: 0.01,
            rootMargin: '75%',
          }
        );
        if (imageRef) {
          observer.observe(imageRef);
        }
      } else {
        // Fallback for older browsers
        setImageSrc(src);
      }
    }
    return () => {
      didCancel = true;
      if (observer && observer.unobserve && imageRef) {
        observer.unobserve(imageRef);
      }
    };
  }, [src, imageSrc, imageRef]);

  const handleLoad = () => {
    setIsLoaded(true);
    setHasError(false);
  };

  const handleError = () => {
    if (imageSrc === src) {
      setImageSrc(fallback);
      setHasError(true);
    } else if (imageSrc === fallback) {
      setHasError(true);
    }
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {hasError ? (
        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
          <ImageOff className="w-8 h-8 text-gray-400" />
        </div>
      ) : (
        <img
          ref={setImageRef}
          src={imageSrc}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={handleLoad}
          onError={handleError}
          loading="lazy"
        />
      )}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
    </div>
  );
} 