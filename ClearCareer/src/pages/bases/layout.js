import { html } from "../templates/lib.js";
import { header } from "./header.js";

const content = (children) => html`
<!-- Main Content -->
${children}
`

export default {
    content,
    header
}