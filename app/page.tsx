import { Header } from "@/components";
import {
  HomeAbout,
  HomeServices,
  HomeGroundedAudience,
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
      <HomeGroundedAudience />
      <HomeQuotes />
      <HomeCta />
      {/* <HomeResources /> */}
      <HomeTestimonials />
    </>
  );
}
