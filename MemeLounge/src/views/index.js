import { homeView } from "./homeView.js";
import { loginView } from "./authView.js";
import { logoutView } from "./authView.js";
import { registerView } from "./registerView.js";
import { catalogView } from "./catalogView.js";
import { detailsView } from "./detailsView.js";
import { createView } from "./createView.js";
import { editView } from "./editView.js";
import { profileView } from "./profileView.js";

export const views = [
    {url: '/', view: homeView},
    {url: '/login', view: loginView},
    {url: '/logout', view: logoutView},
    {url: '/register', view: registerView},
    {url: '/catalog', view: catalogView},
    {url: '/details/:id', view: detailsView},
    {url: '/edit/:id', view: editView},
    {url: '/create', view: createView},
    {url: '/profile', view: profileView},
]