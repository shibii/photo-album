export const src = (photo) => {
  return `photos/${photo}/w60.webp`;
};

export const srcset = (photo) => {
  return `photos/${photo}/w60.webp 60w, photos/${photo}/w120.webp 120w, photos/${photo}/w240.webp 240w, photos/${photo}/w480.webp 480w, photos/${photo}/w960.webp 960w, photos/${photo}/w1920.webp 1920w`;
};
