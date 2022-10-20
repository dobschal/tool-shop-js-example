import { Image, Widget, Headline } from "tool-shop-js-widget";

export default product => {
    return Widget({
        style: "product-card",
        children: [
            Image({
                url: product.image
            }),
            Headline(product.title)
        ],
        onClick() {
            alert("Open Product");
        }
    });
};