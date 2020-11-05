const fs = require("fs");
const { argv } = require("process");

const path = argv[2];
const outpath = argv[3];

if (!path || !outpath) {
  console.log("requires path and outpath as arguments");
  process.exit(1);
}

let folders = fs
  .readdirSync(path, { withFileTypes: true })
  .filter((e) => e.isDirectory())
  .map((e) => e.name);

let assets = [];
folders = folders.map((folder) => {
  let metadata = fs.readFileSync(`${path}/${folder}/metadata.json`);
  metadata = JSON.parse(metadata);
  assets.push({ img: folder, ...metadata });
});
assets = assets.reverse();

fs.writeFileSync(outpath, JSON.stringify(assets));
