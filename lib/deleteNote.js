import { tampungNote } from "./addNote.js";
import { ask } from "./input.js";
import { menuUtama } from "./menuUtama.js";

export const deleteNote = async () => {
  if (tampungNote.length === 0) {
    console.log("Tidak ada catatan, silahkan masukan catatan dulu\n");
    console.log("\n\nKembali");
    const ubah = await ask("Kembali ? (Y/N) ");
    if (ubah.trim().toLowerCase() === "y") {
      await menuUtama();
    } else {
      await deleteNote();
    }
  }

  let stay = true;
  while (stay) {
    // tampilkan daftar catatan
    console.log("\n=== Daftar Catatan ===");
    tampungNote.forEach((item, index) => {
      console.log(`${index + 1} - ${item}`);
    });

    console.log("\n(Hapus Catatan || Kembali)");
    const tanya = await ask("Hapus catatan? (Y/N) ");

    if (tanya.trim().toLowerCase() === "y") {
      const tanya2 = await ask(
        "Silahkan masukan nomor catatan yang ingin dihapus: "
      );
      const idx = parseInt(tanya2) - 1;

      if (!isNaN(idx) && idx >= 0 && idx < tampungNote.length) {
        tampungNote.splice(idx, 1);
        console.log("Catatan Berhasil Dihapus 😎\n");
        stay = false; // keluar setelah berhasil
        deleteNote();
      } else {
        console.log("Nomor tidak valid, silahkan coba lagi!\n");
      }
    } else {
      stay = false; //
      await menuUtama(); //
    }
  }
};
