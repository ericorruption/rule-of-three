import { exec } from "node:child_process";
import fs from "node:fs";

// folders with underscore are prohibited in google chrome extensions
exec("mv dist/_expo/static dist/ && rm -r dist/_expo");
exec("cp manifest.json dist/");

const index = fs.readFileSync("dist/index.html", "utf8");
const indexWithClearBase = index.replace(/\/_expo/g, "");

// Accounts for app.json's expo.experiments.baseUrl, necessary for web deployment
const indexWithStaticFolderOnRoot = indexWithClearBase.replace(
  /\/rule-of-three/g,
  ""
);

const html = indexWithStaticFolderOnRoot;

fs.writeFileSync(
  "dist/index.html",
  html.replace(
    '<html lang="en">',
    '<html lang="en" style="min-width: 287px; min-height: 168px">'
  )
);
