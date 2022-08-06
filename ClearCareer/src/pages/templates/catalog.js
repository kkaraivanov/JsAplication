import { html } from "./lib.js";

export default (data) => html`
<section id="catalogPage">
    <h1>All Albums</h1>

    ${
        data?.length == 0 
        ? html`
            <!--No albums in catalog-->
            <p>No Albums in Catalog!</p>
        `
        : data.map(catalogBox)
    }

</section>
`
const catalogBox = (data) => html`
<div class="card-box">
    <img src=${data.imgUrl}>
    <div>
        <div class="text-center">
            <p class="name">Name: ${data.name}</p>
            <p class="artist">Artist: ${data.artist}</p>
            <p class="genre">Genre: ${data.genre}</p>
            <p class="price">Price: ${data.price}</p>
            <p class="date">Release Date: ${data.releaseDate}</p>
        </div>
        <div class="btn-group">
            <a href="/details/${data._id}" id="details">Details</a>
        </div>
    </div>
</div>
`