import fetchData from "./fetch-data.js";
import numeral from "numeral";
import { rl } from "./index.js";
import pilihKategori from "./menuOption.js";
import itemConfirm from "./itemConfirm.js";

const snackMenu = async () => {
    try {
        const data = await fetchData();
        const menu = data.Snack;

        const menuFormatted = menu
            .map(
                (item, index) =>
                    `${index + 1}. ${item.nama.padEnd(25)} Rp. ${numeral(
                        item.harga
                    ).format("0,0")}`
            )
            .join("\n");

        console.log(
            `\n======= PILIH SNACK =======\n\n${menuFormatted}\n\n0. kembali ke kategori\n`
        );
        rl.question("masukkan pilihan :", (input) => {
            const pilih = parseInt(input);
            if (pilih === 0) return pilihKategori();
            if (pilih > 0 && pilih <= menu.length) {
                const item = menu[pilih - 1];
                itemConfirm(item.nama, item.harga);
            } else {
                console.log("pilihan tidak valid");
                pilihKategori;
            }
        });
    } catch (error) {
        console.error("Gagal memuat menu:", error.message);
    }
};

export default snackMenu;
