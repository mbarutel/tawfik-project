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
          <div className="bg-light/80 text-primary text-center xl:text-right px-12 flex-grow flex flex-col items-center xl:items-end justify-center col-span-2 py-8 xl:py-4">
            <h2 className="text-4xl italic decoration-light">
              RECOMMENDED READING
            </h2>
            <p className="w-[min(100%,60ch)] my-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
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
