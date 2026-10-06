"use client";

import Link from "next/link";
import { useState } from "react";
import type { Product } from "@/data/products";

type ProductCardProps = {
  product: Product;
  index?: number;
};

export default function ProductCard({
  product,
  index = 0,
}: ProductCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link href={`/product/${product.slug}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-[#e4ddd1]">
          <img
            src={product.images[0]}
            alt={product.name}
            className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ease-out ${
              hovered ? "scale-[1.045] opacity-0" : "scale-100 opacity-100"
            }`}
          />

          <img
            src={product.images[1]}
            alt=""
            aria-hidden="true"
            className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ease-out ${
              hovered ? "scale-100 opacity-100" : "scale-[1.045] opacity-0"
            }`}
          />

          {product.featured && (
            <span className="absolute left-5 top-5 z-10 text-[10px] uppercase tracking-[0.22em] text-white mix-blend-difference">
              Featured
            </span>
          )}

          <span className="absolute bottom-5 right-5 z-10 text-[10px] uppercase tracking-[0.2em] text-white mix-blend-difference opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            View piece
          </span>
        </div>

        <div className="flex items-start justify-between gap-6 border-b border-black/10 py-5">
          <div>
            <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-black/45">
              {product.category}
            </p>

            <h2 className="font-serif text-[22px] leading-none">
              {product.name}
            </h2>
          </div>

          <p className="pt-1 text-sm whitespace-nowrap">
            ₹{product.price.toLocaleString("en-IN")}
          </p>
        </div>
      </Link>

      <div className="flex justify-between pt-3 text-[10px] uppercase tracking-[0.18em] text-black/45">
        <span>{product.fabric}</span>
        <span>{String(index + 1).padStart(2, "0")}</span>
      </div>
    </article>
  );
}