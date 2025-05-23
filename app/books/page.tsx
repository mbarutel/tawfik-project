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

export default async function page() {
  const draft = await draftMode();

  const bookInstance = new Book({
    preview: draft.isEnabled,
    parser: parserBookEntry,
  });

  const books = await bookInstance.getBooks();

  return (
    <section>
      <div className="container mx-auto flex flex-col items-center relative">
        <h2 className="blog_section_header">Books</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-12 gap-x-16 lg:gap-x-22 2xl:gap-x-32">
          {books.map((book, index) => (
            <Fragment key={index}>
              <BookCard book={book} />
            </Fragment>
          ))}
        </div>
      </div>
    </section>
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
      <h2 className="text-4xl font-bold text-center mt-6">{book.title}</h2>
      <p className="italic font-light text-center mb-6">By {book.author}</p>
      <p className="text-justify">{book.description}</p>
    </div>
  );
}
