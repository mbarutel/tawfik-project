import { Variant } from "@/lib/enums";
import Link from "next/link";

export type ButtonProps = {
  text: string;
  href: string;
  variant: Variant;
};

export default function Button(props: ButtonProps) {
  return (
    <Link
      href={props.href}
      className="xl:text-lg 2xl:text-xl px-4 py-1 border-1 uppercase inline-block"
    >
      {props.text}
    </Link>
  );
}
