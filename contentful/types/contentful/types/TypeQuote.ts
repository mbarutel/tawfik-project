import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeQuoteFields {
    quote: EntryFieldTypes.Text;
    author: EntryFieldTypes.Symbol;
}

export type TypeQuoteSkeleton = EntrySkeletonType<TypeQuoteFields, "quote">;
export type TypeQuote<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeQuoteSkeleton, Modifiers, Locales>;
