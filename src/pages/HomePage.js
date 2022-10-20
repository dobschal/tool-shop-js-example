import { Image, Widget } from "tool-shop-js-widget";

export default () => {
    return Widget({
        style: "page",
        text: "This is the home page...",
        child: Image({
            url: "https://editionbohemica.de/logo.jpg",
            style: "image",
            onCreate() {
                this.style.opacity = 0;
            },
            onLoad() {
                this.style.opacity = 1;
            }
        })
    });
};