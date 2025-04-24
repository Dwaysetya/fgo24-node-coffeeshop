import fetchData from "./fetch-data.js";
import numeral from "numeral";
import { rl } from "./index.js";
import pilihKategori from "./menuOption.js";
import itemConfirm from "./itemConfirm.js";

const drinkMenu = async () => {
    try {
        const data = await fetchData();
        const menu = data.Minuman;

        const menuFormatted = menu
            .map(
                (item, index) =>
                    `${index + 1}. ${item.nama.padEnd(25)} Rp. ${numeral(
                        item.harga
                    ).format("0,0")}`
            )
            .join("\n");

        console.log(
            `\n============ PILIH MINUMAN ===========1\n\n${menuFormatted}\n\n0. kembali ke kategori\n`
        );
        rl.question("Masukkan pilihan :", (input) => {
            const pilih = parseInt(input);
            if (pilih === 0) return pilihKategori();
            if (pilih > 0 && pilih <= menu.length) {
                const item = menu[pilih - 1];
                itemConfirm(item.nama, item.harga);
            } else {
                console.log("Pilihan tidak valid");
                pilihKategori;
            }
        });
    } catch (error) {
        console.error("Gagal memuat menu:", error.message);
    }
};

export default drinkMenu;
