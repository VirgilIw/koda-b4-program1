import { tampungNote } from "./addNote.js";
import { ask } from "./input.js";
import { menuUtama } from "./menuUtama.js";

// let tampungCatatan = [];

export const lookNote = async () => {
  let stay = true;
  while (stay) {
    console.log("---------RIWAYAT CATATAN---------");
    if (tampungNote.length === 0) {
      console.log("Belum ada catatan");
    } else {
      tampungNote.forEach((item, index) => {
        console.log(`${index + 1} ${item}`);
      });
    }
    console.log("(Y) kembali");
    const tanya = await ask("Kembali? (Y/N)");
    if (tanya.trim().toLowerCase() === "y") {
      stay = false;
      await menuUtama();
    } else {
      console.log("kembali Ke riwayat catatan");
    }
  }
};
