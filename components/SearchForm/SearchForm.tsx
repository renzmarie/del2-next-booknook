import "./SearchForm.css";
import Form from "next/form";
import { IoIosSearch } from "react-icons/io";

export default function SearchForm() {
  return (
    <Form
      action="/search"
      formMethod="GET"
      className="form--search flex-column"
    >
      <label htmlFor="search-text">Search by title or author</label>
      <div className="input-container center">
        <input name="q" id="search-text" type="text" required></input>
        <button type="submit" className="button-primary">
          Find <IoIosSearch />
        </button>
      </div>
    </Form>
  );
}
