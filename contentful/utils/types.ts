import { Document } from "@contentful/rich-text-types";
import { Entry } from "contentful";
import { TypeBlogSkeleton } from "../types/contentful/types";

export type BlogEntry = Entry<TypeBlogSkeleton, undefined, string>;

export type BlogType = {
  slug: string;
  title: string;
  updatedDate: Date;
  poster: AssetType;
  description: string;
  body: Document;
};

export type AssetType = {
  src: string;
  alt: string;
};
