import { Book } from "@/contentful/controllers/book";
import parserBookEntry from "@/contentful/utils/parser-book-entry";
import { BookType } from "@/contentful/utils/types";
import { draftMode } from "next/headers";
import Image from "next/image";
import { Fragment } from "react";

export async function generateStaticParams() {
  const bookInstance = new Book({
    preview: false,
    parser: parserBookEntry,
  });

  return await bookInstance.getBooks();
}

export default async function BlogBooks() {
  const draft = await draftMode();

  const bookInstance = new Book({
    preview: draft.isEnabled,
    parser: parserBookEntry,
  });

  const books = await bookInstance.getBooks();

  return (
    <div>
      <h2 className="section_header decoration-primary mb-10">Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-12 gap-x-16 lg:gap-x-22 2xl:gap-x-32">
        {books.map((book, index) => (
          <Fragment key={index}>
            <BookCard book={book} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

function BookCard({ book }: { book: BookType }) {
  return (
    <div className="flex flex-col">
      <div className="relative h-[350px] w-[250px] mx-auto">
        <Image
          src={book.poster.src}
          alt={book.poster.alt}
          fill
          className="object-cover object-center"
        />
      </div>
      <h2 className="text-4xl font-bold hover:underline text-center my-4">
        {book.title}
      </h2>
      <p className="text-justify">{book.description}</p>
      <p className="mt-6 italic font-light">{book.author}</p>
    </div>
  );
}
