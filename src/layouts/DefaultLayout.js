import { RouterLink } from "tool-shop-js-router";
import { Widget } from "tool-shop-js-widget";

export default () => {
    return Widget({
        children: [
            Widget({
                style: "header",
                children: [
                    RouterLink({
                        text: "Der Laden",
                        url: "/"
                    }),
                    RouterLink({
                        text: "Geschichte",
                        url: "/home"
                    }),
                    RouterLink({
                        text: "Über Uns",
                        url: "/about"
                    })
                ]
            }),
            Widget({
                slot: "page"
            })
        ]
    });
};