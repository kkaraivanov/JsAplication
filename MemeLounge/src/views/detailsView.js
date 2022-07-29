import { html, dataService } from "./lib.js";

const template = (data, isOwner, onDelete) => html`
<section id="meme-details">
    <h1>Meme Title: ${data.title}</h1>
    <div class="meme-details">
        <div class="meme-img">
            <img alt="meme-alt" src=${data.imageUrl}>
        </div>
        <div class="meme-description">
            <h2>Meme Description</h2>
            <p>${data.description}</p>

            <!-- Buttons Edit/Delete should be displayed only for creator of this meme  -->
            ${isOwner 
                ? html`
                    <a class="button warning" href="/edit/${data._id}">Edit</a>
                    <button @click=${onDelete} class="button danger">Delete</button>
                `
                : null
            }
        </div>
    </div>
</section>
`
export const detailsView = (ctx) => {
    dataService.getById(ctx.params.id)
        .then(data => {
            ctx.render(template(data, data._ownerId == ctx.user?._id, onDelete))
        })

    async function onDelete() {
        const isDelete = confirm('Are you sure deleted element?')

        if(isDelete){
            await dataService.deleteById(ctx.params.id);
            ctx.page.redirect('/catalog')
        }
    }
}