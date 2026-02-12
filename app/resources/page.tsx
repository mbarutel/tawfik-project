import {
  ResourcesArticles,
  ResourcesBooks,
  ResourcesPodcasts,
} from "@/sections";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Leadership Resources: Articles, Podcasts & Books | Tawfik Executive Coaching & Consulting",
  description:
    "Explore our curated collection of leadership articles, executive coaching podcasts, and recommended books to support your leadership development journey.",
  openGraph: {
    title: "Resources | Tawfik Executive Coaching & Consulting",
    description:
      "Articles, podcasts, and books on leadership development and executive coaching.",
    url: "https://tawfikecc.com.au/resources",
  },
};

export default async function page() {
  return (
    <section>
      <div className="container">
        <h2 className="section_header decoration-primary text-center">
          Resources
        </h2>
        <h3 className="text-3xl italic text-center mb-12">
          articles, podcasts & books
        </h3>
        <ResourcesArticles />
        <hr className="my-12" />
        <ResourcesPodcasts />
        <hr className="my-12" />
        <ResourcesBooks />
      </div>
    </section>
  );
}
