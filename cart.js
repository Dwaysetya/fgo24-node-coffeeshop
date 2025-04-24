import { rl, menuUtama } from "./index.js";
import checkout from "./checkout.js";
import { getCart } from "./getCart.js";
import numeral from "numeral";

const LihatKeranjang = () => {
    const cart = getCart();

    if (cart.length === 0) {
        console.log("\n🛒 Anda belum memesan apapun.");
        return menuUtama();
    }

    let total = 0;
    const detailCart = cart
        .map((item, index) => {
            total += item.harga;
            return `${index + 1}. ${item.nama} - Rp. ${numeral(
                item.harga
            ).format("0,0")}`;
        })
        .join("\n");

    console.log(
        `\n=========  KERANJANG ANDA =========\n${detailCart}\n\nTotal: Rp. ${numeral(
            total
        ).format("0,0")}\n==================================`
    );
    console.log("1. Checkout");
    console.log("2. Kembali");

    rl.question("Masukkan pilihan: ", (pilihan) => {
        if (pilihan === "1") return checkout();
        else if (pilihan === "2") return menuUtama();
        else {
            console.log("Pilihan tidak valid");
            menuUtama();
        }
    });
};

export default LihatKeranjang;
