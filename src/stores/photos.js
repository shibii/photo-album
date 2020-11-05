import { default as assets } from "./assets.json";
import { parse } from "date-fns";

// convert timestamp strings to actual date objects
assets.forEach(
  (asset) =>
    (asset.timestamp = parse(
      asset.timestamp,
      "yyyy:MM:dd HH:mm:ss",
      new Date()
    ))
);

const all = assets;

let tags = assets.map((asset) => asset.tags).flat();

var counts = {};
tags.forEach((tag) => {
  counts[tag] = (counts[tag] || 0) + 1;
});
tags = [];
for (const [tag, count] of Object.entries(counts)) {
  tags.push({ tag, count });
}

const byTag = (tag, subset) => {
  let set = subset || assets;
  return set.filter((photo) => photo.tags.includes(tag));
};

export const photos = { all, tags, byTag };
