import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeTestimonialFields {
    name: EntryFieldTypes.Symbol;
    position?: EntryFieldTypes.Symbol;
    testimony: EntryFieldTypes.Text;
}

export type TypeTestimonialSkeleton = EntrySkeletonType<TypeTestimonialFields, "testimonial">;
export type TypeTestimonial<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeTestimonialSkeleton, Modifiers, Locales>;
