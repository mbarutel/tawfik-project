import Image from "next/image";
import Link from "next/link";

export default function HomeResources() {
  return (
    <section>
      <div className="container">
        <div className="xl:grid grid-cols-3 p-4 rounded-md mx-auto max-w-7xl">
          <div className="hidden xl:block relative h-[450px] w-[110%] col-span-1 my-8">
            <Image
              src="/resources.webp"
              alt="Executive Coaching Services Melbourne"
              fill
              className="object-cover"
            />
          </div>
          <div className="bg-light text-primary text-center xl:text-left px-6 xl:px-32 flex-grow flex flex-col items-center xl:items-start justify-center col-span-2 py-8 xl:py-4">
            <h2 className="text-4xl italic decoration-light">
              RECOMMENDED READING
            </h2>
            <p className="w-[min(100%,60ch)] my-5">
              Explore articles, books, podcasts, and insights that inspire
              better leadership. This is a space to discover new ideas, build
              your thinking, and stay up to date with the trends shaping
              courageous, resilient, and effective leadership. Whether you’re
              deepening your own practice or supporting others to grow, these
              resources are here to guide and challenge you.
            </p>
            <Link href="/resources" className="button border-primary">
              Resources
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
