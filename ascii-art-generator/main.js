import Jimp from "jimp";
import * as fs from "node:fs";

let pictureName = "javascript.png";
let imgUrl = `./img/${pictureName}`;

let maxHeight = 100;
let maxWidth = 100;

let characters = ["@", "#", "O", "o", "*", "°", ".", " "];

Jimp.read(imgUrl, (err, img) => {
  if (err) throw err;

  // calculate picture aspect-ratio for resizing
  let setWidth, setHeight;
  if (img.bitmap.width > img.bitmap.height) {
    setWidth = img.bitmap.width > maxWidth ? maxWidth : img.bitmap.width;
    setHeight = (img.bitmap.height / img.bitmap.width) * setWidth;
  } else {
    setHeight = img.bitmap.height > maxHeight ? maxHeight : img.bitmap.height;
    setWidth = (img.bitmap.width / img.bitmap.height) * setHeight;
  }

  img = img.resize(setWidth, setHeight);
  img = img.grayscale();
  img.write("./img/js.jpg");

  // draw each pixel with characters
  let twoD = [];
  for (let i = 0; i < img.bitmap.height; i++) {
    let row = [];
    for (let j = 0; j < img.bitmap.width; j++) {
      let pixelColor = Jimp.intToRGBA(img.getPixelColor(j, i));
      let colorIntesity = Math.floor((pixelColor.r / 255) * 8);
      row.push(characters[colorIntesity]);
    }
    twoD.push(row.join(" ") + "\n");
  }

  // output
  fs.writeFileSync(`./output/${pictureName.split(".")[0]}.txt`, twoD.join(""));
  console.log(twoD.join(""));
});
