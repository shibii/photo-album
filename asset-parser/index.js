const { readdirSync, writeFileSync } = require("fs");
const { argv } = require("process");

const path = argv[2];
const outpath = argv[3];

if (!path || !outpath) {
  console.log("requires path and outpath as arguments");
  process.exit(1);
}

let folders = readdirSync(path, { withFileTypes: true })
  .filter((e) => e.isDirectory())
  .map((e) => e.name);

const data = JSON.stringify(folders);
writeFileSync(outpath, data);
