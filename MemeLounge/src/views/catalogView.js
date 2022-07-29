import { html, dataService } from "./lib.js";

const catalogTemplate = (data) => html`
<!-- Display : All memes in database ( If any ) -->
<div class="meme">
     <div class="card">
        <div class="info">
            <p class="meme-title">${data.title}</p>
            <img class="meme-image" alt="meme-img" src=${data.imageUrl}>
        </div>
        <div id="data-buttons">
            <a class="button" href="/details/${data._id}">Details</a>
        </div>
    </div>
</div>
`
const template = (catalog) => html`
<section id="meme-feed">
    <h1>All Memes</h1>
    <div id="memes">
        ${catalog.length == 0
            ? html`<!-- Display : If there are no memes in database -->
            <p class="no-memes">No memes in database.</p>` 
            : catalog.map(catalogTemplate)
        }
        
    </div>
</section>
`
export const catalogView = (ctx) => {
    dataService.getCatalogData()
        .then(data => {
            ctx.render(template(data))
        })
    
}