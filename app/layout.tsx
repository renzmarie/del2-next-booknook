import type { Metadata } from "next";
import "./globals.css";
import PageContent from "@/components/PageContent/MainPageContent";
import PageHeader from "@/components/PageHeader/PageHeader";
import Link from "next/link";

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
        <PageContent>{children}</PageContent>
        <footer>
          <span>
            Credits:{" "}
            <Link href="https://streamlinehq.com/">
              Free icons and illustrations from Streamline
            </Link>
          </span>
        </footer>
      </body>
    </html>
  );
}
