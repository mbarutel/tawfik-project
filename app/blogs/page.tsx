import { BlogType } from "@/contentful/utils/types";

export default function page() {
  return (
    <>
      <section>
        <div className="container">
          <h2 className="section_header decoration-primary">BLOG</h2>
          <h3>books, podcasts, blog posts & everything else</h3>
        </div>
      </section>
    </>
  );
}

function BlogCard({ blog }: { blog: BlogType }) {
  return (
    <div>
      <h1>{blog.title}</h1>
    </div>
  );
}
