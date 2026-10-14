import { BOOKS_API_ENDPOINT } from "@/constants/books.api";
import "./page.css";
import BookCard from "@/components/BookCard/BookCard";
import { ApiResponse } from "@/types/Response.type";
import SearchForm from "@/components/SearchForm/SearchForm";
import Link from "next/link";
import BooksGrid from "@/components/BooksGrid/BooksGrid";
import { Book } from "@/types/Book.type";

export default async function Home() {
  const response = await fetch(`${BOOKS_API_ENDPOINT}/?page=1`);

  if (!response.ok) {
    console.log(`Something went wrong. Error Code: ${response.status}`);
  }

  const books: ApiResponse = await response.json();

  const popularBooks: Book[] = books.results.splice(5, 10);

  return (
    <div className="container--home">
      <h1 className="hero-text accent-text">79,000+ Free E-books</h1>
      <p>
        Find your next favorite read. Powered by{" "}
        <Link href="https://www.gutenberg.org/">Project Gutenberg</Link>.
      </p>
      <SearchForm />
      <section>
        <h2 className="accent-text">Most Popular</h2>
        <BooksGrid booksArray={popularBooks} />
      </section>
    </div>
  );
}
