import "./SearchForm.css";
import Form from "next/form";

export default function SearchForm() {
  return (
    <Form action="/search" formMethod="GET" className="form--search">
      <label htmlFor="search-text">Search book by title or author</label>
      <input name="q" id="search-text" type="text" required></input>
      <button type="submit" className="button-primary">
        Find
      </button>
    </Form>
  );
}
