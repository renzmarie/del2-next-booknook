import ErrorMessage from "@/components/ErrorMessage/ErrorMessage";
import "./about.css";
import Spinner from "@/components/Spinner/Spinner";
import Skeleton from "@/components/Skeleton/Skeleton";

export default function AboutPage() {
  return (
    <>
      <h1 className="accent-text"> About Book Nook</h1>
      {/* <ErrorMessage status={400} /> */}
      <Skeleton />
      <Spinner />
    </>
  );
}
