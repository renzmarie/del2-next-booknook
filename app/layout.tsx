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
            <span>Resources from</span>{" "}
            <Link href="https://www.gutenberg.org/" target="_blank">
              Project Gutenberg <IoMdOpen />
            </Link>
            .
          </div>
          <div>
            <span>Credits:</span>{" "}
            <Link href="https://streamlinehq.com/" target="_blank">
              Free icons and illustrations from Streamlines <IoMdOpen />
            </Link>
          </div>
          <div>
            <span>Created by Renz Marie Nollase</span>{" "}
            <ul>
              <li>
                GitHub:{" "}
                <Link href="https://github.com/renzmarie" target="_blank">
                  @renzmarie <IoMdOpen />
                </Link>
              </li>
              <li>
                Email:{" "}
                <Link href="mailto:renzmarienollase@gmail.com">
                  renzmarienollase@gmail.com
                </Link>
              </li>
            </ul>
          </div>
        </footer>
      </body>
    </html>
  );
}
