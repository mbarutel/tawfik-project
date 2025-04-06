import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeBookFields {
    title: EntryFieldTypes.Symbol;
    author: EntryFieldTypes.Symbol;
    poster: EntryFieldTypes.AssetLink;
    description: EntryFieldTypes.Text;
}

export type TypeBookSkeleton = EntrySkeletonType<TypeBookFields, "book">;
export type TypeBook<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeBookSkeleton, Modifiers, Locales>;
