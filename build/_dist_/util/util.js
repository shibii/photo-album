export const srcstr = (photo) => {
  if (photo) return `photos/${photo.img}/120w.jpg`;
};

export const srcsetstr = (photo) => {
  if (photo)
    return `photos/${photo.img}/120w.jpg 120w, photos/${photo.img}/240w.jpg 240w, photos/${photo.img}/480w.jpg 480w, photos/${photo.img}/720w.jpg 720w, photos/${photo.img}/1080w.jpg 1080w`;
};
