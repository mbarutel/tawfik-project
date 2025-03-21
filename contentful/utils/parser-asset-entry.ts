import { Asset, UnresolvedLink } from "contentful";
import { AssetType } from "./types";

export default function parserAssetEntry({
  asset,
}: {
  asset: UnresolvedLink<"Asset"> | Asset<undefined, string> | undefined;
}): AssetType {
  if (!asset || !("fields" in asset)) {
    return {
      src: "/resources.webp",
      alt: "Executive Consultation Australia",
    };
  }

  return {
    src: `https:${asset.fields.file?.url}` || "",
    alt: asset.fields.title || "",
  };
}
