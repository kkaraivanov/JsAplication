import bases  from "./bases/base.js";
import layout from "./bases/layout.js";

// add pages imports from ./page
import catalogPage from './page/catalogPage.js';
import dashboardPage from './page/dashboardPage.js';
import createPage from './page/createPage.js';
import detailsPage from './page/detailsPage.js';
import editPage from './page/editPage.js';

// catalog routes
const pages = [
    // bases pages
    {path: '/', template: bases},
    {path: '/login', template: bases},
    {path: '/register', template: bases},
    // other pages from ./page
    {path: '/catalog', template: catalogPage},
    {path: '/dashboard', template: dashboardPage},
    {path: '/create', template: createPage},
    {path: '/details/:id', template: detailsPage},
    {path: '/edit/:id', template: editPage},
];

export {
    layout,
    pages
}