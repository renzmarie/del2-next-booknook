import "./BooksGrid.css";
import BookCard from "../BookCard/BookCard";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { ApiResponse } from "@/types/Response.type";
import BookNotFound from "../BookNotFound/BookNotFound";
import { BOOKS_API_ENDPOINT } from "@/constants/books.api";
import SearchPagination from "../Pagination/SearchPagination";

type BooksGridProps = {
  pageNumberParams?: string;
  searchParams: string;
};

export default async function BooksGrid({
  pageNumberParams,
  searchParams,
}: BooksGridProps) {
  const response = await fetch(
    `${BOOKS_API_ENDPOINT}?page=${pageNumberParams === undefined ? 1 : parseInt(pageNumberParams)}&search=${searchParams}`,
  );

  console.log(
    `${BOOKS_API_ENDPOINT}?page=${pageNumberParams === undefined ? 1 : parseInt(pageNumberParams)}&search=${searchParams}`,
  );

  if (!response.ok) {
    return <ErrorMessage status={response.status} />;
  }

  const data: ApiResponse = await response.json();

  if (data.count === 0) {
    return <BookNotFound searchParams={searchParams} />;
  }

  const booksArray = data.results;

  const totalPageCount = Math.ceil(data.count / 32);

  return (
    <>
      {/* <span className="big-text">
        We found <i>{data.count}</i> books related to "{searchParams}"
      </span> */}
      <div className="grid-cards">
        {booksArray.map((item) => (
          <BookCard key={item.id} book={item} />
        ))}
      </div>
      {totalPageCount > 1 && (
        <SearchPagination
          pageNumber={
            pageNumberParams === undefined ? 1 : parseInt(pageNumberParams)
          }
          totalPageCount={totalPageCount}
          query={searchParams}
        />
      )}
    </>
  );
}
