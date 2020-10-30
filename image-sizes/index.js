const glob = require("glob");
const sharp = require("sharp");

const { argv } = require("process");

const path = argv[2];

if (!path) {
  console.log("requires path");
  process.exit(1);
}

const sizes = [120, 240, 480, 720];

glob(path, {}, function (err, files) {
  if (err) console.log(err);
  files.forEach((file) => {
    sizes.forEach((size) => {
      sharp(file)
        .jpeg({ quality: 75, chromaSubsampling: "4:4:4" })
        .resize(size)
        .toFile(file.replace(/1080\.jpg/, `${size}.jpg`))
        .catch((err) => console.log(err));
    });
  });
});
