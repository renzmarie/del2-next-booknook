import { Book } from "./Book.type";

export type NoneResponse = {
  detail: string;
};

export type ApiResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Book[];
};
