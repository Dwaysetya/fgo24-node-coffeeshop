const url =
    "https://raw.githubusercontent.com/Dwaysetya/fgo24-node-datasource/refs/heads/main/menu.json";

async function fetchData() {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Fetch error:", error);
    }
}

export default fetchData;
