import { ask } from "./input.js";
import { menuUtama } from "./menuUtama.js";

let tampungCatatan = [];

export const addNote = async () => {
  const catatan = await ask("Tambah Catatan: ");
  tampungCatatan.push(catatan);

  tampungCatatan.forEach((item, index) => {
    console.log(`${index + 1}. ${item}`);
  });
  const tanya2 = await ask("Nambah catatan lagi? (Y/N)");
  if (tanya2.trim().toLowerCase() === "y") {
    addNote();
  } else if (tanya2.trim().toLowerCase() === "n") {
    menuUtama();
  }
};
