import "./BookNotFound.css";
import { LuSearchX } from "react-icons/lu";
import { RiLightbulbAiLine } from "react-icons/ri";

type BookNotFoundProps = {
  searchParams?: string;
  searchId?: string;
};

export default function BookNotFound({
  searchParams,
  searchId,
}: BookNotFoundProps) {
  return (
    <div className="not-found-container">
      <LuSearchX className="big-icon" />
      {searchId !== undefined ? (
        <p className="book">
          <span className="big-text">
            No book found with ID <span className="italicized">{searchId}</span>
          </span>
          <br />
          <RiLightbulbAiLine /> Tip! Search for books via title or author name
          in the search bar on top of the page.
        </p>
      ) : (
        <p className="search">
          <span className="big-text">Search results for "{searchParams}"</span>
          <br />
          No books found in our collection related to your search.
        </p>
      )}
    </div>
  );
}
