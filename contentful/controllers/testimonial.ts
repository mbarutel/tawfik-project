import { TypeBookSkeleton } from "../types/contentful/types";
import { ContentfulClientApi } from "contentful";
import contentfulClient from "../utils/client";
import { BookType } from "../utils/types";

export class Book {
  private client: ContentfulClientApi<undefined>;
  private parser: Function;

  constructor({ preview, parser }: { preview: boolean; parser: Function }) {
    this.client = contentfulClient({ preview });
    this.parser = parser;
  }

  public async getBooks(): Promise<BookType[]> {
    const bookResult = await this.client.getEntries<TypeBookSkeleton>({
      content_type: "book",
      include: 2,
      order: ["sys.createdAt", "sys.updatedAt"],
    });

    return bookResult.items.map((bookEntry) => this.parser(bookEntry));
  }
}
