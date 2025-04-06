import { QuoteEntry, QuoteType } from "./types";

export default function parserQuoteEntry(quoteEntry: QuoteEntry): QuoteType {
  return {
    quote: quoteEntry.fields.quote,
    author: quoteEntry.fields.author,
  };
}
