import { Router } from 'tool-shop-js-router';
import DefaultLayout from './layouts/DefaultLayout.js';
import AboutPage from './pages/AboutPage.js';
import HomePage from './pages/HomePage.js';

// FIXME: won't instantiate the components right here...

const router = Router({
    hooks: {
        before(done) {
            console.log("Before hook");
            done();
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