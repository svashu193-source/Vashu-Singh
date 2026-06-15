/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ServiceItem, PortfolioItem, Testimonial } from "./types";

export const SERVICES: ServiceItem[] = [
  {
    id: "photo-editing",
    category: "photo",
    title: "Professional Photo Editing",
    description: "Premium retouching and grading that transforms standard captures into high-end editorial and catalog-ready visuals.",
    features: [
      "High-End Portrait & skin retouching",
      "Dynamic background removal & composition",
      "E-commerce product editing & reflection control",
      "Cinematic color grading & tone mapping"
    ]
  },
  {
    id: "video-editing",
    category: "video",
    title: "Premium Video Editing",
    description: "Multi-layered timeline edits, sound design, and custom pace-editing that keep viewers hooked on any platform.",
    features: [
      "Engaging YouTube video production",
      "High-retention Reels, TikToks & Shorts",
      "High-production commercial Ads",
      "Fluid 2D motion graphics & typographic overlays"
    ]
  },
  {
    id: "brand-design",
    category: "brand",
    title: "Brand Identity Design",
    description: "Holistic design systems, packaging specifications, and visual guidelines that align perfectly with premium brand values.",
    features: [
      "Bespoke modular logo design",
      "Comprehensive typography & color guidelines",
      "Minimalist premium packaging blueprints",
      "Cohesive social media feed branding grids"
    ]
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: "proj-1",
    category: "photo",
    title: "Luxury Timepiece Retouching",
    client: "Aether Chrono Co.",
    year: "2026",
    description: "High-precision product retouching highlighting micro-brushed steel textures, diamond-cut hands, and crystal clarity with custom specular reflections.",
    imageUrl: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=1200&auto=format",
    imageAfter: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=1200&auto=format&contrast=110&brightness=105&sat=110",
    imageBefore: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=1200&auto=format&sat=-40&exposure=-10&contrast=-20&blur=2",
    tags: ["Product Editing", "Specular Balancing", "Color Correction"],
    stats: [
      { label: "Detail Preservation", value: "100%" },
      { label: "Reflective Correction", value: "Flawless" }
    ]
  },
  {
    id: "proj-2",
    category: "photo",
    title: "High-Fashion Editorial Grading",
    client: "Kalon Magazine",
    year: "2026",
    description: "Warm-bronze editorial styling matching film grain standards. Designed to accent modern luxury activewear silhouettes against warm natural sandstone.",
    imageUrl: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format",
    imageAfter: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&contrast=105&sat=105&exposure=102",
    imageBefore: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&sat=-50&contrast=-30&exposure=-5",
    tags: ["Portrait Retouching", "Frequency Separation", "Film Tone"],
    stats: [
      { label: "Color Gamut", value: "DCI-P3" },
      { label: "Print Ready", value: "300 DPI" }
    ]
  },
  {
    id: "proj-3",
    category: "video",
    title: "Cinematic EV Launch Reel",
    client: "Veloce Motors",
    year: "2026",
    description: "High-velocity cuts synced with synthetic industrial beats, using custom camera shake, speed ramps, and immersive audio soundscapes to announce the new EV hypercar.",
    imageUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-sports-car-driving-in-a-futuristic-neon-city-43958-large.mp4", // Premium free video placeholder if supported, otherwise beautiful simulated timeline player
    tags: ["Video Editing", "Sound Design", "Speed Ramping"],
    stats: [
      { label: "Clips Processed", value: "240+" },
      { label: "View Duration", value: "+84%" }
    ]
  },
  {
    id: "proj-4",
    category: "video",
    title: "Streetwear Commercial Spot",
    client: "NEON-GRID Tokyo",
    year: "2025",
    description: "Glitch-aesthetic 15-second promo utilizing chromatic aberration overlays, fast neon grading, and punchy 140BPM transitions optimized for mobile vertical feeds.",
    imageUrl: "https://images.unsplash.com/photo-1540959733332-eab4deceeaf7?q=80&w=1200&auto=format",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-cyberpunk-looking-young-woman-with-neon-lights-42289-large.mp4",
    tags: ["Reels & Shorts", "Motion Graphics", "Color Grading"],
    stats: [
      { label: "Engagement", value: "+145%" },
      { label: "Completion Rate", value: "92%" }
    ]
  },
  {
    id: "proj-5",
    category: "brand",
    title: "Aura Organic Skincare Rebrand",
    client: "Aura Labs",
    year: "2026",
    description: "Complete design overhaul from logo mark to secondary visual systems. Built around minimalist layout typography, frosted glass textures, and recyclable paper specs.",
    imageUrl: "https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=1200&auto=format",
    tags: ["Logo Design", "Packaging Blueprint", "Brand System"],
    stats: [
      { label: "Sub-Packaging Files", value: "14 Items" },
      { label: "Retail Presence", value: "National" }
    ]
  },
  {
    id: "proj-6",
    category: "brand",
    title: "Vertex Tech Visual Identity",
    client: "Vertex Protocol",
    year: "2026",
    description: "A generative modular logo system built on isotropic lattices, reflecting high-frequency transaction flow. Includes bespoke typography, brand book, and slide decks.",
    imageUrl: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1200&auto=format",
    tags: ["Brand Book", "Isometric Design", "Interactive Assets"],
    stats: [
      { label: "Vector Scales", value: "Infinite" },
      { label: "Compliance Ratio", value: "WCAG AA" }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Genevieve Roche",
    role: "Creative Director",
    company: "Aether Chrono Co.",
    rating: 5,
    comment: "Vashu has an extraordinary eye for product styling and high-end texture retouching. Under his precise color balancing, our engagement grew, and our timepieces immediately commanded the premium positioning they deserved.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format",
    projectCompleted: "Luxury Timepiece Retouching"
  },
  {
    id: "test-2",
    name: "Marcus Sterling",
    role: "VP of Marketing",
    company: "Veloce Motors",
    rating: 5,
    comment: "The speed ramp edits and sound design matching our high-concept EV sound signature were absolute perfection. Fast, extremely responsive, and took our notes instantly. Highly recommended for commercial ads.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format",
    projectCompleted: "Cinematic EV Launch Reel"
  },
  {
    id: "test-3",
    name: "Amiya Sato",
    role: "Founder",
    company: "NEON-GRID Tokyo",
    rating: 5,
    comment: "Outstanding social media video styling! He took raw assets and turned them into highly engaging streetwear promos that increased our watch-through retention by 80%. A visual powerhouse.",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format",
    projectCompleted: "Streetwear Commercial Spot"
  }
];

export const WHY_CHOOSE_US = [
  {
    iconName: "Zap",
    title: "Fast Delivery",
    description: "Most projects completed within 48 to 72 hours without compromise. Prompt communication at every milestone."
  },
  {
    iconName: "ShieldCheck",
    title: "Premium Quality",
    description: "Every file undergoes exhaustive QC checks on calibrated HDR screens to ensure precision typography and color."
  },
  {
    iconName: "RotateCcw",
    title: "Unlimited Revisions",
    description: "Collaborative process with unlimited draft iterations until the layout, pace, and tones match your vision."
  },
  {
    iconName: "Headphones",
    title: "Professional Support",
    description: "Direct email support and design syncs directly with Vashu and the creative team. No corporate filters."
  },
  {
    iconName: "Award",
    title: "Creative Excellence",
    description: "A passion for minimal typography and future-focused Apple-inspired glassy aesthetics that elevate your products."
  }
];
