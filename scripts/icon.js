const sharp = require("sharp");

const image = process.argv[2];

const browserSizes = [180];
const PWAsizes = [192, 512];

const extensionSizes = [
  16,
  19,
  20,
  25,
  30,
  32,
  35,
  38,
  40,
  44,
  48,
  50,
  128,
  150,
  176
];

const sizes = [...extensionSizes, ...browserSizes, ...PWAsizes];

const resize = size =>
  sharp(image)
    .resize(size)
    .toFile(`${size}.png`, err => console.error);

sizes.forEach(resize);
