import { TypeTestimonialSkeleton } from "../types/contentful/types";
import { ContentfulClientApi } from "contentful";
import contentfulClient from "../utils/client";
import { TestimonialType } from "../utils/types";

export class Testimonial {
  private client: ContentfulClientApi<undefined>;
  private parser: Function;

  constructor({ preview, parser }: { preview: boolean; parser: Function }) {
    this.client = contentfulClient({ preview });
    this.parser = parser;
  }

  public async getTestimonials(): Promise<TestimonialType[]> {
    const testimonialResult =
      await this.client.getEntries<TypeTestimonialSkeleton>({
        content_type: "testimonial",
        include: 2,
        order: ["sys.createdAt", "sys.updatedAt"],
      });

    return testimonialResult.items.map((testimonialEntry) =>
      this.parser(testimonialEntry),
    );
  }
}
