import BooksGrid from "@/components/BooksGrid/BooksGrid";
import "./SearchPage.css";
import { RiLightbulbAiLine } from "react-icons/ri";
import { Suspense } from "react";
import Spinner from "@/components/Spinner/Spinner";

export type SearchPageProps = {
  searchParams: Promise<{
    query: string;
  }>;
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { query } = await searchParams;

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
      <section>
        <Suspense fallback={<Spinner query={query} />}>
          <h1 className="underlined-text">Search results for "{query}"</h1>
          <BooksGrid searchParams={encodeURI(query.trim())} />
        </Suspense>
      </section>
    </>
  );
}
