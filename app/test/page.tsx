import BookNotFound from "@/components/BookNotFound/BookNotFound";
import ErrorMessage from "@/components/ErrorMessage/ErrorMessage";
import Skeleton from "@/components/Skeleton/Skeleton";
import Spinner from "@/components/Spinner/Spinner";
import "./test.css";

export default function Test() {
  return (
    <div className="container--test">
      <ErrorMessage status={500} />
      <BookNotFound />
      <div>
        <h1>Searching our collection</h1>
        <Spinner />
      </div>

      <Skeleton />
    </div>
  );
}
