import Link from "next/link";
import "./book.css";

export default function Book() {
  const sampleLink1 =
    "https://www.gutenberg.org/cache/epub/1342/pg1342-images.html";

  const sampleLink2 = "https://www.gutenberg.org/ebooks/1342.epub3.images";

  return (
    <div className="container--book">
      <h1 className="accent-text">Book title</h1>

      <section className="flex-row">
        <img src="/placeholder-book-cover.svg" alt="" width={82} />
        <div>
          <p>
            <span className="bold-text">Author(s):</span>{" "}
            <span>Author Authorson</span>
          </p>
          <p>
            <span className="bold-text">Summary:</span>{" "}
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </span>
          </p>
          <p>
            <span className="bold-text">Subject(s):</span>{" "}
            <span>Sample subject</span>, <span>Sample subject</span>
          </p>
        </div>
      </section>
      <section>
        <h2>Want to read the book?</h2>
        <ul>
          <li>
            <Link href={sampleLink1} target="_blank" className="link-pressable">
              Open book in new tab
            </Link>
          </li>
          <li>
            <Link href={sampleLink2} className="link-pressable">
              Download e-pub (zip folder)
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
