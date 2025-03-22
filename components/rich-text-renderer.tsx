import React, { ReactNode } from "react";
import { Block, BLOCKS, Inline, MARKS } from "@contentful/rich-text-types";
import { Document as RichTextDocument } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function RichTextRenderer({
  document,
}: {
  document: RichTextDocument | null;
}) {
  if (!document) {
    return null;
  }

  const options = {
    renderMark: {
      [MARKS.BOLD]: (children: ReactNode) => (
        <span className="font-bold">{children}</span>
      ),
      [MARKS.ITALIC]: (children: ReactNode) => (
        <span className="italic">{children}</span>
      ),
      [MARKS.UNDERLINE]: (children: ReactNode) => (
        <span className="underline">{children}</span>
      ),
    },
    renderNode: {
      [BLOCKS.HEADING_1]: (_node: Block | Inline, children: ReactNode) => (
        <h1 className="text-4xl font-bold mt-12 mb-6 leading-tight">
          {children}
        </h1>
      ),
      [BLOCKS.HEADING_2]: (_node: Block | Inline, children: ReactNode) => (
        <h2 className="text-3xl font-semibold mt-10 mb-5 leading-snug">
          {children}
        </h2>
      ),
      [BLOCKS.HEADING_3]: (_node: Block | Inline, children: ReactNode) => (
        <h3 className="text-2xl font-semibold mt-8 mb-4 leading-snug">
          {children}
        </h3>
      ),
      [BLOCKS.HEADING_4]: (_node: Block | Inline, children: ReactNode) => (
        <h4 className="text-xl font-medium mt-6 mb-3">{children}</h4>
      ),
      [BLOCKS.HEADING_5]: (_node: Block | Inline, children: ReactNode) => (
        <h5 className="text-lg font-medium mt-5 mb-2">{children}</h5>
      ),
      [BLOCKS.HEADING_6]: (_node: Block | Inline, children: ReactNode) => (
        <h6 className="text-base font-medium mt-4 mb-2 text-gray-700">
          {children}
        </h6>
      ),
      [BLOCKS.PARAGRAPH]: (_node: Block | Inline, children: ReactNode) => (
        <p className="text-base leading-relaxed mb-6 text-gray-800">
          {children}
        </p>
      ),
      [BLOCKS.UL_LIST]: (_node: Block | Inline, children: ReactNode) => (
        <ul className="list-disc list-inside mb-6">{children}</ul>
      ),
      [BLOCKS.LIST_ITEM]: (_node: Block | Inline, children: ReactNode) => (
        <li className="mb-2">{children}</li>
      ),
      [BLOCKS.QUOTE]: (_node: Block | Inline, children: ReactNode) => (
        <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 bg-gray-50 rounded-md my-6 py-3">
          {children}
        </blockquote>
      ),
    },
  };

  return (
    <div className="max-w-3xl mx-auto px-4">
      {documentToReactComponents(document, options)}
    </div>
  );
}
