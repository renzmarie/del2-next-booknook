# Book Nook

## About the Project

**Book Nook** is a free online book discovery website created to make reading materials more accessible to everyone, regardless of their budget.

The website allows users to explore over 70,000 free e-books from Project Gutenberg. It features a variety of subjects and categories, including Arts & Literature, Education, History, and Philosophy.

Users can discover books, browse their details, and access available reading options directly through their mobile browser or download books in EPUB format.

Book Nook was created with the idea of making books easier to discover and access, especially for people who love reading but may find purchasing books expensive.

The project started as a school project and is intended to be continuously maintained and improved.

## Features

- Browse and discover over 70,000 free e-books.
- Explore books across different subjects and categories.
- View book information and metadata.
- Access available online reading options.
- Download books in EPUB format.
- Responsive interface for browsing on different devices.

## Technologies Used

- React
- TypeScript
- Next.js
- npm

## API and Data Source

Book Nook uses **[Gutendex](https://gutendex.com/)**, a JSON web API that provides metadata for e-books from **[Project Gutenberg](https://www.gutenberg.org/)**.

The API supplies book information that allows Book Nook to retrieve and display available titles and their associated metadata.

Project Gutenberg is a digital library offering free access to thousands of e-books, primarily consisting of older literary works.

### API Configuration

Book Nook communicates directly with the public Gutendex API through its frontend application.

No API key or authentication credentials are required for the current integration.

The API documentation and available endpoints can be found at [Gutendex API](https://gutendex.com/)

## Configuration

No additional environment variables or API keys are required to run the current version of Book Nook.

The Gutendex API is accessed directly through the frontend application using its public API endpoints.

## Known Issues and Limitations

- **API response time:** The Gutendex API can sometimes be slow to respond, which may affect how quickly book information loads on the website.
- No other known bugs or issues at the time of writing.

## Future Improvements

The following features are planned for future development:

- **Online Reading:** Allow users to read books directly on the website.
- **Personal Reading Lists:** Enable users to save favorite books and keep track of books they want to read.
- **Dictionary Integration:** Provide access to word definitions to help readers understand unfamiliar vocabulary.
- **Improved Book Discovery:** Introduce additional search filters and ways to discover books based on individual interests.

## Author

**Renz Marie Nollase**

Frontend Web Development Student

Book Nook was created as a school project inspired by a personal love for reading and the desire to make books more accessible to everyone.
