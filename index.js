const Jimp = require("jimp");
const fs = require("fs");

console.log("Welcome to AFK's awesome bmp to png converter\n");

const args = process.argv.slice(2);
if (args === null) {
  console.log("Missing camera type");
  return;
}

const cameraType = args[0];
const bmpFolder = args[1] !== undefined ? args[1] + "bmp" : "bmp";
const pngFolder = args[1] !== undefined ? args[1] + "png" : "png";

const date = new Date();
const currentDay = String(date.getDate()).padStart(2, "0");
const currentMonth = String(date.getMonth() + 1).padStart(2, "0");
const currentYear = date.getFullYear();
const currentDate = `${currentDay}_${currentMonth}_${currentYear}`;

console.log(`${args[0]}'s images from bmp to png converting are in progress`);

const jimpReader = (file, index) => {
  return new Promise((resolve) => {
    Jimp.read(`${bmpFolder}/${file}`, function (err, image) {
      if (err) {
        console.log(err);
      } else {
        image.write(
          `${pngFolder}/${cameraType}_${currentDate}_${(1000 + index)
            .toString()
            .slice(1)}.png`,
          () => {
            resolve(index);
          }
        );
      }
    });
  });
};

const convert = async (files) => {
  let index = 1;
  let counter = 1;
  return new Promise((res, rej) => {
    files.forEach((file) => {
      jimpReader(file, index).then(() => {
        process.stdout.write(`Image processed ${counter}/${files.length} \r`);
        if (files.length === counter) {
          process.stdout.write("\n");
          res("Converting succeeded");
        }
        counter++;
      });
      index++;
    });
  });
};

const fileread = new Promise((res) => {
  const bmpFiles = [];
  fs.readdir(bmpFolder, (err, files) => {
    files.forEach((file) => {
      if (file.endsWith(".bmp")) {
        bmpFiles.push(file);
      }
    });
    res(bmpFiles);
  });
});

fileread.then((res) => {
  convert(res).then((res) => {
    console.log(res);
  });
});
