const sharp = require("sharp");

const image = process.argv[2];
const sizes = [
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
  176,
  512
];

const resize = size =>
  sharp(image)
    .resize(size)
    .toFile(`${size}.png`, err => console.error);

sizes.forEach(resize);
