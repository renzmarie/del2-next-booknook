/* import { BOOKS_API_ENDPOINT } from "@/constants/books.api"; */
import "./page.css";
/* import { ApiResponse } from "@/types/Response.type"; */
import SearchForm from "@/components/SearchForm/SearchForm";
/* import { Book } from "@/types/Book.type";
import ErrorMessage from "@/components/ErrorMessage/ErrorMessage"; */
import { Suspense } from "react";
import Skeleton from "@/components/Skeleton/Skeleton";
/* import BookCard from "@/components/BookCard/BookCard"; */
import BooksGrid from "@/components/BooksGrid/BooksGrid";

export default async function Home() {
  const sortParams = "popular";

  return (
    <div className="container--home">
      <section className="hero-section center">
        <h1 className="hero-text accent-text">79,000+ Free e-books</h1>
        <SearchForm />
      </section>
      <section>
        <h2 className="accent-text underlined-text">Most Popular</h2>
        <Suspense fallback={<Skeleton />}>
          <BooksGrid sortParams={sortParams} />
        </Suspense>
      </section>
    </div>
  );
}
