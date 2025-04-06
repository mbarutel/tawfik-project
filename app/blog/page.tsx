import { BlogArticles, BlogBooks } from "@/sections";

export default async function page() {
  return (
    <section>
      <div className="container">
        <h2 className="section_header decoration-primary text-center">BLOG</h2>
        <h3 className="text-3xl text-center mb-12">
          books, podcasts, blog posts & everything else
        </h3>
        <BlogArticles />
        <hr className="my-12" />
        <BlogBooks />
      </div>
    </section>
  );
}
