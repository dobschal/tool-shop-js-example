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
                    })
                ]
            }),
            Widget({
                style: "content",
                text: "content here...",
                slot: "page"
            }),
            Widget({
                style: "footer"
            })
        ]
    });
};