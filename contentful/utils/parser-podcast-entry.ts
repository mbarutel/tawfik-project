import { PodcastEntry, PodcastType } from "./types";
import parserAssetEntry from "./parser-asset-entry";

export default function parserPodcastEntry(
  podcastEntry: PodcastEntry,
): PodcastType {
  return {
    title: podcastEntry.fields.title,
    link: podcastEntry.fields.link,
    poster: parserAssetEntry({ asset: podcastEntry.fields.poster }),
    description: podcastEntry.fields.description,
  };
}
