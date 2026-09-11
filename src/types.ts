export interface MenuItem {
  id: string;
  name: string;
  category: string;
  description: string;
  price: string;
  image: string;
  badge?: 'Popular' | "Chef's Pick" | 'Signature' | 'Special';
  spicy?: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
}

export interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  image: string;
  badge: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  aspect?: string;
}
