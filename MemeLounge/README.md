<div align="left">

### My solution of Meme Lounge exam

What is do the file "app.js".... The file is starting run middlewares for check of record for user data in session storage after redering a navigation bar and set of the context for all views. On the end he is render all views.

```javascript
page(middleware.authorize);
page(middleware.nvaigation);
page(middleware.content);

views.map(x => page(x.url, x.view));

page.start();
```

The first middleware where run is the authorize.
``` javascript
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
```
The next functions render the navigation and content.
```javascript
const nvaigation = (ctx, next) => {
    render(navigationView(ctx), navRoot);

    next();
}

const content = (ctx, next) => {
    ctx.render = (template) => {
        render(template, contentRoot);
    }

    next();
}
```
The all template views where i used is in file "index.js" in the views directory. Here is the code for them...
```javascript
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
```

###### *I guess you will find it useful.*

</div>
