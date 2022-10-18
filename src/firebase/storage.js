import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { urlApi } from "../config";


export const fbStorage = (file, gateway) => {
  const storage = getStorage();

  // Create the file metadata
  /** @type {any} */
  const metadata = {
    contentType: file.type,
  };

  // Upload file and metadata to the object 'images/mountains.jpg'
  const storageRef = ref(storage, file.name);
  const uploadTask = uploadBytesResumable(storageRef, file, metadata);

  // Listen for state changes, errors, and completion of the upload.
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
      switch (snapshot.state) {
        case "paused":
          console.log("Upload is paused");
          break;
        case "running":
          console.log("Upload is running");
          break;
      }
    },
    (error) => {
      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case "storage/unauthorized":
          // User doesn't have permission to access the object
          break;
        case "storage/canceled":
          // User canceled the upload
          break;

        // ...

        case "storage/unknown":
          // Unknown error occurred, inspect error.serverResponse
          break;
      }
    },
    async () => {
      // Upload completed successfully, now we can get the download URL
      let downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        if (downloadURL) {
          gateway.img = downloadURL
        await fetch(`${urlApi}/gateway/updategateway`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(gateway),
        });
      }
    }
  );
};
