import { Widget } from "tool-shop-js-widget"
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
        style: "page",
        text: "Products",
        children: [
            Widget({
                text: "loading",
                if: cb => data.$on("isLoading", cb)
            }),
            Widget({
                children: cb => {
                    data.$on("products", p => cb(p.map(ProductCard)));
                }
            })
        ]
    });
}