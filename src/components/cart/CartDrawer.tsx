"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useCart } from "./CartProvider";

export default function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    subtotal,
  } = useCart();

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeCart();
      }
    };

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [isOpen, closeCart]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Overlay */}
      <button
        type="button"
        aria-label="Close shopping bag"
        onClick={closeCart}
        className="absolute inset-0 h-full w-full bg-black/35 backdrop-blur-[2px]"
      />

      {/* Drawer */}
      <aside className="absolute right-0 top-0 flex h-full w-full max-w-[480px] flex-col bg-[#f3efe7] text-[#171614] shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-black/10 px-6 py-6">
          <div>
            <p className="mb-1 text-[9px] uppercase tracking-[0.25em] text-black/40">
              AAVYA
            </p>

            <h2 className="font-serif text-2xl">
              Your Bag
            </h2>
          </div>

          <button
            type="button"
            onClick={closeCart}
            className="text-[10px] uppercase tracking-[0.2em]"
          >
            Close
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <p className="font-serif text-3xl">
                Your bag is empty.
              </p>

              <p className="mt-4 max-w-xs text-xs leading-6 text-black/45">
                Discover pieces woven with intention
                and designed for generations.
              </p>

              <Link
                href="/collections"
                onClick={closeCart}
                className="mt-8 border-b border-black pb-1 text-[10px] uppercase tracking-[0.2em]"
              >
                Explore collection
              </Link>
            </div>
          ) : (
            <div className="divide-y divide-black/10">
              {items.map((item) => (
                <div
                  key={item.product.slug}
                  className="flex gap-5 py-6"
                >
                  {/* Image */}
                  <Link
                    href={`/product/${item.product.slug}`}
                    onClick={closeCart}
                    className="h-32 w-24 shrink-0 overflow-hidden bg-[#e4ddd1]"
                  >
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="h-full w-full object-cover"
                    />
                  </Link>

                  {/* Info */}
                  <div className="flex min-w-0 flex-1 flex-col">
                    <div className="flex justify-between gap-4">
                      <div>
                        <p className="text-[9px] uppercase tracking-[0.16em] text-black/40">
                          {item.product.category}
                        </p>

                        <h3 className="mt-2 font-serif text-xl leading-none">
                          {item.product.name}
                        </h3>
                      </div>

                      <p className="text-sm whitespace-nowrap">
                        ₹
                        {(
                          item.product.price *
                          item.quantity
                        ).toLocaleString("en-IN")}
                      </p>
                    </div>

                    <div className="mt-auto flex items-center justify-between pt-5">
                      <div className="flex items-center border border-black/15">
                        <button
                          type="button"
                          onClick={() =>
                            decreaseQuantity(
                              item.product.slug
                            )
                          }
                          className="px-3 py-2 text-sm"
                        >
                          −
                        </button>

                        <span className="min-w-8 text-center text-xs">
                          {item.quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() =>
                            increaseQuantity(
                              item.product.slug
                            )
                          }
                          className="px-3 py-2 text-sm"
                        >
                          +
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          removeFromCart(
                            item.product.slug
                          )
                        }
                        className="text-[9px] uppercase tracking-[0.16em] text-black/40 hover:text-black"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-black/10 px-6 pb-7 pt-6">
            <div className="mb-5 flex justify-between">
              <span className="text-[10px] uppercase tracking-[0.18em] text-black/45">
                Subtotal
              </span>

              <span className="text-sm">
                ₹{subtotal.toLocaleString("en-IN")}
              </span>
            </div>

            <button
              type="button"
              className="flex w-full items-center justify-between bg-[#171614] px-6 py-5 text-white transition-colors hover:bg-black/80"
            >
              <span className="text-[10px] uppercase tracking-[0.22em]">
                Checkout
              </span>

              <span>→</span>
            </button>

            <p className="mt-4 text-center text-[9px] leading-5 text-black/40">
              Shipping and taxes calculated at checkout.
            </p>
          </div>
        )}
      </aside>
    </div>
  );
}