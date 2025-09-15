import { addNote } from "./addNote.js";
import { lookNote } from "./lookNote.js";
import { deleteNote } from "./deleteNote.js";
import { exit } from "./exit.js";
import { ask } from "./input.js";

export const menuUtama = async () => {
  console.log("\n=== Menu Catatan ===");
  console.log("1. Tambah Catatan");
  console.log("2. Lihat Catatan");
  console.log("3. Hapus Catatan");
  console.log("4. Exit");

  try {
    const tanya = await ask("Silahkan pilih: "); // wajib await
    const ubah = parseInt(tanya);

    switch (ubah) {
      case 1:
        await addNote();
        break;
      case 2:
        await lookNote();
        break;
      case 3:
        await deleteNote();
        break;
      case 4:
        return exit();
      default:
        console.log("Pilihan tidak valid!");
    }
  } catch (err) {
    console.log("Terjadi error:", err.message);
  }
};
