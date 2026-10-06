import type { Metadata } from "next";
import "./globals.css";

import { CartProvider } from "@/components/cart/CartProvider";
import CartDrawer from "@/components/cart/CartDrawer";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "AAVYA — The Art of Draping",
  description:
    "AAVYA is an editorial Indian textile house celebrating the art of draping.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <SmoothScroll />

          {children}

          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}