import type { Metadata } from "next";
import "./globals.css";

import PageHeader from "@/components/PageHeader/PageHeader";
import Link from "next/link";
import PageContainer from "@/components/PageContainer/PageContainer";

export const metadata: Metadata = {
  title: "Book Nook",
  description:
    "A free e-book website. Find free e-books from Project Gutenberg and add them to your personal reading list. Created by Renz Marie Nollase",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <PageHeader />

        <main>
          <PageContainer> {children} </PageContainer>
        </main>

        <footer>
          <p>
            Credits:{" "}
            <Link href="https://streamlinehq.com/">
              Free icons and illustrations from Streamlines
            </Link>
            Powered by{" "}
            <Link href="https://www.gutenberg.org/">Project Gutenberg</Link>.
          </p>
        </footer>
      </body>
    </html>
  );
}
