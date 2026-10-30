import { BOOKS_API_ENDPOINT } from "@/constants/books.api";
import "./page.css";
import { ApiResponse } from "@/types/Response.type";
import SearchForm from "@/components/SearchForm/SearchForm";
import { Book } from "@/types/Book.type";
import ErrorMessage from "@/components/ErrorMessage/ErrorMessage";
import { Suspense } from "react";
import Skeleton from "@/components/Skeleton/Skeleton";
import BookCard from "@/components/BookCard/BookCard";

export default async function Home() {
  const response = await fetch(`${BOOKS_API_ENDPOINT}?sort=popular`);

  if (!response.ok) {
    return <ErrorMessage status={response.status} />;
  }

  const books: ApiResponse = await response.json();

  const popularBooks: Book[] = books.results.splice(0, 12);

  return (
    <div className="container--home">
      <section className="hero-section center">
        <h1 className="hero-text accent-text">79,000+ Free e-books</h1>
        <SearchForm />
      </section>
      <section>
        <h2 className="accent-text underlined-text">Most Popular</h2>
        <Suspense fallback={<Skeleton />}>
          <div className="grid-cards">
            {popularBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </Suspense>
      </section>
    </div>
  );
}
