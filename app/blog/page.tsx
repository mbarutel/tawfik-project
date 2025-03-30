import { Blog } from "@/contentful/controllers/blog";
import parserBlogEntry from "@/contentful/utils/parser-blog-entry";
import { BlogType } from "@/contentful/utils/types";
import { formatDate } from "@/lib";
import { draftMode } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { BsArrowRight } from "react-icons/bs";

export async function generateStaticParams() {
  const blogInstance = new Blog({
    preview: false,
    parser: parserBlogEntry,
  });

  return await blogInstance.getBlogs();
}

export default async function page() {
  const draft = await draftMode();

  const blogInstance = new Blog({
    preview: draft.isEnabled,
    parser: parserBlogEntry,
  });

  const blogs = await blogInstance.getBlogs();

  return (
    <section>
      <div className="container">
        <h2 className="section_header decoration-primary text-center">BLOG</h2>
        <h3 className="text-3xl text-center mb-12">
          books, podcasts, blog posts & everything else
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-12 gap-x-16 lg:gap-x-22 2xl:gap-x-32">
          {blogs.map((blog) => (
            <Fragment key={blog.slug}>
              <BlogCard blog={blog} />
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogCard({ blog }: { blog: BlogType }) {
  return (
    <div className="flex flex-col">
      <Link href={`/blog/${blog.slug}`} className="relative h-[350px] w-full">
        <Image src={blog.poster.src} alt={blog.poster.alt} fill />
      </Link>
      <p className="my-4 text-2xl text-justify">
        {formatDate(blog.updatedDate)}
      </p>
      <Link href={`/blog/${blog.slug}`}>
        <h2 className="text-4xl font-bold mb-3 hover:underline">
          {blog.title}
        </h2>
      </Link>
      <p className="text-justify">{blog.description}</p>
      <Link
        href={`/blog/${blog.slug}`}
        className="text-secondary text-2xl mt-6 group"
      >
        Read Article
        <BsArrowRight className="inline-flex ml-3 group-hover:translate-x-2 transition" />
      </Link>
    </div>
  );
}
