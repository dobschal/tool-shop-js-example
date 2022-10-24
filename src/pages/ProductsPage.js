import { Headline, Text, Widget } from "tool-shop-js-widget"
import ProductCard from "../partials/ProductCard.js";
import { loadProducts } from "../services/ProductService.js";
import { Observable } from "tool-shop-js-observable";

const data = Observable({
    products: [],
    isLoading: true
});

export default () => {

    loadProducts().then(products => {
        data.isLoading = false;
        data.products = products;
    });

    return Widget({
        style: "page products",
        text: "Products",
        children: [
            Headline("Verfügbare Titel"),
            Widget({
                text: cb => data.$on("products", p => cb(`Es stehen ${p.length} Titel zur Verfügung.`)),
                style: "mb-2"
            }),
            Widget({
                text: "loading",
                if: cb => data.$on("isLoading", cb)
            }),
            Widget({
                style: "cards",
                children: cb => {
                    data.$on("products", p => cb(p.map(ProductCard)));
                }
            })
        ]
    });
}