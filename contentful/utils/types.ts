import { Document } from "@contentful/rich-text-types";
import { Entry } from "contentful";
import {
  TypeArticleSkeleton,
  TypeBookSkeleton,
  TypePodcastSkeleton,
  TypeQuoteSkeleton,
  TypeTestimonialSkeleton,
} from "../types/contentful/types";

export type ArticleEntry = Entry<TypeArticleSkeleton, undefined, string>;
export type BookEntry = Entry<TypeBookSkeleton, undefined, string>;
export type PodcastEntry = Entry<TypePodcastSkeleton, undefined, string>;
export type QuoteEntry = Entry<TypeQuoteSkeleton, undefined, string>;
export type TestimonialEntry = Entry<
  TypeTestimonialSkeleton,
  undefined,
  string
>;

export type AssetType = {
  src: string;
  alt: string;
};

export type ArticleType = {
  slug: string;
  title: string;
  updatedDate: Date;
  poster: AssetType;
  description: string;
  body: Document;
};

export type BookType = {
  title: string;
  author: string;
  poster: AssetType;
  description: string;
};

export type PodcastType = {
  slug: string;
  title: string;
  updatedDate: Date;
  poster: AssetType;
  link: string;
  description: string;
};

export type QuoteType = {
  quote: string;
  author: string;
};

export type TestimonialType = {
  name: string;
  updatedDate: Date;
  position: string;
  body: string;
};
