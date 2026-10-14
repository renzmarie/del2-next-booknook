import Link from "next/link";
import "./BookCard.css";
import { Book } from "@/types/Book.type";

export default function BookCard({ book }: { book: Book }) {
  return (
    <article className="card--book">
      <img src={book.formats["image/jpeg"]} alt="" />
      <div>
        <h1> {book.title} </h1>
        <section>
          <p>
            Author(s): {book.authors.map((author) => author.name).join(", ")}
          </p>
          <p>Subjects: {book.subjects.map((subject) => subject).join(", ")}</p>
        </section>
      </div>

      <Link href={`/book/${book.id}`} className="button-primary">
        Go to book
      </Link>
    </article>
  );
}
