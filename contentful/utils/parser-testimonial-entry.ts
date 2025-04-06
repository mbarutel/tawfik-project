import { TestimonialEntry, TestimonialType } from "./types";

export default function parserTestimonialEntry(
  testimonialEntry: TestimonialEntry,
): TestimonialType {
  return {
    name: testimonialEntry.fields.name,
    position: testimonialEntry.fields.position
      ? testimonialEntry.fields.position
      : null,
    testimony: testimonialEntry.fields.testimony,
  };
}
