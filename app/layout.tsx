import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Book Nook",
  description:
    "A free e-book website. Find free e-books from Project Gutenberg and add them to your personal reading list. Created by Renz Marie Nollase",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
