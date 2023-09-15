// product-card.interface.ts
export interface Product {
  id: number;
  name: string;
  images: string[]; // Array of image URLs
  availability: string;
  discount?: number; // Optional discount message
  stars: number[]; // Star rating (1 to 5)
  description: string;
  price: number;
}
