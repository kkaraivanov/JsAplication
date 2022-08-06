import homeTemplate from '../templates/home.js';
import loginTemplate from '../templates/login.js';
import registerTemplate from '../templates/register.js';
    
export default (ctx, next) => {
    const path = ctx.path;
    
    if(ctx.isLoged) {
        ctx.page.redirect(ctx.defaultUrl);
    }

    if(path === '/') ctx.render(homeTemplate());
    if(path === '/login') ctx.render(loginTemplate(ctx.login()))
    if(path === '/register') ctx.render(registerTemplate(ctx.register()))
}