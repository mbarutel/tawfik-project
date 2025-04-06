import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypePodcastFields {
    title: EntryFieldTypes.Symbol;
    link: EntryFieldTypes.Symbol;
    poster: EntryFieldTypes.AssetLink;
    description: EntryFieldTypes.Text;
}

export type TypePodcastSkeleton = EntrySkeletonType<TypePodcastFields, "podcast">;
export type TypePodcast<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypePodcastSkeleton, Modifiers, Locales>;
