import BooksGrid from "@/components/BooksGrid/BooksGrid";
import { BOOKS_API_ENDPOINT } from "@/constants/books.api";
import { ApiResponse } from "@/types/Response.type";
import BookNotFound from "@/components/BookNotFound/BookNotFound";
import ErrorMessage from "@/components/ErrorMessage/ErrorMessage";
import Pagination from "@/components/Pagination/Pagination";
import { RiLightbulbAiLine } from "react-icons/ri";

export type SearchPageProps = {
  params: Promise<{ pageNumber: string }>;
  searchParams: Promise<{
    q: string;
  }>;
};

export default async function PaginatedSearch({
  params,
  searchParams,
}: SearchPageProps) {
  const { pageNumber } = await params;
  const { q } = await searchParams;

  if (!q) {
    return (
      <div className="not-found-container">
        <p>
          <span className="big-text">Empty search query</span>
          <br />
          <RiLightbulbAiLine /> Tip! Search for books via title or author name.
        </p>
      </div>
    );
  }

  const response = await fetch(
    `${BOOKS_API_ENDPOINT}?page=${parseInt(pageNumber)}&search=${encodeURI(q)}`,
  );

  if (!response.ok) {
    return <ErrorMessage status={response.status} />;
  }

  const data: ApiResponse = await response.json();

  if (data.count === 0) {
    return <BookNotFound searchParams={q} />;
  }

  const booksArray = data.results;

  const totalPageCount = Math.ceil(data.count / 32);

  return (
    <>
      <h1 className="underlined-text">Search results for "{q}"</h1>
      <section>
        <BooksGrid booksArray={booksArray} />
        {(data.next || data.previous !== null) && (
          <Pagination
            pageNumber={parseInt(pageNumber)}
            totalPageCount={totalPageCount}
            q={q}
          />
        )}
      </section>
    </>
  );
}
