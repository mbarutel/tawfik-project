import { BlogEntry, BlogType } from "./types";
import parserAssetEntry from "./parser-asset-entry";

export default function parserBlogEntry(blogEntry: BlogEntry): BlogType {
  return {
    slug: blogEntry.fields.slug,
    title: blogEntry.fields.title,
    updatedDate: new Date(blogEntry.sys.updatedAt),
    poster: parserAssetEntry({ asset: blogEntry.fields.poster }),
    description: blogEntry.fields.description,
    body: blogEntry.fields.body,
  };
}
