import Link from "next/link";
import "./BookCard.css";

export default function BookCard() {
  return (
    <article>
      <header>
        <h1> Book Title </h1>
      </header>
      <Link href="/book/1">Find out more</Link>
    </article>
  );
}
