import { Article } from "@/contentful/controllers/article";
import parserArticleEntry from "@/contentful/utils/parser-article-entry";
import { ArticleType } from "@/contentful/utils/types";
import { formatDate } from "@/lib";
import { draftMode } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { BsArrowRight } from "react-icons/bs";

export async function generateStaticParams() {
  const articleInstance = new Article({
    preview: false,
    parser: parserArticleEntry,
  });

  return await articleInstance.getArticles();
}

export default async function page() {
  const draft = await draftMode();

  const articleInstance = new Article({
    preview: draft.isEnabled,
    parser: parserArticleEntry,
  });

  const articles = await articleInstance.getArticles();

  return (
    <section>
      <div className="container mx-auto flex flex-col items-center relative">
        <h2 className="blog_section_header">Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-12 gap-x-16 lg:gap-x-22 2xl:gap-x-32">
          {articles.map((article) => (
            <Fragment key={article.slug}>
              <ArticleCard article={article} />
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArticleCard({ article }: { article: ArticleType }) {
  return (
    <div className="flex flex-col">
      <Link
        href={`/articles/${article.slug}`}
        className="relative h-[350px] w-full overflow-hidden"
      >
        <Image
          src={article.poster.src}
          alt={article.poster.alt}
          fill
          className="object-cover object-center hover:scale-110 transition"
        />
      </Link>
      <p className="my-4 text-2xl text-justify">
        {formatDate(article.updatedDate)}
      </p>
      <Link href={`/articles/${article.slug}`}>
        <h2 className="text-4xl font-bold mb-3 hover:underline">
          {article.title}
        </h2>
      </Link>
      <p className="text-justify mb-6">{article.description}</p>
      <Link
        href={`/articles/${article.slug}`}
        className="text-secondary text-2xl mt-auto group"
      >
        Read Article
        <BsArrowRight className="inline-flex ml-3 group-hover:translate-x-2 transition" />
      </Link>
    </div>
  );
}
