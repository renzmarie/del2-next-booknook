import Link from "next/link";
import "./PageHeader.css";
import { IoSearch } from "react-icons/io5";

export default function PageHeader() {
  return (
    <header className="page-header flex-row center bottom-border">
      <div className="header-logo">
        <img
          src="/logo_booknook.svg"
          alt="The Book Nook logo icon. Three books stacked on top of each other."
        />
        <span className="logo-text">booknook</span>
      </div>
      <nav className="nav-header">
        <Link className="link-pressable" href="/">
          Home
        </Link>
        <Link className="link-pressable" href="/about">
          About
        </Link>
      </nav>
    </header>
  );
}
