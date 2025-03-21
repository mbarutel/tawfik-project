import { Blog } from "@/contentful/controllers/blog";
import parserBlogEntry from "@/contentful/utils/parser-blog-entry";
import {
  HomeHeader,
  HomeAbout,
  HomeServices,
  HomeQuotes,
  HomeCta,
  HomeResources,
} from "@/sections";
import { draftMode } from "next/headers";

export async function generateStaticParams() {
  const blogInstance = new Blog({
    preview: false,
    parser: parserBlogEntry,
  });

  return await blogInstance.getLatestBlog();
}

export default async function Home() {
  const draft = await draftMode();

  const blogInstance = new Blog({
    preview: draft.isEnabled,
    parser: parserBlogEntry,
  });

  const blog = await blogInstance.getLatestBlog();

  return (
    <>
      <HomeHeader />
      <HomeAbout />
      <HomeServices />
      <HomeQuotes />
      <HomeCta />
      <HomeResources blog={blog} />
    </>
  );
}
