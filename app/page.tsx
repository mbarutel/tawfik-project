import { Header } from "@/components";
import {
  HomeAbout,
  HomeServices,
  HomeQuotes,
  HomeCta,
  // HomeResources,
  HomeTestimonials,
} from "@/sections";

export default async function Home() {
  return (
    <>
      <Header />
      <HomeAbout />
      <HomeServices />
      <HomeQuotes />
      <HomeCta />
      {/* <HomeResources /> */}
      <HomeTestimonials />
    </>
  );
}
