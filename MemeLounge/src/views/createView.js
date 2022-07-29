import { html, dataService, errorNotifier } from "./lib.js";

const template = (onSubmit) => html`
<section id="create-meme">
    <form @submit=${onSubmit} id="create-form">
        <div class="container">
            <h1>Create Meme</h1>
            <label for="title">Title</label>
            <input id="title" type="text" placeholder="Enter Title" name="title">
            <label for="description">Description</label>
            <textarea id="description" placeholder="Enter Description" name="description"></textarea>
            <label for="imageUrl">Meme Image</label>
            <input id="imageUrl" type="text" placeholder="Enter meme ImageUrl" name="imageUrl">
            <input type="submit" class="registerbtn button" value="Create Meme">
        </div>
    </form>
</section>
`
export const createView = (ctx) => {
    ctx.render(template(onSubmit))
    
    function onSubmit(e) {
        e.preventDefault()
        const data = Object.fromEntries(new FormData(e.target));
        
        if(data.title.trim() == '' || data.description.trim() == '' || data.imageUrl.trim() == '') {
            return errorNotifier('All fields are required!')
        }

        dataService.addData(data)
            .then(() => {
                e.target.reset();
                ctx.page.redirect('/catalog')
            })
            .catch(err => {alert(err)})
    }
}