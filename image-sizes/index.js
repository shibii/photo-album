const glob = require("glob");
const sharp = require("sharp");

const { argv } = require("process");

const path = argv[2];

if (!path) {
  console.log("requires path");
  process.exit(1);
}

const sizes = [60, 120, 240, 480, 960];

glob(path, {}, function (err, files) {
  if (err) console.log(err);
  files.forEach((file) => {
    sizes.forEach((size) => {
      sharp(file)
        .webp({ quality: 70 })
        .resize(size)
        .toFile(file.replace(/w1920\.webp/, `w${size}.webp`))
        .catch((err) => console.log(err));
    });
  });
});
