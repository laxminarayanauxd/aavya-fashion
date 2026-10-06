"use client";

import { useCart } from "./CartProvider";

export default function CartButton() {
  const { cartCount, openCart } = useCart();

  return (
    <button
      type="button"
      onClick={openCart}
      className="text-[10px] uppercase tracking-[0.2em] transition-opacity hover:opacity-50"
      aria-label={`Shopping bag with ${cartCount} items`}
    >
      Bag ({cartCount})
    </button>
  );
}