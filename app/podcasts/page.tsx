import { Podcast } from "@/contentful/controllers/podcast";
import parserPodcastEntry from "@/contentful/utils/parser-podcast-entry";
import { PodcastType } from "@/contentful/utils/types";
import { draftMode } from "next/headers";
import { BsArrowRight } from "react-icons/bs";
import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";

export async function generateStaticParams() {
  const podcastInstance = new Podcast({
    preview: false,
    parser: parserPodcastEntry,
  });

  return await podcastInstance.getPodcasts();
}

export default async function page() {
  const draft = await draftMode();

  const podcastInstance = new Podcast({
    preview: draft.isEnabled,
    parser: parserPodcastEntry,
  });

  const podcasts = await podcastInstance.getPodcasts();

  return (
    <section>
      <div className="container mx-auto flex flex-col items-center relative">
        <h2 className="blog_section_header">Podcasts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-12 gap-x-16 lg:gap-x-22 2xl:gap-x-32">
          {podcasts.map((podcast, index) => (
            <Fragment key={index}>
              <PodcastCard podcast={podcast} />
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

function PodcastCard({ podcast }: { podcast: PodcastType }) {
  return (
    <div className="flex flex-col">
      <Link
        href={podcast.link}
        target="_blank"
        rel="noreferrer"
        className="relative h-[350px] w-full overflow-hidden"
      >
        <Image
          src={podcast.poster.src}
          alt={podcast.poster.alt}
          fill
          className="object-cover object-center hover:scale-110 transition"
        />
      </Link>
      <Link href={podcast.link} target="_blank" rel="noreferrer">
        <h2 className="text-4xl font-bold hover:underline my-4">
          {podcast.title}
        </h2>
      </Link>
      <p className="text-justify mb-6">{podcast.description}</p>
      <Link
        href={podcast.link}
        target="_blank"
        rel="noreferrer"
        className="text-secondary text-2xl mt-auto group"
      >
        Listen to the podcast
        <BsArrowRight className="inline-flex ml-3 group-hover:translate-x-2 transition" />
      </Link>
    </div>
  );
}
