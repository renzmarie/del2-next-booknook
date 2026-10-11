import SearchForm from "@/components/SearchForm/SearchForm";
import "./page.css";
import BookCard from "@/components/BookCard/BookCard";

export default function Home() {
  return (
    <div className="container--home">
      <h1 className="hero-text accent-text">Welcome to Book Nook</h1>
      <SearchForm />
      <section>
        <h2 className="accent-text">Explore the collection</h2>
        <div className="grid-cards">
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
        </div>
      </section>
    </div>
  );
}
