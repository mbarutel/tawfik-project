import Image from "next/image";
import Link from "next/link";

export default function HomeResources() {
  return (
    <section>
      <div className="container grid grid-cols-3">
        <div className="relative h-[450px] w-[120%] col-span-1 my-8">
          <Image
            src="/resources.webp"
            alt="Executive Coaching & Consulting Services Melbourne"
            fill
            className="object-cover"
          />
        </div>
        <div className="bg-light text-primary text-right px-6 flex-grow flex flex-col items-end justify-center col-span-2">
          <h2 className="section_header italic decoration-light">
            Recommended Reading
          </h2>
          <p className="w-[60ch] my-8">
            Contrary to popular belief, Lorem Ipsum popular belief popular
            belief Contrary to popular belief, Lorem Ipsum popular belief{" "}
          </p>
          <Link href="#" className="button border-primary">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
