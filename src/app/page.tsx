"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const collections = [
  {
    number: "01",
    title: "The Silk Edit",
    subtitle: "Pure silk · Handwoven",
    image:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1400&q=90",
  },
  {
    number: "02",
    title: "Quiet Gold",
    subtitle: "Zari · Celebration",
    image:
      "https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=1400&q=90",
  },
  {
    number: "03",
    title: "Earth & Ivory",
    subtitle: "Natural tones · Everyday",
    image:
      "https://images.unsplash.com/photo-1610189012906-4b1c4c7c6f5d?auto=format&fit=crop&w=1400&q=90",
  },
];

const colours = [
  { name: "Ivory", value: "#E8E0D2" },
  { name: "Terracotta", value: "#A65D45" },
  { name: "Moss", value: "#69705B" },
  { name: "Indigo", value: "#313A50" },
  { name: "Rose", value: "#A87979" },
];

export default function Home() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".reveal-section").forEach((section) => {
        gsap.from(section, {
          y: 80,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 82%",
            once: true,
          },
        });
      });

      gsap.utils.toArray<HTMLElement>(".collection-image").forEach((image) => {
        gsap.fromTo(
          image,
          {
            scale: 1.12,
          },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: image,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>(".story-image").forEach((image) => {
        gsap.fromTo(
          image,
          { yPercent: 8 },
          {
            yPercent: -8,
            ease: "none",
            scrollTrigger: {
              trigger: image,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={pageRef}
      className="overflow-hidden bg-[#f3efe7] text-[#171614]"
    >
      {/* HERO */}
      <section className="relative flex min-h-screen items-end overflow-hidden bg-black">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=2400&q=90"
            alt="AAVYA collection"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
        </div>

        <header className="absolute inset-x-0 top-0 z-20">
          <nav className="flex items-center justify-between px-6 py-7 text-white md:px-10">
            <span className="text-xl tracking-[0.3em]">AAVYA</span>

            <div className="hidden gap-10 text-[10px] uppercase tracking-[0.25em] md:flex">
              <a href="#collections">Collections</a>
              <a href="#story">Our Story</a>
              <a href="#journal">Journal</a>
            </div>

            <button className="text-[10px] uppercase tracking-[0.25em]">
              Menu
            </button>
          </nav>
        </header>

        <div className="relative z-10 w-full px-6 pb-14 text-white md:px-10 md:pb-20">
          <p className="hero-eyebrow mb-5 text-[10px] uppercase tracking-[0.35em]">
            The New Collection · 2026
          </p>

          <h1 className="font-serif text-[clamp(4rem,11vw,10rem)] leading-[0.82] tracking-[-0.055em]">
            THE ART
            <br />
            <span className="italic">OF DRAPING</span>
          </h1>

          <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <p className="max-w-md text-sm leading-7 text-white/75">
              A study in silk, colour and quiet craftsmanship.
              Contemporary Indian textiles shaped by generations of tradition.
            </p>

            <a
              href="#collections"
              className="w-fit border border-white/60 px-7 py-4 text-[10px] uppercase tracking-[0.25em] transition-all duration-500 hover:bg-white hover:text-black"
            >
              Discover the collection
            </a>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 py-32 md:px-10 md:py-44">
        <div className="mx-auto grid max-w-[1400px] gap-14 md:grid-cols-2">
          <div>
            <p className="mb-7 text-[10px] uppercase tracking-[0.3em] text-black/40">
              AAVYA / 01
            </p>

            <h2 className="font-serif text-5xl leading-[0.95] tracking-[-0.04em] md:text-8xl">
              Tradition,
              <br />
              <span className="italic">reimagined.</span>
            </h2>
          </div>

          <p className="max-w-md self-end text-sm leading-8 text-black/60 md:justify-self-end">
            We believe the future of Indian fashion begins with its past.
            AAVYA brings together handwoven textiles, considered silhouettes
            and modern expression.
          </p>
        </div>
      </section>

      {/* COLLECTIONS */}
      <section id="collections" className="reveal-section px-6 md:px-10">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-16 flex items-end justify-between">
            <div>
              <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-black/40">
                AAVYA / 02
              </p>

              <h2 className="font-serif text-5xl tracking-[-0.04em] md:text-7xl">
                Collections
              </h2>
            </div>

            <span className="hidden text-[10px] uppercase tracking-[0.25em] text-black/40 md:block">
              Explore all
            </span>
          </div>

          <div className="space-y-24 md:space-y-40">
            {collections.map((collection, index) => (
              <article
                key={collection.number}
                className={`group grid items-end gap-8 md:grid-cols-12 ${
                  index === 1 ? "md:text-right" : ""
                }`}
              >
                <div
                  className={`relative overflow-hidden md:col-span-8 ${
                    index === 1 ? "md:col-start-5" : ""
                  }`}
                >
                  <div className="aspect-[4/5] overflow-hidden md:aspect-[5/6]">
                    <img
                      src={collection.image}
                      alt={collection.title}
                      className="collection-image h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.04]"
                    />
                  </div>
                </div>

                <div
                  className={`md:col-span-4 ${
                    index === 1 ? "md:col-start-1 md:row-start-1" : ""
                  }`}
                >
                  <p className="mb-5 text-[10px] tracking-[0.25em] text-black/40">
                    {collection.number}
                  </p>

                  <h3 className="font-serif text-4xl leading-none tracking-[-0.035em] md:text-5xl">
                    {collection.title}
                  </h3>

                  <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-black/45">
                    {collection.subtitle}
                  </p>

                  <a
                    href="#"
                    className="mt-8 inline-block border-b border-black/30 pb-2 text-[10px] uppercase tracking-[0.25em] transition-colors hover:border-black"
                  >
                    Explore
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* COLOUR */}
      <section className="reveal-section px-6 py-36 md:px-10 md:py-52">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-16 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mb-6 text-[10px] uppercase tracking-[0.3em] text-black/40">
                AAVYA / 03
              </p>

              <h2 className="font-serif text-5xl leading-[0.95] tracking-[-0.04em] md:text-7xl">
                Find your
                <br />
                <span className="italic">colour.</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 border-t border-black/15 md:grid-cols-5">
              {colours.map((colour) => (
                <button
                  key={colour.name}
                  className="group border-b border-black/15 p-5 text-left md:border-l"
                >
                  <div
                    className="mb-8 aspect-square w-full transition-transform duration-700 group-hover:scale-95"
                    style={{ backgroundColor: colour.value }}
                  />

                  <span className="text-[10px] uppercase tracking-[0.2em]">
                    {colour.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section
        id="story"
        className="reveal-section relative min-h-[90vh] overflow-hidden bg-[#20201d] text-white"
      >
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=2000&q=90"
            alt="Indian textile craftsmanship"
            className="story-image h-[115%] w-full object-cover opacity-60"
          />

          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative flex min-h-[90vh] items-end px-6 py-14 md:px-10 md:py-20">
          <div className="max-w-3xl">
            <p className="mb-6 text-[10px] uppercase tracking-[0.3em] text-white/60">
              AAVYA / 04 — The Craft
            </p>

            <h2 className="font-serif text-5xl leading-[0.92] tracking-[-0.04em] md:text-8xl">
              Made slowly.
              <br />
              <span className="italic">Made to last.</span>
            </h2>

            <p className="mt-8 max-w-lg text-sm leading-7 text-white/70">
              From the first thread to the final drape, every AAVYA piece is
              shaped by skilled hands and an appreciation for imperfection.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        id="journal"
        className="bg-[#f3efe7] px-6 py-20 md:px-10 md:py-28"
      >
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-14 border-b border-black/15 pb-16 md:grid-cols-3">
            <div>
              <div className="text-2xl tracking-[0.3em]">AAVYA</div>
              <p className="mt-5 max-w-xs text-sm leading-7 text-black/50">
                Contemporary Indian textiles, thoughtfully made.
              </p>
            </div>

            <div className="flex flex-col gap-4 text-[10px] uppercase tracking-[0.2em]">
              <a href="#collections">Collections</a>
              <a href="#story">Our Story</a>
              <a href="#">Journal</a>
              <a href="#">Contact</a>
            </div>

            <div>
              <p className="mb-5 text-[10px] uppercase tracking-[0.2em]">
                Private appointments
              </p>

              <p className="text-sm leading-7 text-black/50">
                Hyderabad · Mumbai · Delhi
              </p>
            </div>
          </div>

          <div className="flex justify-between pt-7 text-[9px] uppercase tracking-[0.2em] text-black/40">
            <span>© 2026 AAVYA</span>
            <span>Kailasha Technologies</span>
          </div>
        </div>
      </footer>
    </main>
  );
}