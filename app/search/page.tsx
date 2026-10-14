import BooksGrid from "@/components/BooksGrid/BooksGrid";
import "./SearchPage.css";
import { BOOKS_API_ENDPOINT } from "@/constants/books.api";
import { ApiResponse } from "@/types/Response.type";

export type SearchPageProps = {
  searchParams: Promise<{
    q: string;
  }>;
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q } = await searchParams;

  const response = await fetch(`${BOOKS_API_ENDPOINT}?search=${encodeURI(q)}`);

  if (!response.ok) {
    console.log(`Something went wrong. Error Code: ${response.status}`);
  }

  const data: ApiResponse = await response.json();

  const booksArray = data.results;

  return (
    <>
      <h1>Search results for "{q}"</h1>
      <section>
        {data.count === 0 ? (
          <span>No books found for {q}</span>
        ) : (
          <BooksGrid booksArray={booksArray} />
        )}
        <BooksGrid booksArray={booksArray} />
      </section>
    </>
  );
}
