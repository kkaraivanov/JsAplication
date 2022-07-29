import { html, dataService } from "./lib.js";

const template = (user, catalog) => html`
<section id="user-profile-page" class="user-profile">
    <article class="user-info">
        <img id="user-avatar-url" alt="user-profile" src="/images/${user.gender}.png">
        <div class="user-content">
            <p>Username: ${user.username}</p>
            <p>Email: ${user.email}</p>
            <p>My memes count: ${catalog.length}</p>
        </div>
    </article>
    <h1 id="user-listings-title">User Memes</h1>
    <div class="user-meme-listings">
        <!-- Display : All created memes by this user (If any) -->
        ${
            catalog.map(data => html`
                <div class="user-meme">
                    <p class="user-meme-title">${data.title}</p>
                    <img class="userProfileImage" alt="meme-img" src=${data.imageUrl}>
                    <a class="button" href="/details/${data._id}">Details</a>
                </div>
                `)
        }
        <!-- Display : If user doesn't have own memes  -->
        ${catalog.length == 0
            ? html`<p class="no-memes">No memes in database.</p>`
            : null
        }
    </div>
</section>
`
export const profileView = (ctx) => {
    dataService.getUserCatalog(ctx.user._id)
        .then(data => {
            ctx.render(template(ctx.user, data));
        })
    
}