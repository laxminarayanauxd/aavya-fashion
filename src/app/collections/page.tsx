"use client";

import { useMemo, useState } from "react";
import ProductCard from "@/components/products/ProductCard";
import { products } from "@/data/products";

const filters = [
  "All",
  "Silk Sarees",
  "Zari Collection",
  "Handwoven",
  "Everyday",
  "New Arrivals",
];

export default function CollectionsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProducts = useMemo(() => {
    if (activeFilter === "All") {
      return products;
    }

    return products.filter(
      (product) => product.category === activeFilter
    );
  }, [activeFilter]);

  return (
    <main className="min-h-screen bg-[#f3efe7] text-[#171614]">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-6 md:px-10">
        <a
          href="/"
          className="font-serif text-xl tracking-[0.16em]"
        >
          AAVYA
        </a>

        <nav className="hidden items-center gap-10 text-[10px] uppercase tracking-[0.2em] md:flex">
          <a href="/" className="transition-opacity hover:opacity-50">
            Home
          </a>

          <a
            href="/collections"
            className="border-b border-black pb-1"
          >
            Collections
          </a>

          <a href="/#craft" className="transition-opacity hover:opacity-50">
            Craft
          </a>
        </nav>

        <button className="text-[10px] uppercase tracking-[0.2em]">
          Bag (0)
        </button>
      </header>

      {/* Intro */}
      <section className="px-6 pb-20 pt-20 md:px-10 md:pb-28 md:pt-32">
        <div className="max-w-5xl">
          <p className="mb-7 text-[10px] uppercase tracking-[0.3em] text-black/45">
            AAVYA / COLLECTION 01
          </p>

          <h1 className="font-serif text-[clamp(4rem,11vw,10rem)] leading-[0.82] tracking-[-0.055em]">
            The
            <br />
            Collection
          </h1>

          <p className="mt-12 max-w-md text-sm leading-7 text-black/60 md:ml-[28%]">
            Textiles shaped by hand, memory and material.
            Discover a considered collection of Indian
            sarees created for modern rituals.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="border-y border-black/10 px-6 py-5 md:px-10">
        <div className="flex gap-6 overflow-x-auto pb-1">
          {filters.map((filter) => {
            const active = filter === activeFilter;

            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`shrink-0 text-[10px] uppercase tracking-[0.18em] transition-all ${
                  active
                    ? "text-black"
                    : "text-black/35 hover:text-black"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </section>

      {/* Product grid */}
      <section className="px-6 py-16 md:px-10 md:py-24">
        <div className="mb-10 flex items-end justify-between">
          <p className="text-[10px] uppercase tracking-[0.2em] text-black/45">
            {filteredProducts.length} Pieces
          </p>

          <p className="hidden text-[10px] uppercase tracking-[0.2em] text-black/35 md:block">
            Hand selected / AAVYA
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={product.slug}
              product={product}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* Closing statement */}
      <section className="px-6 pb-28 pt-20 md:px-10 md:pb-40">
        <div className="border-t border-black/10 pt-12">
          <p className="max-w-4xl font-serif text-[clamp(2.4rem,6vw,6rem)] leading-[0.95] tracking-[-0.035em]">
            Woven with intention.
            <br />
            Designed for generations.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/10 px-6 py-10 md:px-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row">
          <p className="font-serif text-lg tracking-[0.15em]">
            AAVYA
          </p>

          <p className="text-[10px] uppercase tracking-[0.16em] text-black/40">
            A Kailasha Technologies concept
          </p>
        </div>
      </footer>
    </main>
  );
}