/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ServiceItem {
  id: string;
  category: "photo" | "video" | "brand";
  title: string;
  description: string;
  features: string[];
}

export interface PortfolioItem {
  id: string;
  category: "photo" | "video" | "brand";
  title: string;
  client: string;
  year: string;
  description: string;
  imageBefore?: string; // For photo comparison
  imageAfter?: string;  // For photo comparison
  imageUrl: string;     // Primary image / fallback
  videoUrl?: string;    // Simulating video project
  stats?: { label: string; value: string }[];
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  comment: string;
  avatar: string;
  projectCompleted: string;
}

export interface ContactSubmission {
  name: string;
  email: string;
  projectType: string;
  message: string;
  timestamp: string;
}
