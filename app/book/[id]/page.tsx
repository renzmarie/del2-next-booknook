import Link from "next/link";
import "./book.css";
import { BOOKS_API_ENDPOINT } from "@/constants/books.api";
import { Book } from "@/types/Book.type";
import { IoMdOpen } from "react-icons/io";
import { TbDownloadFilled } from "react-icons/tb";
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
    <>
      <h1 className="accent-text underlined-text">{book.title}</h1>

      <section className="flex-row bottom-border">
        <div>
          <img
            src={book.formats["image/jpeg"]}
            alt=""
            width={128}
            height={200}
          />
        </div>

        <div className="book-details">
          <p>
            <span className="bold-text">Author(s):</span>{" "}
            {book.authors.map((author) => author.name).join(", ")}
          </p>
          <p>
            <span className="bold-text bottom-margin">Summary:</span> <br />{" "}
            {book.summaries}
          </p>
          <p>
            <span className="bold-text">Subject(s):</span>{" "}
            {book.subjects.map((subject) => subject).join(", ")}
          </p>
        </div>
      </section>
      <section className="container--read-window" id="book-window">
        <h2>Read {book.title} below</h2>
        <iframe
          src={book.formats["text/html"]}
          width="300"
          height="750"
          allowFullScreen
        >
          Browser does not support this feature.
        </iframe>
      </section>

      <section className="book-access">
        <h3>Other ways to read {book.title}</h3>
        <ul className="flex-row">
          <li className="center">
            <Link
              href={book.formats["text/html"]}
              target="_blank"
              className="card--link"
            >
              Open book in new tab <IoMdOpen />
            </Link>
          </li>
          <li className="center">
            <Link
              href={book.formats["application/epub+zip"]}
              className="card--link"
            >
              <TbDownloadFilled /> Download e-pub file (zip folder)
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
}
