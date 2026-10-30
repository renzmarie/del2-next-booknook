import "./Spinner.css";
import { FaHandPointUp } from "react-icons/fa";

type SpinnerProps = {
  query?: string;
};

export default function Spinner({ query }: SpinnerProps) {
  return (
    <div
      className="spinner"
      aria-label="Illustration of a hand moving over a shelf containing multiple books."
    >
      {query && (
        <span className="big-text">
          Searching our collections for "{query}"
        </span>
      )}
      <div className="spinner-background">
        <FaHandPointUp className="moving-element" />
      </div>
      <span>This may take a while...</span>
    </div>
  );
}
