import { RouterLink } from "tool-shop-js-router";
import { Widget } from "tool-shop-js-widget";

export default () => {
    return Widget({
        children: [
            Widget({
                style: "header",
                children: [
                    RouterLink({
                        text: "home",
                        url: "/"
                    }),
                    RouterLink({
                        text: "about",
                        url: "/about"
                    }),
                    RouterLink({
                        text: "products",
                        url: "/products"
                    })
                ]
            }),
            Widget({
                slot: "page"
            })
        ]
    });
};