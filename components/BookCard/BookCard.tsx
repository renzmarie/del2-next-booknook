"use client";

import Link from "next/link";
import "./BookCard.css";
import { Book } from "@/types/Book.type";
import { shortenText } from "@/utils/textShorteners";
import { useState } from "react";

export default function BookCard({ book }: { book: Book }) {
  const cardTitle = shortenText(book.title, 60);

  return (
    <article className="card--book">
      <div>
        <div className="card-image">
          <img src={book.formats["image/jpeg"]} alt="" />
        </div>
        <div className="card-details">
          <Link href={`/book/${book.id}`}>
            {" "}
            <h1>{cardTitle}</h1>{" "}
          </Link>
          <section>
            <p>
              Author(s):{" "}
              {book.authors.length === 0 ? (
                <span>No known author</span>
              ) : (
                book.authors.map((author) => author.name).join(", ")
              )}
            </p>
          </section>
        </div>
      </div>

      <Link href={`/book/${book.id}`} className="button-primary">
        Go to book
      </Link>
    </article>
  );
}
