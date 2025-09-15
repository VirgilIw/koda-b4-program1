import { tampungNote } from "./addNote.js";
import { ask } from "./input.js";
import { menuUtama } from "./menuUtama.js";

export const deleteNote = async () => {
  tampungNote.forEach((item, index) => {
    console.log(`${index + 1} - ${item}`);
  });
  console.log("Hapus Catatan || Kembali");
  const tanya = await ask("Hapus catatan atau Kembali? (Y/N) ");
  if (tanya.trim().toLowerCase() === "y") {
    const tanya2 = await ask("silahkan masukan catatan yang ingin dihapus");
    const idx = parseInt(tanya2) - 1;

    if (!isNaN(idx) && idx >= 0 && idx < tampungNote.length) {
      tampungNote.splice(idx, 1);
      console.log("Catatan Berhasil Dihapus 😎");
    } else {
      console.log("nomor tidak Valid");
    }
  } else {
    await menuUtama();
  }
};
