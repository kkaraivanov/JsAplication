import createTemplate from '../templates/create.js'
import {dataService} from './lib.js'

export default (ctx) => {
    ctx.render(createTemplate(ctx.onSubmitHandler(submit)))
}

function submit(ctx, data){
    dataService.addData(data)
        .then(() => {
            ctx.page.redirect(ctx.logoUrl);
        });
}