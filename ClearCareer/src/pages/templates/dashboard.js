import { html } from "./lib.js";

export default (data = []) => html`
<section id="dashboard">
    <h2>Job Offers</h2>
    <!-- Display a div with information about every post (if any)-->
    ${
        data?.length == 0 
        ? html`
            <!-- Display an h2 if there are no posts -->
            <h2>No offers yet.</h2>
        `
        : data.map(offer)
    }
    
</section>`

const offer = (data) => html`
<div class="offer">
    <img src=${data.imageUrl} alt="example1" />
    <p>
        <strong>Title: </strong><span class="title">${data.title}</span>
    </p>
    <p><strong>Salary:</strong><span class="salary">${data.salary}</span></p>
    <a class="details-btn" href="/details/${data._id}">Details</a>
</div>
`