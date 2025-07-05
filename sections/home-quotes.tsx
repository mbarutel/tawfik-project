import { QuotesCarousel } from "@/components";
import { Quote } from "@/contentful/controllers/quote";
import parserQuoteEntry from "@/contentful/utils/parser-quote-entry";
import { draftMode } from "next/headers";

export async function generateStaticParams() {
  const quoteInstance = new Quote({
    preview: false,
    parser: parserQuoteEntry,
  });

  return await quoteInstance.getQuotes();
}

export default async function HomeQuotes() {
  const draft = await draftMode();

  const quoteInstance = new Quote({
    preview: draft.isEnabled,
    parser: parserQuoteEntry,
  });

  const quotes = await quoteInstance.getQuotes();

  if (quotes.length === 0) {
    return null;
  }

  return (
    <section className="bg-[url('/quotes-bg.webp')] bg-cover">
      <div className="container mx-auto py-14">
        <QuotesCarousel quotes={quotes} />
      </div>
    </section>
  );
}
