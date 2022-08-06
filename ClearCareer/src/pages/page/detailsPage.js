import detailsTemplate from '../templates/details.js'
import { dataService } from './lib.js'

export default (ctx) => {
    let count = 0;
    let isAplied = false;
    dataService.getCountOffer(ctx.params.id)
        .then(c => {
            count = c
        });
    dataService.getIsApply(ctx.params.id, ctx.user?._id)
        .then(res => {
            console.log(res)
            isAplied = res == 1
        });
    dataService.getById(ctx.params.id)
        .then(data => {
            const isOwner = ctx.user?._id == data._ownerId;
            ctx.render(detailsTemplate(ctx, isOwner, count, isAplied, data, onDelete, applied))
        });

    function applied() {
        dataService.addOffer(ctx.params.id)
            .then(() => {
                ctx.page.redirect('/details/' + ctx.params.id)
            })
    }

    async function onDelete() {
        const isDelete = confirm('Are you sure deleted element?')

        if (isDelete) {
            await dataService.deleteById(ctx.params.id);
            ctx.page.redirect(ctx.logoUrl)
        }
    }
}