import { tampungNote } from "./addNote.js";

export const lookNote = () => {
  if (tampungNote.length === 0) {
    console.log("Belum ada catatan");
  } else {
    tampungNote.forEach((item, index) => {
      console.log(`${index + 1} ${item}`);
    });
  }
};
