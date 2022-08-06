import { html } from "./lib.js";

export default (ctx, isOwner, applyCount, isAplied, data, onDelete, onApply) => html`
<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src=${data.imageUrl} alt="example1" />
        <p id="details-title">${data.title}</p>
        <p id="details-category">
            Category: <span id="categories">${data.category}</span>
        </p>
        <p id="details-salary">
            Salary: <span id="salary-number">${data.salary}</span>
        </p>
        <div id="info-wrapper">
            <div id="details-description">
                <h4>Description</h4>
                <span>${data.description}</span>
            </div>
            <div id="details-requirements">
                <h4>Requirements</h4>
                <span>${data.requirements}</span>
            </div>
        </div>
        <p>Applications: <strong id="applications">${applyCount}</strong></p>

        <!--Edit and Delete are only for creator-->
        <div id="action-buttons">
            ${
                isOwner
                ? html`
                    <a href="/edit/${data._id}" id="edit-btn">Edit</a>
                    <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
                `
                : null
            }

            <!--Bonus - Only for logged-in users ( not authors )-->
            ${
                ctx.isLoged && !isOwner && !isAplied
                ? html`<a @click=${onApply} href="javascript:void(0)" id="apply-btn">Apply</a>`
                : null
            }
            
        </div>
    </div>
</section>
`