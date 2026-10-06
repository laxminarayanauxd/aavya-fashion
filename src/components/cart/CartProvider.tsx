"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import type { Product } from "@/data/products";

export type CartItem = {
  product: Product;
  quantity: number;
};

type CartContextType = {
  items: CartItem[];
  isOpen: boolean;
  addToCart: (product: Product) => void;
  removeFromCart: (slug: string) => void;
  increaseQuantity: (slug: string) => void;
  decreaseQuantity: (slug: string) => void;
  openCart: () => void;
  closeCart: () => void;
  cartCount: number;
  subtotal: number;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  // Restore cart
  useEffect(() => {
    const storedCart = window.localStorage.getItem("aavya-cart");

    if (storedCart) {
      try {
        setItems(JSON.parse(storedCart));
      } catch {
        window.localStorage.removeItem("aavya-cart");
      }
    }
  }, []);

  // Persist cart
  useEffect(() => {
    window.localStorage.setItem(
      "aavya-cart",
      JSON.stringify(items)
    );
  }, [items]);

  function addToCart(product: Product) {
    setItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.product.slug === product.slug
      );

      if (existingItem) {
        return currentItems.map((item) =>
          item.product.slug === product.slug
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...currentItems,
        {
          product,
          quantity: 1,
        },
      ];
    });

    setIsOpen(true);
  }

  function removeFromCart(slug: string) {
    setItems((currentItems) =>
      currentItems.filter(
        (item) => item.product.slug !== slug
      )
    );
  }

  function increaseQuantity(slug: string) {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.product.slug === slug
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  }

  function decreaseQuantity(slug: string) {
    setItems((currentItems) =>
      currentItems
        .map((item) =>
          item.product.slug === slug
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  const cartCount = useMemo(
    () =>
      items.reduce(
        (total, item) => total + item.quantity,
        0
      ),
    [items]
  );

  const subtotal = useMemo(
    () =>
      items.reduce(
        (total, item) =>
          total + item.product.price * item.quantity,
        0
      ),
    [items]
  );

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        openCart: () => setIsOpen(true),
        closeCart: () => setIsOpen(false),
        cartCount,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside CartProvider"
    );
  }

  return context;
}