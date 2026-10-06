"use client";

import type { Product } from "@/data/products";
import { useCart } from "./CartProvider";

export default function AddToBag({
  product,
}: {
  product: Product;
}) {
  const { addToCart } = useCart();

  return (
    <button
      type="button"
      onClick={() => addToCart(product)}
      className="group flex w-full items-center justify-between border border-black bg-[#171614] px-6 py-5 text-white transition-colors duration-500 hover:bg-transparent hover:text-black"
    >
      <span className="text-[10px] uppercase tracking-[0.22em]">
        Add to bag
      </span>

      <span className="text-lg transition-transform duration-500 group-hover:translate-x-1">
        →
      </span>
    </button>
  );
}