import Link from "next/link";
import "./PageHeader.css";

export default function PageHeader() {
  return (
    <header className="page-header">
      <img
        src="/logo_dark.svg"
        alt="The Book Nook logo. Three books stacked on top of each other and the page name Book Nook in small letters."
      />
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
}
