import "./Spinner.css";
import { FaHandPointUp } from "react-icons/fa";

export default function Spinner() {
  return (
    <div
      className="spinner"
      aria-label="Illustration of a hand moving over a shelf containing multiple books."
    >
      <div className="spinner-background">
        <FaHandPointUp className="moving-element" />
      </div>
      <span>This may take a while...</span>
    </div>
  );
}
