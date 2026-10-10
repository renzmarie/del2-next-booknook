import Image from "next/image";
import "./page.css";
import BookCard from "@/components/BookCard/BookCard";

export default function Home() {
  return (
    <main className="page--home">
      <h1>Welcome to Book Nook</h1>
      <BookCard />
    </main>
  );
}
