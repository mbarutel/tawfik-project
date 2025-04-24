import { Book } from "@/contentful/controllers/book";
import parserBookEntry from "@/contentful/utils/parser-book-entry";
import { BookType } from "@/contentful/utils/types";
import { draftMode } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { BsArrowRight } from "react-icons/bs";

export async function generateStaticParams() {
  const bookInstance = new Book({
    preview: false,
    parser: parserBookEntry,
  });

  return await bookInstance.getBooks();
}

export default async function ResourcesBooks() {
  const draft = await draftMode();

  const bookInstance = new Book({
    preview: draft.isEnabled,
    parser: parserBookEntry,
  });

  const booksArray = await bookInstance.getBooks();

  const books = booksArray.slice(0, 3);

  return (
    <div className="flex flex-col items-center relative">
      <h2 className="blog_section_header">Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-12 gap-x-16 lg:gap-x-22 2xl:gap-x-32">
        {books.map((book, index) => (
          <Fragment key={index}>
            <BookCard book={book} />
          </Fragment>
        ))}
      </div>
      {booksArray.length > 3 && (
        <Link
          href="/books"
          className="text-white italic underline text-2xl group block mt-6 lg:mt-0 lg:absolute top-3 2xl:top-5 right-0"
        >
          See All Books
          <BsArrowRight className="hidden lg:inline-flex ml-3 group-hover:translate-x-2 transition" />
        </Link>
      )}
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
      <h2 className="text-4xl font-bold text-center mt-6">{book.title}</h2>
      <p className="italic font-light text-center mb-6">By {book.author}</p>
      <p className="text-justify">{book.description}</p>
    </div>
  );
}
