import {
  ResourcesArticles,
  ResourcesBooks,
  ResourcesPodcasts,
} from "@/sections";

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
