import { TypePodcastSkeleton } from "../types/contentful/types";
import { ContentfulClientApi } from "contentful";
import contentfulClient from "../utils/client";
import { PodcastType } from "../utils/types";

export class Podcast {
  private client: ContentfulClientApi<undefined>;
  private parser: Function;

  constructor({ preview, parser }: { preview: boolean; parser: Function }) {
    this.client = contentfulClient({ preview });
    this.parser = parser;
  }

  public async getPodcasts(): Promise<PodcastType[]> {
    const podcastResult = await this.client.getEntries<TypePodcastSkeleton>({
      content_type: "podcast",
      include: 2,
      order: ["-sys.createdAt", "-sys.updatedAt"],
    });

    return podcastResult.items.map((podcastEntry) => this.parser(podcastEntry));
  }
}
