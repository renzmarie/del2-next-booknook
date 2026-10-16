import ErrorMessage from "@/components/ErrorMessage/ErrorMessage";
import "./about.css";

export default function AboutPage() {
  return (
    <>
      <h1 className="accent-text"> About Book Nook</h1>
      <ErrorMessage status={400} />
    </>
  );
}
