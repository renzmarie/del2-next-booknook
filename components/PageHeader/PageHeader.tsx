import Link from "next/link";
import "./PageHeader.css";
import { IoSearch } from "react-icons/io5";

export default function PageHeader() {
  return (
    <header className="page-header">
      <img
        src="/logo_dark.svg"
        alt="The Book Nook logo. Three books stacked on top of each other and the page name Book Nook in small letters."
        className="header-logo"
      />
      <nav className="nav--header">
        <Link className="link-pressable" href="/">
          Home
        </Link>
        <Link className="link-pressable" href="/about">
          About
        </Link>
        <Link className="link-pressable" href="/">
          Find Book
          <IoSearch />
        </Link>
      </nav>
    </header>
  );
}
