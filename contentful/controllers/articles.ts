import { TypeBlogSkeleton } from "../types/contentful/types";
import { ContentfulClientApi } from "contentful";
import contentfulClient from "../utils/client";
import { BlogType } from "../utils/types";

export class Blog {
  private client: ContentfulClientApi<undefined>;
  private parser: Function;

  constructor({ preview, parser }: { preview: boolean; parser: Function }) {
    this.client = contentfulClient({ preview });
    this.parser = parser;
  }

  public async getBlog(slug: string): Promise<BlogType | null> {
    const blogResult = await this.client.getEntries<TypeBlogSkeleton>({
      content_type: "blog",
      "fields.slug": slug,
      include: 2,
    });

    if (blogResult.items.length === 0) {
      return null;
    }

    return this.parser(blogResult.items[0]);
  }

  public async getLatestBlog(): Promise<BlogType> {
    const blogResult = await this.client.getEntries<TypeBlogSkeleton>({
      content_type: "blog",
      include: 2,
      order: ["sys.createdAt", "sys.updatedAt"],
    });

    return this.parser(blogResult.items[0]);
  }

  public async getBlogs(): Promise<BlogType[]> {
    const blogResult = await this.client.getEntries<TypeBlogSkeleton>({
      content_type: "blog",
      include: 2,
      order: ["sys.createdAt", "sys.updatedAt"],
    });

    return blogResult.items.map((blogEntry) => this.parser(blogEntry));
  }
}
