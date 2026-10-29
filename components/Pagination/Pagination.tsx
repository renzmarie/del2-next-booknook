import Link from "next/link";
import "./Pagination.css";

type PaginationProps = {
  totalPageCount: number;
  pageNumber: number;
  q?: string;
};

// Determine page number based on count divided by 32

export default function Pagination({
  totalPageCount,
  pageNumber,
  q,
}: PaginationProps) {
  return (
    <div className="container--pagination">
      <span>
        {pageNumber > 1 && (
          <Link
            href={`/search/${pageNumber - 1}?q=${q}`}
            className="button-secondary"
          >
            Previous
          </Link>
        )}
      </span>
      <span>
        {pageNumber < totalPageCount && (
          <Link
            href={`/search/${pageNumber + 1}?q=${q}`}
            className="button-secondary"
          >
            Next
          </Link>
        )}
      </span>
    </div>
  );
}
