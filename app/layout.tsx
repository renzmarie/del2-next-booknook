import type { Metadata } from "next";
import "./globals.css";
import { IoMdOpen } from "react-icons/io";

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
          <div>
            <span>Created by Renz Marie Nollase</span>{" "}
            <ul>
              <li>
                GitHub:{" "}
                <a href="https://github.com/renzmarie" target="_blank">
                  @renzmarie <IoMdOpen />
                </a>
              </li>
              <li>
                Email:{" "}
                <a href="mailto:renzmarienollase@gmail.com">
                  renzmarienollase@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div>
            <span>Resources from</span>{" "}
            <a href="https://www.gutenberg.org/" target="_blank">
              Project Gutenberg <IoMdOpen />
            </a>{" "}
            and{" "}
            <a href="https://gutendex.com/">
              Gutendex
              <IoMdOpen />
            </a>
            .
          </div>
          <div>
            <span>Credits:</span>{" "}
            <a href="https://streamlinehq.com/" target="_blank">
              Free icons and illustrations from Streamlines <IoMdOpen />
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
