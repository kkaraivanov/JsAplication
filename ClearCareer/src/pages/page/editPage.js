import editTemplate from '../templates/edit.js'
import { dataService } from './lib.js'

export default (ctx) => {
    dataService.getById(ctx.params.id)
        .then(data => {
            ctx.render(editTemplate(data, ctx.onSubmitHandler(submit)))
        })

    function submit(ctx, data) {
        dataService.editData(ctx.params.id, data)
            .then(() => {
                ctx.page.redirect('/details/' + ctx.params.id);
            });
    }
}