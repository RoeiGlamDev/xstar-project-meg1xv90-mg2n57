import { defineConfig } from 'next';

export default defineConfig({
  reactStrictMode: true,
  images: {
    domains: ['your-image-source.com'], // Replace with your image source
    formats: ['image/avif', 'image/webp']
},
  optimizeImages: true,
  poweredByHeader: false,
  env: {
    BRAND_NAME: 'AI',
    PRIMARY_COLOR: '#FF4500', // Orange
    SECONDARY_COLOR: '#FF0000', // Red
    BACKGROUND_COLOR: '#FFFFFF', // White
    DESCRIPTION: 'Welcome to AI - Your premier destination for cutting-edge AI video creation. Harness the power of technology to create stunning videos effortlessly.',
    KEYWORDS: 'AI, video creation, technology, modern design, innovation'
}
});