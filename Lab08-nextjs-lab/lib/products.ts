export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

export const products: Product[] = [
  {
    id: 1,
    title: "Wireless Noise-Cancelling Headphones",
    description:
      "Experience premium sound quality with our flagship wireless headphones. Featuring 30-hour battery life, adaptive noise cancellation, and ultra-comfortable over-ear cushions. Perfect for commuting, working from home, or losing yourself in music.",
    price: 299.99,
    category: "Electronics",
    image: "🎧",
  },
  {
    id: 2,
    title: "Mechanical Keyboard Pro",
    description:
      "A full-size mechanical keyboard with tactile brown switches, per-key RGB backlighting, and a sturdy aluminum frame. USB-C detachable cable, N-key rollover, and programmable macros make this the ultimate productivity and gaming keyboard.",
    price: 149.95,
    category: "Electronics",
    image: "⌨️",
  },
  {
    id: 3,
    title: "Ultra-Wide 4K Monitor",
    description:
      "Immerse yourself in a stunning 34-inch curved ultra-wide display with 4K resolution, 144Hz refresh rate, and HDR support. IPS panel delivers accurate colors and wide viewing angles. Ideal for designers, video editors, and gamers alike.",
    price: 749.0,
    category: "Electronics",
    image: "🖥️",
  },
  {
    id: 4,
    title: "Ergonomic Office Chair",
    description:
      "Work in comfort all day with this fully adjustable ergonomic chair. Features lumbar support, adjustable armrests, breathable mesh back, and a contoured seat cushion. Supports up to 300 lbs and is built to last with a 10-year warranty.",
    price: 499.0,
    category: "Furniture",
    image: "🪑",
  },
  {
    id: 5,
    title: "Smart LED Desk Lamp",
    description:
      "Illuminate your workspace with this touch-controlled LED desk lamp. Offers 5 color temperatures and 10 brightness levels, a built-in USB-A charging port, and an auto-dimming mode. Flexible gooseneck arm bends to any angle you need.",
    price: 59.99,
    category: "Lighting",
    image: "💡",
  },
];

export function getProductById(id: number): Product | undefined {
  return products.find((p) => p.id === id);
}
