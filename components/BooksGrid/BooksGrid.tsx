import { Book } from "@/types/Book.type";
import "./BooksGrid.css";
import BookCard from "../BookCard/BookCard";

export default function BookGrid({ booksArray }: { booksArray: Book[] }) {
  const bookList = booksArray;

  return (
    <div className="grid-cards">
      {bookList.map((item) => (
        <BookCard key={item.id} book={item} />
      ))}
    </div>
  );
}
