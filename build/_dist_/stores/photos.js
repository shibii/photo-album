import { default as assets } from "./assets.json.proxy.js";
import { parse, format } from "../../web_modules/date-fns.js";

// convert timestamp strings to actual date objects
assets.forEach(
  (asset) =>
    (asset.timestamp = parse(
      asset.timestamp,
      "yyyy:MM:dd HH:mm:ss",
      new Date()
    ))
);

const dateToStr = (date) => {
  return format(date, "LLL y");
};

const generateTags = () => {
  let tags = assets.map((asset) => asset.tags).flat();

  let counts = {};
  tags.forEach((tag) => {
    counts[tag] = (counts[tag] || 0) + 1;
  });
  tags = [];
  for (const [tag, count] of Object.entries(counts)) {
    tags.push({ tag, count });
  }
  return tags;
};

const generateMonths = () => {
  let months = assets.map((asset) => dateToStr(asset.timestamp));
  let counts = {};
  months.forEach((month) => {
    counts[month] = (counts[month] || 0) + 1;
  });
  months = [];
  for (const [month, count] of Object.entries(counts)) {
    months.push({ month, count });
  }
  return months;
};

const byTag = (tag, subset) => {
  let set = subset || assets;
  return set.filter((photo) => photo.tags.includes(tag));
};

const byMonth = (month, subset) => {
  let set = subset || assets;
  return set.filter((photo) => dateToStr(photo.timestamp) === month);
};

const all = assets;
const tags = generateTags();
const months = generateMonths();

export const photos = { all, tags, months, byTag, byMonth };
