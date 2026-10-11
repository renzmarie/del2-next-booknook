import "./SearchForm.css";

export default function SearchForm() {
  return (
    <form className="form--search">
      <label>
        Find books by title or author
        <input type="text" required></input>
      </label>
      <button type="submit" className="button-primary">
        Find
      </button>
    </form>
  );
}
