import axios from "axios";

export async function loadProducts() {
    const response = await axios.get("https://api.editionbohemica.de/products");
    console.log("Got products: ", response);
    return response.data;
}