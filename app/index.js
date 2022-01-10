import { inbox } from "file-transfer"
import * as fs from "fs";

function processAllFiles() {
  let myImage = document.getElementById("greenpass")
  inbox.onnewfile = () => {
  let fileName;
  do {
    fileName = inbox.nextFile();
    console.log(fileName)
    if (fileName) {
      myImage.href = `/private/data/${fileName}`
    }
  } while (fileName);
};
 

}

processAllFiles();
