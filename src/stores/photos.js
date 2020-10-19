import { default as assets } from "./assets.json";

let idx = 0;
let max = assets.length;
export const photos = (size) => {
  const end = idx + size > max ? max : idx + size;
  let batch = idx >= max ? null : assets.slice(idx, end);
  idx = idx + size > assets.length ? idx + size - assets.length : idx + size;
  return new Promise((resolve, reject) => {
    resolve(batch);
  });
};
