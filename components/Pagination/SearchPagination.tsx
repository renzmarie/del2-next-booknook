import Link from "next/link";
import "./Pagination.css";

type SearchPaginationProps = {
  totalPageCount: number;
  pageNumber: number;
  query?: string;
};

// Determine page number based on count divided by 32

export default function SearchPagination({
  totalPageCount,
  pageNumber,
  query,
}: SearchPaginationProps) {
  return (
    <div className="container--pagination">
      <span>
        {pageNumber > 1 && (
          <Link
            href={`/search/${pageNumber - 1}?query=${query}`}
            className="button-secondary"
          >
            Previous
          </Link>
        )}
      </span>
      <span>
        {pageNumber < totalPageCount && (
          <Link
            href={`/search/${pageNumber + 1}?query=${query}`}
            className="button-secondary"
          >
            Next
          </Link>
        )}
      </span>
    </div>
  );
}
