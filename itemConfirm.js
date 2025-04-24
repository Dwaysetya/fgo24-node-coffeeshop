import { menuUtama, rl } from "./index.js";
import { addToCart } from "./getCart.js";
import numeral from "numeral";
import pilihKategori from "./menuOption.js";

const itemConfirm = (nama, harga) => {
    console.log(
        `\nApakah anda yakin memilih : ${nama} dengan harga Rp.${numeral(
            harga
        ).format("0,0")}\n
        
ya/tidak ? \n`
    );
    rl.question("Masukkan pilihan :", (jawaban) => {
        if (jawaban.toLocaleLowerCase() === "ya") {
            addToCart(nama, harga);
            console.log(`${nama} ✅ telah ditambahkan ke keranjang.`);
        } else if (jawaban.toLocaleLowerCase() === "tidak") {
            console.log("❎ Pembatalan Berhasil");
        } else {
            console.log("❌ Pilihan tidak tersedia");
        }
        pilihKategori();
    });
};

export default itemConfirm;
