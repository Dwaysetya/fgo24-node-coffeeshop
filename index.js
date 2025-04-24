import readline from "readline";
import pilihKategori from "./menuOption.js";
import LihatKeranjang from "./cart.js";
import checkout from "./checkout.js";

export const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

export function menuUtama() {
    console.log(`\n======== MENU UTAMA =======

1. Pilih Kategori
2. Lihat Keranjang
3. Checkout
`);

    rl.question("Masukkan pilihan: ", (pilihan) => {
        switch (pilihan) {
            case "1":
                console.clear();
                pilihKategori();
                break;
            case "2":
                console.clear();
                LihatKeranjang();
                break;
            case "3":
                console.clear();
                checkout();
                break;
            default:
                console.log("❌ Pilihan tidak valid.");
                menuUtama();
        }
    });
}

menuUtama();
