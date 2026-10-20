import Spinner from "@/components/Spinner/Spinner";

export default function SearchLoadingPage() {
  return (
    <div className="container--loading">
      <h1 className="accent-text">Searching our collection</h1>
      <Spinner />
    </div>
  );
}
