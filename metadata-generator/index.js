const fs = require("fs");
const { argv } = require("process");
const ExifReader = require("exifreader");

const path = argv[2];
const filename = argv[3];

if (!path || !filename) {
  console.log("requires path and filename as an argument");
  process.exit(1);
}

let folders = fs
  .readdirSync(path, { withFileTypes: true })
  .filter((e) => e.isDirectory())
  .map((e) => e.name);

folders.forEach((folder) => {
  try {
    const img = fs.readFileSync(`${path}/${folder}/${filename}`);
    let metadata = ExifReader.load(img);
    metadata = {
      height: metadata["Image Height"].value,
      width: metadata["Image Width"].value,
      camera: metadata["Model"].description,
      software: metadata["Software"].description,
      artist: metadata["Artist"].description,
      timestamp: metadata["DateTimeOriginal"].value,
      lens: metadata["LensModel"].description,
      tags: metadata["subject"].value.map((v) => v.value),
    };
    fs.writeFileSync(
      `${path}/${folder}/metadata.json`,
      JSON.stringify(metadata)
    );
  } catch (error) {
    console.log(`error processing file ${path}/${folder}/${filename}`);
    console.log(error);
  }
});
