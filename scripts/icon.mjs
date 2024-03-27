import sharp from "sharp";

const image = process.argv[2];

// const browserSizes = [180];
// const windowsSizes = [270];
// const PWAsizes = [192, 512];

// TODO read from manifest.json
const extensionSizes = [16, 24, 32, 48, 128];

const sizes = [
  ...extensionSizes,
  //   ...browserSizes,
  //   ...windowsSizes,
  //   ...PWAsizes
];

const sharpImage = sharp(image);

sizes.forEach((size) =>
  sharpImage.resize(size).toFile(`./dist/assets/icon/${size}.png`, (err) => {
    if (!err) {
      return;
    }
    console.error(err);
  })
);
