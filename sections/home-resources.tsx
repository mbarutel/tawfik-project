import Image from "next/image";
import Link from "next/link";

export default function HomeResources() {
  return (
    <section>
      <div className="container">
        <div className="xl:grid grid-cols-3 p-4 rounded-md mx-auto">
          <div className="hidden xl:block relative h-[450px] w-[110%] col-span-1 my-8">
            <Image
              src="/resources.webp"
              alt="Executive Coaching Services Melbourne"
              fill
              className="object-cover"
            />
          </div>
          <div className="bg-light text-primary text-center xl:text-right px-6 flex-grow flex flex-col items-center xl:items-end justify-center col-span-2 py-8 xl:py-4">
            <h2 className="section_header italic decoration-light">
              Recommended Reading
            </h2>
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
