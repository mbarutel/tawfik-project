import { RichTextRenderer } from "@/components";
import { Article } from "@/contentful/controllers/article";
import parserArticleEntry from "@/contentful/utils/parser-article-entry";
import { formatDate } from "@/lib";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const articleInstance = new Article({
    preview: false,
    parser: parserArticleEntry,
  });

  return await articleInstance.getArticles();
}

export default async function page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const draft = await draftMode();

  const articleInstance = new Article({
    preview: draft.isEnabled,
    parser: parserArticleEntry,
  });

  const article = await articleInstance.getArticle(slug);

  if (!article) {
    return notFound();
  }

  return (
    <article className="mb-16 scroll-mt-12">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <p className="font-light">{formatDate(article.updatedDate)}</p>
        <h1 className="text-4xl xl:text-6xl font-bold my-10">
          {article.title}
        </h1>
      </div>
      <RichTextRenderer document={article.body} />
    </article>
  );
}
