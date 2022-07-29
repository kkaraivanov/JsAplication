import { render} from './index.js'; 
import { getUser } from "./utill.js";
import { navigationView } from "./views/navigationView.js";

// replace 'main' container with default root container
const contentRoot = document.querySelector('main');

// replace 'nav' container with default navigation container
const navRoot = document.querySelector('nav');

// set or remove unauthorized paths
const gestViews = [
    '/',
    '/login',
    '/register',
]

// first middleware for check user is loged
const authorize = (ctx, next) => {
    // get user data from sessionStorage
    ctx.user = getUser();

    // disabled visiting home, login and register view
    if (ctx.user) {
        if(gestViews.some(x => x == ctx.path)){
            ctx.page.redirect('/catalog')
        }
    }

    next();
}

// second middleware for create navigation with hiden divs
const nvaigation = (ctx, next) => {
    render(navigationView(ctx), navRoot);

    next();
}

// middleware for render content
const content = (ctx, next) => {
    ctx.render = (template) => {
        render(template, contentRoot);
    }

    next();
}

export const middleware = { authorize, nvaigation, content}