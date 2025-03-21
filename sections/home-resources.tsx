import { BlogType } from "@/contentful/utils/types";
import Image from "next/image";
import Link from "next/link";

type HomeResourcesProps = {
  blog: BlogType;
};
export default function HomeResources({ blog }: HomeResourcesProps) {
  return (
    <section>
      <div className="container">
        <div className="xl:grid grid-cols-3 bg-light/60 xl:bg-light/0 p-4 rounded-md mx-auto">
          <div className="relative h-[450px] w-full xl:w-[120%] col-span-1 xl:my-8">
            <Image
              src={blog.poster.src}
              alt={blog.poster.alt}
              fill
              className="object-cover rounded-t-md xl:rounded-none"
            />
          </div>
          <div className="bg-light text-primary text-center xl:text-right px-6 flex-grow flex flex-col items-center xl:items-end justify-center col-span-2 py-4 rounded-b-md xl:rounded-none">
            <h2 className="section_header italic decoration-light">
              Recommended Reading
            </h2>
            <h3>{blog.title}</h3>
            <p className="w-[min(100%,60ch)] my-5 xl:my-8">
              Contrary to popular belief, Lorem Ipsum popular belief popular
              belief Contrary to popular belief, Lorem Ipsum popular belief{" "}
            </p>
            <Link href="/blogs" className="button border-primary">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
