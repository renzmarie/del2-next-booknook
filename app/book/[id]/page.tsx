import Link from "next/link";
import "./book.css";
import { BOOKS_API_ENDPOINT } from "@/constants/books.api";
import { Book } from "@/types/Book.type";
import { NoneResponse } from "@/types/Response.type";
import BookNotFound from "@/components/BookNotFound/BookNotFound";
import ErrorMessage from "@/components/ErrorMessage/ErrorMessage";

export type BookPageProps = {
  params: Promise<{ id: string }>;
};

export default async function BookPage({ params }: BookPageProps) {
  const paramsId = await params;
  const bookId = paramsId.id;
  const response = await fetch(`${BOOKS_API_ENDPOINT}/${bookId}`);

  if (response.status === 404) {
    return <BookNotFound searchId={bookId} />;
  }

  if (!response.ok) {
    console.log(response.status);
    return <ErrorMessage status={response.status} />;
  }

  const book: Book = await response.json();

  return (
    <div className="container--book">
      <h1 className="accent-text">{book.title}</h1>

      <section className="flex-row">
        <img src={book.formats["image/jpeg"]} alt="" width={128} height={200} />
        <div>
          <p>
            <span className="bold-text">Author(s):</span>{" "}
            {book.authors.map((author) => author.name).join(", ")}
          </p>
          <p>
            <span className="bold-text">Summary:</span> {book.summaries}
          </p>
          <p>
            <span className="bold-text">Subject(s):</span>{" "}
            {book.subjects.map((subject) => subject).join(", ")}
          </p>
        </div>
      </section>
      <section>
        <h2>Want to read {book.title}?</h2>
        <ul>
          <li>
            <Link
              href={book.formats["text/html"]}
              target="_blank"
              className="link-pressable"
            >
              Open book in new tab
            </Link>
          </li>
          <li>
            <Link
              href={book.formats["application/epub+zip"]}
              className="link-pressable"
            >
              Download e-pub file (zip folder)
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
