import "./BooksGrid.css";
import BookCard from "../BookCard/BookCard";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { ApiResponse } from "@/types/Response.type";
import BookNotFound from "../BookNotFound/BookNotFound";
import { BOOKS_API_ENDPOINT } from "@/constants/books.api";
import SearchPagination from "../SearchPagination/SearchPagination";
import { getParams } from "@/utils/getParams";

type BooksGridProps = {
  searchParams?: string;
  sortParams?: string;
  topicParams?: string;
  pageNumberParams?: string;
};

export default async function BooksGrid({
  searchParams,
  sortParams,
  topicParams,
  pageNumberParams,
}: BooksGridProps) {
  const fetchParams = getParams({
    searchParams,
    sortParams,
    topicParams,
    pageNumberParams,
  });

  const response = await fetch(`${BOOKS_API_ENDPOINT}${fetchParams}`);

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
