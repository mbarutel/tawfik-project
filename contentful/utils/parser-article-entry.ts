import { ArticleEntry, ArticleType } from "./types";
import parserAssetEntry from "./parser-asset-entry";

export default function parserArticleEntry(
  articleEntry: ArticleEntry,
): ArticleType {
  return {
    slug: articleEntry.fields.slug,
    title: articleEntry.fields.title,
    updatedDate: new Date(articleEntry.sys.updatedAt),
    poster: parserAssetEntry({ asset: articleEntry.fields.poster }),
    description: articleEntry.fields.description,
    body: articleEntry.fields.body,
  };
}
