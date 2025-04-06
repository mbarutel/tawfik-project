import { BookEntry, BookType } from "./types";
import parserAssetEntry from "./parser-asset-entry";

export default function parserBookEntry(bookEntry: BookEntry): BookType {
  return {
    title: bookEntry.fields.title,
    author: bookEntry.fields.author,
    poster: parserAssetEntry({ asset: bookEntry.fields.poster }),
    description: bookEntry.fields.description,
  };
}
