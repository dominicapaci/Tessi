import { useState, useEffect, useRef } from 'react';

interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  quality?: number;
  className?: string;
  sizes?: string;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  onLoad?: () => void;
}

export const Image = ({
  src,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  quality = 85,
  className = '',
  sizes,
  placeholder = 'blur',
  blurDataURL,
  onLoad,
}: ImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const containerRef = useRef<HTMLDivElement>(null);

  // Optimize Shopify image URL
  const optimizeShopifyImage = (url: string, width?: number, quality?: number) => {
    if (!url) return url;
    
    if (url.includes('cdn.shopify.com')) {
      const params = new URLSearchParams();
      if (width) params.append('width', width.toString());
      if (quality) params.append('quality', quality.toString());
      params.append('format', 'pjpg');
      
      const separator = url.includes('?') ? '&' : '?';
      return `${url}${separator}${params.toString()}`;
    }
    
    return url;
  };

  // Generate srcset for responsive images
  const generateSrcSet = (url: string) => {
    const widths = [640, 750, 828, 1080, 1200, 1920, 2048, 3840];
    return widths
      .map((w) => `${optimizeShopifyImage(url, w, quality)} ${w}w`)
      .join(', ');
  };

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || !containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: '50px' }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const optimizedSrc = optimizeShopifyImage(src, width, quality);
  const srcSet = generateSrcSet(src);

  if (fill) {
    return (
      <div 
        ref={containerRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
        }}
      >
        {/* Blur placeholder */}
        {placeholder === 'blur' && (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              filter: 'blur(20px)',
              transform: 'scale(1.1)',
              transition: 'opacity 400ms ease-out',
              opacity: isLoaded ? 0 : 1,
              pointerEvents: 'none',
            }}
          >
            {blurDataURL ? (
              <img
                src={blurDataURL}
                alt=""
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                }}
                className={className}
              />
            ) : (
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#f0f0f0',
                }}
              />
            )}
          </div>
        )}
  
        {/* Actual image */}
        {(isInView || priority) && (
          <img
            src={optimizedSrc}
            srcSet={srcSet}
            sizes={sizes || '100vw'}
            alt={alt}
            loading={priority ? 'eager' : 'lazy'}
            decoding={priority ? 'sync' : 'async'}
            onLoad={handleLoad}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
            }}
            className={`${className} transition-opacity duration-400 ease-out ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}
      </div>
    );
  }



  // For non-fill images
  return (
    <div 
      ref={containerRef}
      style={{ 
        position: 'relative', 
        display: 'inline-block',
        width: width || 'auto',
        height: height || 'auto',
      }}
    >
      {placeholder === 'blur' && !isLoaded && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            filter: 'blur(20px)',
            transform: 'scale(1.1)',
            transition: 'opacity 400ms ease-out',
            opacity: isLoaded ? 0 : 1,
            pointerEvents: 'none',
          }}
        >
          {blurDataURL && (
            <img
              src={blurDataURL}
              alt=""
              width={width}
              height={height}
              className={className}
            />
          )}
        </div>
      )}
      
      {(isInView || priority) && (
        <img
          src={optimizedSrc}
          srcSet={srcSet}
          sizes={sizes || `${width}px`}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          onLoad={handleLoad}
          className={`${className} transition-opacity duration-400 ease-out ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}
    </div>
  );
};

export default Image;