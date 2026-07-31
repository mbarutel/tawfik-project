import { Header } from "@/components";
import {
  HomeAbout,
  HomeServices,
  HomeGrounded,
  HomeAudience,
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
      <HomeGrounded />
      <HomeAudience />
      <HomeQuotes />
      <HomeCta />
      {/* <HomeResources /> */}
      <HomeTestimonials />
    </>
  );
}
