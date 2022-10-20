import { Router } from 'tool-shop-js-router';
import DefaultLayout from './layouts/DefaultLayout.js';
import AboutPage from './pages/AboutPage.js';
import HomePage from './pages/HomePage.js';

let router;

router = Router({
    hooks: {
        before(done) {
            router?.pageElement?.classList.add("page-leave");
            setTimeout(done, 200);
        }
    },
    routes: {
        "about": {
            layout: DefaultLayout,
            page: AboutPage
        },
        "*": {
            layout: DefaultLayout,
            page: HomePage
        }
    }
});