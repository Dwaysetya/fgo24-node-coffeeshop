import { rl, menuUtama } from "./index.js";
import { getCart, clearCart } from "./getCart.js";
import numeral from "numeral";

function checkout() {
    const cart = getCart();

    if (cart.length === 0) {
        console.log("🛒 Belanjaan anda kosong.");
        return menuUtama();
    }

    let total = 0;
    const items = cart
        .map((item) => {
            total += item.harga;
            return `- ${item.nama} : Rp. ${numeral(item.harga).format("0,0")}`;
        })
        .join("\n");

    console.log("\n========= CHECKOUT ========= ");
    console.log("Belanjaan Anda:");
    console.log(items);
    console.log(`\nTotal belanja: Rp. ${numeral(total).format("0,0")}`);
    console.log("Terima kasih sudah berbelanja 🙏");

    clearCart();
    rl.close(); // Tutup input
}

export default checkout;
