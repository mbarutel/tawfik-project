import { TypeArticleSkeleton } from "../types/contentful/types";
import { ContentfulClientApi } from "contentful";
import contentfulClient from "../utils/client";
import { ArticleType } from "../utils/types";

export class Article {
  private client: ContentfulClientApi<undefined>;
  private parser: Function;

  constructor({ preview, parser }: { preview: boolean; parser: Function }) {
    this.client = contentfulClient({ preview });
    this.parser = parser;
  }

  public async getArticle(slug: string): Promise<ArticleType | null> {
    const articleResult = await this.client.getEntries<TypeArticleSkeleton>({
      content_type: "article",
      "fields.slug": slug,
      include: 2,
    });

    if (articleResult.items.length === 0) {
      return null;
    }

    return this.parser(articleResult.items[0]);
  }

  public async getLatestArticle(): Promise<ArticleType> {
    const articleResult = await this.client.getEntries<TypeArticleSkeleton>({
      content_type: "article",
      include: 2,
      order: ["-sys.createdAt", "-sys.updatedAt"],
    });

    return this.parser(articleResult.items[0]);
  }

  public async getArticles(): Promise<ArticleType[]> {
    const articleResult = await this.client.getEntries<TypeArticleSkeleton>({
      content_type: "article",
      include: 2,
      order: ["-sys.createdAt", "-sys.updatedAt"],
    });

    return articleResult.items.map((articleEntry) => this.parser(articleEntry));
  }
}
