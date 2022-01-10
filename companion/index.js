import { me } from "companion";
import { settingsStorage } from "settings";
import { outbox } from "file-transfer";
import { Image } from "image";

settingsStorage.onchange = function(evt) {
  if (evt.key === "image") {
    let imageData = JSON.parse(evt.newValue);
    compressAndTransferImage(evt.newValue);
  }
}

function compressAndTransferImage(settingsValue) {
  const imageData = JSON.parse(settingsValue);
  Image.from(imageData.imageUri)
    .then(image =>
      image.export("image/jpeg", {
        background: "#FFFFFF",
        quality: 40
      })
    )
    .then(buffer => outbox.enqueue(`${Date.now()}.jpg`, buffer))
    .then(fileTransfer => {
      console.log(`Enqueued ${fileTransfer.name}`);
    });
}