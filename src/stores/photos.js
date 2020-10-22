import { default as assets } from "./assets.json";

let index = 0;
const last = assets.length - 1;

export const photos = (batchSize) => {
  const start = index;
  const end = Math.min(start + batchSize, last);
  console.log("start:" + start + " end:" + end);
  index += batchSize;
  return new Promise((resolve, reject) => {
    if (start <= last) {
      resolve(assets.slice(start, end));
    } else {
      reject();
    }
  });
};
