import "./SearchForm.css";
import Form from "next/form";
import { IoIosSearch } from "react-icons/io";

export default function SearchForm() {
  return (
    <Form action="/search" formMethod="GET" className="form--search">
      <div className="label-input-container">
        <label htmlFor="search-text">Search by title or author</label>
        <input name="q" id="search-text" type="text" required></input>
      </div>
      <button type="submit" className="button-primary">
        Find <IoIosSearch />
      </button>
    </Form>
  );
}
