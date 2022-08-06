export default (ctx, next) => {
    if(ctx.querystring) {
        ctx.queryParse = ctx.querystring
            .split('&')
            .map(x => x.split('='))
            .reduce((x, [k, v]) => {
                x[k] = v;

                return x
            }, {});
    }
    
    next();
}