import {
  HomeHeader,
  HomeAbout,
  HomeServices,
  HomeQuotes,
  HomeCta,
  HomeResources,
} from "@/sections";

export default async function Home() {
  return (
    <>
      <HomeHeader />
      <HomeAbout />
      <HomeServices />
      <HomeQuotes />
      <HomeCta />
      <HomeResources />
    </>
  );
}
