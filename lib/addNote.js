import { ask } from "./input.js";
import { menuUtama } from "./menuUtama.js";

export let tampungNote = [];
export let deleteVariable = []; // untuk operasi delete

export const addNote = async () => {
  let stay = true;

  while (stay) {
    const catatan = await ask("Tambah Catatan: ");
    tampungNote.push(catatan);

    // buat salinan di deleteNote
    deleteVariable = [...tampungNote];

    // Tampilkan semua catatan
    console.log("\n=== Daftar Catatan ===");
    tampungNote.forEach((item, index) => {
      console.log(`${index + 1}. ${item}`);
    });

    const tanya2 = await ask("\n\nNambah catatan lagi? (Y/N) ");
    if (tanya2.trim().toLowerCase() === "n") {
      stay = false;
      await menuUtama();
    } else if (tanya2.trim().toLowerCase() !== "y") {
      console.log("Input tidak valid, kembali ke menu catatan.");
    }
  }
};
