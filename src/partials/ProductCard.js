import { Image, Widget, Headline, Text } from "tool-shop-js-widget";

export default product => {
    return Widget({
        style: "product card",
        children: [
            Image({
                url: product.image
            }),
            Headline(product.title),
            Text(product.subtitle)
        ],
        onClick() {
            alert("Open Product");
        }
    });
};