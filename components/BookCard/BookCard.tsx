import Link from "next/link";
import "./BookCard.css";

export default function BookCard() {
  return (
    <article className="card--book">
      <div className="flex-row">
        <img src="/placeholder-book-cover.svg" alt="" width={82} />
        <div>
          <h1> Book Title </h1>
          <section>
            <p>
              Author(s): <span>Author Authorson</span>
            </p>
            <p>
              Subjects: <span>Sample subject</span>, <span>Sample subject</span>
            </p>
          </section>
        </div>
      </div>

      <Link href="/book/1" className="button-primary">
        Go to book
      </Link>
    </article>
  );
}
