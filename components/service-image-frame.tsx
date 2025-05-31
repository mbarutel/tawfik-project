import Image from "next/image";

export default function ServiceImageFrame({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="relative w-[90%] 2xl:w-3/4 group-odd:order-2 group-even:mr-auto group-odd:ml-auto hidden lg:block">
      <div className="bg-secondary absolute bottom-0 group-odd:right-0 group-even:left-0 group-odd:translate-x-3 group-even:-translate-x-3 translate-y-3 w-[80%] h-[90%]" />
      <div className="relative h-[450px]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}
