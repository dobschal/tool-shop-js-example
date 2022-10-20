import axios from "axios";

async function delay(milliseconds) {
    return await new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

export async function loadProducts() {
    await delay(1000);
    const response = await axios.get("https://api.editionbohemica.de/products");
    console.log("Got products: ", response);
    return response.data;
}