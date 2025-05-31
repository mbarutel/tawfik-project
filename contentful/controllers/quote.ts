import { TypeQuoteSkeleton } from "../types/contentful/types";
import { ContentfulClientApi } from "contentful";
import contentfulClient from "../utils/client";
import { QuoteType } from "../utils/types";

export class Quote {
  private client: ContentfulClientApi<undefined>;
  private parser: Function;

  constructor({ preview, parser }: { preview: boolean; parser: Function }) {
    this.client = contentfulClient({ preview });
    this.parser = parser;
  }

  public async getQuotes(): Promise<QuoteType[]> {
    const quoteResult = await this.client.getEntries<TypeQuoteSkeleton>({
      content_type: "quote",
      include: 2,
      order: ["-sys.createdAt", "-sys.updatedAt"],
    });

    return quoteResult.items.map((quoteEntry) => this.parser(quoteEntry));
  }
}
