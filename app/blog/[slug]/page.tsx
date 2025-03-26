import { RichTextRenderer } from "@/components";
import { Blog } from "@/contentful/controllers/blog";
import parserBlogEntry from "@/contentful/utils/parser-blog-entry";
import { formatDate } from "@/lib";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const blogInstance = new Blog({
    preview: false,
    parser: parserBlogEntry,
  });

  return await blogInstance.getBlogs();
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const draft = await draftMode();

  const blogInstance = new Blog({
    preview: draft.isEnabled,
    parser: parserBlogEntry,
  });

  const blog = await blogInstance.getBlog(slug);

  if (!blog) {
    return notFound();
  }

  return (
    <article className="mb-16">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <p className="font-light">{formatDate(blog.updatedDate)}</p>
        <h1 className="text-6xl xl:text-8xl font-bold my-16">{blog.title}</h1>
      </div>
      <RichTextRenderer document={blog.body} />
    </article>
  );
}
