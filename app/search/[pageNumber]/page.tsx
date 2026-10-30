import BooksGrid from "@/components/BooksGrid/BooksGrid";
import Skeleton from "@/components/Skeleton/Skeleton";
import { Suspense } from "react";
import { RiLightbulbAiLine } from "react-icons/ri";

export type SearchPageProps = {
  params: Promise<{ pageNumber: string }>;
  searchParams: Promise<{
    query: string;
  }>;
};

export default async function PaginatedSearch({
  params,
  searchParams,
}: SearchPageProps) {
  const { pageNumber } = await params;
  const { query } = await searchParams;

  console.log("pageNumber:", pageNumber);

  if (query.trim().length === 0) {
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

  return (
    <>
      <h1>Search results for "{query}"</h1>
      <section>
        <Suspense fallback={<Skeleton />}>
          <BooksGrid
            pageNumberParams={pageNumber === undefined ? "1" : pageNumber}
            searchParams={query}
          />
        </Suspense>
      </section>
    </>
  );
}
