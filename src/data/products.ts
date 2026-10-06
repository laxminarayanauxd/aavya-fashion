export type Product = {
  slug: string;
  name: string;
  category: string;
  price: number;
  colour: string;
  fabric: string;
  description: string;
  images: string[];
  featured?: boolean;
};

export const products: Product[] = [
  {
    slug: "the-ivory-silk",
    name: "The Ivory Silk",
    category: "Silk Sarees",
    price: 18900,
    colour: "Ivory",
    fabric: "Pure Handwoven Silk",
    description:
      "A quiet expression of traditional silk weaving, finished in a soft ivory tone for timeless occasions.",
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=1400&q=85",
    ],
    featured: true,
  },

  {
    slug: "quiet-gold",
    name: "Quiet Gold",
    category: "Zari Collection",
    price: 24900,
    colour: "Antique Gold",
    fabric: "Silk & Zari",
    description:
      "Subtle zari detailing meets a restrained silhouette in a saree designed for evening celebrations.",
    images: [
      "https://images.unsplash.com/photo-1610189012906-4b1c4c7c6f5d?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1400&q=85",
    ],
    featured: true,
  },

  {
    slug: "earth-ivory",
    name: "Earth & Ivory",
    category: "Everyday",
    price: 12900,
    colour: "Earth",
    fabric: "Organic Cotton Silk",
    description:
      "Natural tones and an effortless drape create an understated everyday textile with a refined character.",
    images: [
      "https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1610189012906-4b1c4c7c6f5d?auto=format&fit=crop&w=1400&q=85",
    ],
    featured: true,
  },

  {
    slug: "terracotta-weave",
    name: "Terracotta Weave",
    category: "Handwoven",
    price: 15900,
    colour: "Terracotta",
    fabric: "Handwoven Cotton Silk",
    description:
      "A warm terracotta palette inspired by Indian earth, crafted with a softly textured handwoven finish.",
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=1400&q=85",
    ],
  },

  {
    slug: "indigo-dusk",
    name: "Indigo Dusk",
    category: "Silk Sarees",
    price: 21900,
    colour: "Indigo",
    fabric: "Pure Silk",
    description:
      "Deep indigo silk with a fluid drape, created for evenings that call for quiet elegance.",
    images: [
      "https://images.unsplash.com/photo-1610189012906-4b1c4c7c6f5d?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1400&q=85",
    ],
  },

  {
    slug: "rose-mist",
    name: "Rose Mist",
    category: "New Arrivals",
    price: 17900,
    colour: "Muted Rose",
    fabric: "Silk Organza",
    description:
      "A delicate muted rose tone paired with an airy silhouette and a graceful, weightless drape.",
    images: [
      "https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1610189012906-4b1c4c7c6f5d?auto=format&fit=crop&w=1400&q=85",
    ],
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}