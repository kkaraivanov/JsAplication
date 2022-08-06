import { html } from "./lib.js";

export default (page, pages) => html`
<header class="section-title">
    Page ${page} of ${pages}
    ${
        page != 1 
        ? html `<a class='pager' hrf='/catalog?page=${page - 1}'>&lt;Prev</a>` 
        : null
    }
    ${
        page < pages
        ? html `<a class='pager' hrf='/catalog?page=${page + 1}'>Next&gt</a>` 
        : null
    }
</header>
`