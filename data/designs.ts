// data/designs.ts

export type DesignCategory = "Apartment" | "Bungalow" | "Villa";

export interface Design {
  id: number;
  slug: string;
  title: string;
  category: DesignCategory;
  image: string; // Main image for card
  images: string[]; // Detail page images
  description: string;
  specs: {
    bedrooms: number;
    bathrooms: number;
    area: number; // in sq. meters
    floors: number;
  };
}

export const designs: Design[] = [
  {
    id: 1,
    slug: "the-serene-villa",
    title: "The Serene Villa",
    category: "Villa",
    image: "/villa-1.jpg",
    images: ["/villa-1.jpg", "/villa-1-interior.jpg", "/villa-1-plan.jpg"],
    description:
      "A luxurious villa that blends modern aesthetics with natural elements, offering breathtaking views and spacious living areas. Perfect for those who seek tranquility and elegance.",
    specs: { bedrooms: 5, bathrooms: 6, area: 450, floors: 2 },
  },
  {
    id: 2,
    slug: "urban-elegance-apartments",
    title: "Urban Elegance Apartments",
    category: "Apartment",
    image: "/apartment-1.jpg",
    images: ["/apartment-1.jpg"],
    description:
      "A chic and modern apartment complex design optimized for urban living. Features include smart home integration, communal rooftop gardens, and premium finishes.",
    specs: { bedrooms: 3, bathrooms: 2, area: 120, floors: 1 },
  },
  {
    id: 3,
    slug: "the-cottage-bungalow",
    title: "The Cottage Bungalow",
    category: "Bungalow",
    image: "/bungalow-1.jpg",
    images: ["/bungalow-1.jpg"],
    description:
      "A cozy and charming bungalow design that maximizes space and comfort. Ideal for small families or as a peaceful retreat, featuring a classic design with a modern twist.",
    specs: { bedrooms: 3, bathrooms: 2, area: 180, floors: 1 },
  },
  // ... Add more designs here
];
