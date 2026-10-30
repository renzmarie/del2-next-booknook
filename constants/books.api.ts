export const BOOKS_API_ENDPOINT = "https://gutendex.com/books" as const;

export const BOOKS_CATEGORIES: Record<string, string[]> = {
  Literature: [
    "Classics",
    "Children",
    "Novels",
    "Poetry",
    "Biographies",
    "Mtyhology",
  ],
  "Science & Technology": [
    "Engineering",
    "Mathematics",
    "Physics",
    "Biology",
    "Chemistry",
    "Earth",
  ],
} as const;
