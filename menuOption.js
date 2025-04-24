import fetchData from "./fetch-data.js";
import foodMenu from "./menuFood.js";
import drinkMenu from "./menuDrink.js";
import snackMenu from "./snackMenu.js";
import { rl, menuUtama } from "./index.js";

const pilihKategori = async () => {
    const data = await fetchData();
    if (!data) {
        console.log("Data tidak ditemukan");
        return menuUtama();
    }

    const menuData = Object.keys(data);
    const formatMenu = menuData
        .map((kategori, index) => `${index + 1}. ${kategori}`)
        .join("\n");

    console.log(
        `\n======= PILIH MENU =======\n\n${formatMenu}\n\n0. kembali ke menu utama\n`
    );

    rl.question("Masukkan pilihan: ", (jawaban) => {
        switch (jawaban) {
            case "1":
                foodMenu();
                break;
            case "2":
                drinkMenu();
                break;
            case "3":
                snackMenu();
                break;
            case "0":
                menuUtama();
                break;
            default:
                console.log("Input tidak valid");
                menuUtama();
        }
    });
};

export default pilihKategori;
