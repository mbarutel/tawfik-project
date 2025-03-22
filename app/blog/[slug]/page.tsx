import { RichTextRenderer } from "@/components";
import { Blog } from "@/contentful/controllers/blog";
import parserBlogEntry from "@/contentful/utils/parser-blog-entry";
import { formatDate } from "@/lib";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";

export default async function page({ params }: { params: { slug: string } }) {
  const draft = await draftMode();

  const blogInstance = new Blog({
    preview: draft.isEnabled,
    parser: parserBlogEntry,
  });

  const blog = await blogInstance.getBlog(params.slug);

  if (!blog) {
    return notFound();
  }

  return (
    <article>
      <div className="max-w-3xl mx-auto px-4 text-center">
        <p>{formatDate(blog.updatedDate)}</p>
        <h1 className="text-6xl">{blog.title}</h1>
      </div>
      <RichTextRenderer document={blog.body} />
    </article>
  );
}
