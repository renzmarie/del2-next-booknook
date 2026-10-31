import "./Skeleton.css";

export default function Skeleton() {
  return (
    <div className="container--skeleton">
      <div className="grid-cards">
        <div className="container--modal">
          <span className="italicized">
            Fetching the next set of books{" "}
            <span className="skeleton-pulse">. . .</span>
          </span>
        </div>
        {Array.from({ length: 16 }).map((_, index) => (
          <div className="book-skeleton" key={index}>
            <div className="skeleton-cover skeleton-pulse" />

            <div className="skeleton-content">
              <div className="skeleton-title skeleton-pulse" />
              <div className="skeleton-author skeleton-pulse" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
