export type Person = {
  name: string;
  birth_year: number | null;
  deat_year: number | null;
};

export type Book = {
  id: number;
  title: string;
  authors: Person[];
  summaries: string[];
  subjects: string[];
  translators: Person[];
  bookshelves: string[];
  languages: string[];
  copyright: boolean | null;
  media_type: string;
  formats: Record<string, string>;
  download_count: number;
};
