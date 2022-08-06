import { litRender } from '../providers/libraryes.js';
import { dataService } from "../api/index.js";
import { layout } from '../pages/index.js';
import addQueryParser from './queryParser.js'

const defaultUrl = '/';
const logoUrl = '/dashboard';
const logoContent = 'Dashboard'

function addContent(contentElement) {
    return async (ctx, next) => {
        ctx.render = renderContent

        next();
    }

    function renderContent(template) {
        litRender(layout.content(template), contentElement);
    }
}

function addHeader(headerElement) {
    return (ctx, next) => {
        litRender(layout.header(ctx), headerElement);

        next()
    }
}

const initialize = (ctx, next) => {
    ctx.user = dataService.getUser();
    ctx.defaultUrl = defaultUrl;
    ctx.logoUrl = logoUrl;
    ctx.logoContent = logoContent;
    ctx.isLoged = ctx.user != undefined;
    ctx.login = onLogin.bind(null, ctx);
    ctx.logout = onLogout.bind(null, ctx);
    ctx.register = onRegister.bind(null, ctx);
    ctx.onSubmitHandler = submitHandler.bind(null, ctx);

    next();
}

function onLogin(ctx) {
    return submitHandler(ctx, handler);

    function handler(ctx, data) {
        dataService.login(data)
            .then(() => {
                ctx.page.redirect(logoUrl) // redirect to asked url
            })
            .catch(err => alert(err))
    }
}

function onLogout(ctx) {
    dataService.logout()
        .then(() => ctx.page.redirect(logoUrl));
}

function onRegister(ctx) {
    return submitHandler(ctx, handler);

    function handler(ctx, data) {
        const {x, y} = [...Object.entries(data)]
            .reduce((x, [k, v]) => {
                if(k == 'password'){
                    x['x'] = v;
                } else if(k.includes('Pass')){
                    x['y'] = v;
                }

                return x
            }, {})

        if (x != y) {
            return alert('Passwords don\'t match!')
        }

        dataService.register(data)
            .then(() => {
                ctx.page.redirect(logoUrl)
            })
            .catch(err => alert(err))
    }
}

function submitHandler(ctx, handler) {
    return function (e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        let data = Object.fromEntries([...formData.entries()].map(([k, v]) => [k, v.trim()]));

        if (Object.values(data).some(x => x == '')) {
            return alert('All fields are required!')
        }

        data = [...Object.entries(data)]
            .reduce((x, [k, v]) => {
                if(k.includes('-')){
                    const split = k.split('-')
                    const toUper = split[1].charAt(0).toUpperCase() + split[1].slice(1)
                    const key = split[0] + toUper;
                    
                    x[key] = v;
                } else {
                    x[k] = v;
                }

                return x
            }, {});
        
        handler(ctx, data);
    }
}

const ApplicationMiddleware = {
    initialize,
    addHeader,
    addContent,
    addQueryParser
}

export default ApplicationMiddleware