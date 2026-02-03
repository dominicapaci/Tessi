/**
 * Generate a blur data URL from a Shopify image
 * This creates a tiny 10x10px version for the blur effect
 */
export const getBlurDataURL = (src: string): string => {
    if (!src) return '';
    
    // For Shopify CDN images, create a tiny version
    if (src.includes('cdn.shopify.com')) {
      return `${src}${src.includes('?') ? '&' : '?'}width=10&height=10&quality=1`;
    }
    
    // For other images, return the original (will be scaled down by CSS)
    return src;
  };
  
  /**
   * Shimmer effect as base64 SVG for blur placeholder
   */
  export const shimmerDataURL = `data:image/svg+xml;base64,${btoa(`
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f6f7f8"/>
      <rect width="100%" height="100%" fill="url(#shimmer)"/>
      <defs>
        <linearGradient id="shimmer" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stop-color="#f6f7f8"/>
          <stop offset="50%" stop-color="#edeef1"/>
          <stop offset="100%" stop-color="#f6f7f8"/>
          <animateTransform
            attributeName="gradientTransform"
            type="translate"
            from="-1 0"
            to="1 0"
            dur="1.5s"
            repeatCount="indefinite"
          />
        </linearGradient>
      </defs>
    </svg>
  `)}`;