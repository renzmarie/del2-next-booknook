import SearchPagination from "@/components/SearchPagination/SearchPagination";
import "./about.css";

export default function AboutPage() {
  return (
    <div className="container--about-page">
      <h1 className="accent-text"> About Book Nook</h1>
      <h2>A Little Corner for Every Book Lover</h2>
      <p>
        Welcome to Book Nook, a cozy little corner of the internet where
        stories, knowledge, and new discoveries are always within reach. Book
        Nook was created with one simple idea in mind: everyone deserves access
        to books, regardless of their budget. <br />
        <br />
        With access to over 70,000 free e-books from{" "}
        <a href="https://www.gutenberg.org/">Project Gutenberg</a>, there's
        something for every kind of reader. Explore a wide range of subjects and
        categories, from Arts & Literature to Education, History, and
        Philosophy. <br />
        <br /> You can read books directly from your mobile browser or download
        them in EPUB format to enjoy whenever and wherever you like. Think of
        Book Nook as your personal library, always within reach.
      </p>
      <h2>Where Do the Books Come From?</h2>
      <p>
        Book Nook uses <a href="https://gutendex.com/">Gutendex</a>, a JSON web
        API that provides metadata for e-books from Project Gutenberg. Project
        Gutenberg is a digital library of free e-books, primarily featuring
        older literary works whose U.S. copyright has expired or that have
        otherwise been made available for free distribution. <br />
        <br />
        Through Gutendex, Book Nook makes it easier to discover and explore the
        extensive collection of books available in Project Gutenberg's library.
      </p>
      <h2>Meet the Creator</h2>
      <p>
        Hi! I'm Renz Marie Nollase, a frontend web development student and the
        creator of Book Nook. My inspiration for building this website comes
        from a personal experience. <br />
        <br />
        When I was younger, I often found it difficult to find books to read
        because buying them could be expensive. Despite this, my love for
        reading never faded. I always wanted to discover new stories, explore
        different subjects, and learn through books. <br />
        <br /> I created Book Nook with a simple goal: to make reading materials
        more accessible and give people an easy way to discover books online
        without the financial barrier of purchasing them. <br />
        <br />I believe that everyone deserves the opportunity to read, learn,
        and explore new ideas. Through Book Nook, I hope to make that
        opportunity a little easier to find.
      </p>
      <h2>What's Next for Book Nook?</h2>
      <p>
        Book Nook is still growing, and there's plenty more I'd love to bring to
        this little corner of the internet. In the future, I hope to introduce
        features that make the reading experience even better, including:
      </p>
      <ul>
        <li>
          Online Reading: The ability to read books directly on the website
          without needing to download them.
        </li>
        <li>
          Personal Reading Lists: A way to save favorite books and keep track of
          titles you'd like to read.
        </li>
        <li>
          Dictionary Integration: Easy access to word definitions to help
          readers explore unfamiliar words and expand their vocabulary.
        </li>
        <li>
          Improved Book Discovery: More ways to browse, filter, and find books
          based on individual interests.
        </li>
      </ul>
      <p>
        These are part of the vision for Book Nook as it continues to grow. My
        goal is to make it a welcoming space where discovering, learning, and
        enjoying books becomes a little easier for everyone.
      </p>
      <h3>A Final Note</h3>
      <p>
        Thank you for stopping by Book Nook! There's always another story
        waiting to be discovered. Happy reading!
      </p>
      <SearchPagination pageNumber={1} totalPageCount={9} />
    </div>
  );
}
