import Link from "next/link";
import { notFound } from "next/navigation";

import { products, getProduct } from "@/data/products";
import AddToBag from "@/components/cart/AddToBag";
import CartButton from "@/components/cart/CartButton";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f3efe7] text-[#171614]">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-6 md:px-10">
        <Link
          href="/"
          className="font-serif text-xl tracking-[0.16em]"
        >
          AAVYA
        </Link>

        <nav className="hidden items-center gap-10 text-[10px] uppercase tracking-[0.2em] md:flex">
          <Link
            href="/"
            className="transition-opacity hover:opacity-50"
          >
            Home
          </Link>

          <Link
            href="/collections"
            className="border-b border-black pb-1"
          >
            Collections
          </Link>

          <Link
            href="/#craft"
            className="transition-opacity hover:opacity-50"
          >
            Craft
          </Link>
        </nav>

        <CartButton />
      </header>

      {/* Product */}
      <section className="px-6 pb-24 pt-8 md:px-10 md:pb-32">
        <div className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:gap-16">
          {/* Gallery */}
          <div className="grid gap-4 md:grid-cols-2">
            {product.images.map((image, index) => (
              <div
                key={`${product.slug}-${index}`}
                className={`group relative overflow-hidden bg-[#e4ddd1] ${
                  index === 0 ? "md:col-span-2" : ""
                }`}
              >
                <img
                  src={image}
                  alt={`${product.name} — image ${index + 1}`}
                  className="h-full min-h-[520px] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.025]"
                />

                <span className="absolute bottom-5 left-5 text-[10px] uppercase tracking-[0.2em] text-white mix-blend-difference">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>

          {/* Product Information */}
          <div className="lg:sticky lg:top-8 lg:h-fit">
            <div className="mb-12">
              <p className="mb-5 text-[10px] uppercase tracking-[0.25em] text-black/40">
                {product.category}
              </p>

              <h1 className="font-serif text-[clamp(3rem,5vw,5.5rem)] leading-[0.88] tracking-[-0.04em]">
                {product.name}
              </h1>

              <p className="mt-7 text-lg">
                ₹{product.price.toLocaleString("en-IN")}
              </p>
            </div>

            {/* Product Attributes */}
            <div className="border-t border-black/10">
              {/* Colour */}
              <div className="flex justify-between border-b border-black/10 py-5">
                <span className="text-[10px] uppercase tracking-[0.2em] text-black/45">
                  Colour
                </span>

                <span className="text-sm">
                  {product.colour}
                </span>
              </div>

              {/* Fabric */}
              <div className="flex justify-between border-b border-black/10 py-5">
                <span className="text-[10px] uppercase tracking-[0.2em] text-black/45">
                  Fabric
                </span>

                <span className="max-w-[55%] text-right text-sm">
                  {product.fabric}
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="py-10">
              <p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-black/40">
                The piece
              </p>

              <p className="max-w-md text-sm leading-7 text-black/65">
                {product.description}
              </p>
            </div>

            {/* Add to Bag */}
            <AddToBag product={product} />

            {/* Product Details */}
            <div className="mt-10 border-t border-black/10 pt-6">
              <div className="flex justify-between py-3">
                <span className="text-[10px] uppercase tracking-[0.18em] text-black/40">
                  Delivery
                </span>

                <span className="text-xs">
                  3–7 working days
                </span>
              </div>

              <div className="flex justify-between py-3">
                <span className="text-[10px] uppercase tracking-[0.18em] text-black/40">
                  Craft
                </span>

                <span className="text-xs">
                  Hand finished
                </span>
              </div>

              <div className="flex justify-between py-3">
                <span className="text-[10px] uppercase tracking-[0.18em] text-black/40">
                  Origin
                </span>

                <span className="text-xs">
                  India
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Statement */}
      <section className="border-t border-black/10 px-6 py-24 md:px-10 md:py-40">
        <div className="grid gap-10 md:grid-cols-2">
          <p className="text-[10px] uppercase tracking-[0.22em] text-black/40">
            AAVYA / THE ART OF DRAPING
          </p>

          <p className="font-serif text-[clamp(2.5rem,5vw,5.5rem)] leading-[0.95] tracking-[-0.035em]">
            A textile is more than what we wear.
            <br />
            It is what we carry forward.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/10 px-6 py-10 md:px-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row">
          <Link
            href="/"
            className="font-serif text-lg tracking-[0.15em]"
          >
            AAVYA
          </Link>

          <p className="text-[10px] uppercase tracking-[0.16em] text-black/40">
            A Kailasha Technologies concept
          </p>
        </div>
      </footer>
    </main>
  );
}