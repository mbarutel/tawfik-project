import Image from "next/image";

export default function Logo() {
  return (
    <>
      <div className="relative h-8 w-8 sm:h-10 sm:w-10 lg:h-14 lg:w-14">
        <Image
          src="/logo.svg"
          alt="Executive Couching & Consultation Logo"
          fill
        />
      </div>
      <div className="ml-2 hidden sm:block">
        <h5 className="text-xl sm:text-2xl lg:text-4xl">TAWFIK</h5>
        <h4 className="text-base sm:text-lg lg:text-xl font-light -mt-2 lg:-mt-1">
          EXECUTIVE COACHING & CONSULTING
        </h4>
      </div>
    </>
  );
}
