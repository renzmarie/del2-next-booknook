import Spinner from "@/components/Spinner/Spinner";

export default function BookLoadingPage() {
  return (
    <>
      <h1 className="accent-text">Getting book</h1>
      <Spinner />
    </>
  );
}
