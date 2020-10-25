import { default as assets } from "./assets.json.proxy.js";

let index = 0;
export const photos = (batchSize) => {
  const start = index;
  const end = Math.min(start + batchSize, assets.length);
  index += batchSize;
  return new Promise((resolve, reject) => {
    if (start < assets.length) {
      resolve(assets.slice(start, end));
    } else {
      reject();
    }
  });
};
