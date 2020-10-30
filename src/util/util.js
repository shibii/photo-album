export const srcstr = (photo) => {
  if (photo) return `photos/${photo.img}/w120.jpg`;
};

export const srcsetstr = (photo) => {
  if (photo)
    return `photos/${photo.img}/w120.jpg 120w, photos/${photo.img}/w240.jpg 240w, photos/${photo.img}/w480.jpg 480w, photos/${photo.img}/w720.jpg 720w, photos/${photo.img}/w1080.jpg 1080w`;
};
