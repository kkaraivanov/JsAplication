import { html, dataService, errorNotifier } from "./lib.js";

const template = (data, onSubmit) => html`
<section id="edit-meme">
    <form @submit=${onSubmit} id="edit-form">
        <h1>Edit Meme</h1>
        <div class="container">
            <label for="title">Title</label>
            <input id="title" type="text" placeholder="Enter Title" name="title" value=${data.title}>
            <label for="description">Description</label>
            <textarea id="description" placeholder="Enter Description" name="description">${data.description}</textarea>
            <label for="imageUrl">Image Url</label>
            <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl" value=${data.imageUrl}>
            <input type="submit" class="registerbtn button" value="Edit Meme">
        </div>
    </form>
</section>
`
export const editView = (ctx) => {
    dataService.getById(ctx.params.id)
        .then(data => {
            ctx.render(template(data, onSubmit));
        })
    
    async function onSubmit(e) {
        e.preventDefault()
        const data = Object.fromEntries(new FormData(e.target));
        
        if(data.title.trim() == '' || data.description.trim() == '' || data.imageUrl.trim() == '') {
            return errorNotifier('All fields are required!')
        }

        dataService.editData(ctx.params.id, data)
            .then(() => {
                e.target.reset();
                ctx.page.redirect('/details/' + ctx.params.id)
            })
            .catch(err => {alert(err)})
    }
}