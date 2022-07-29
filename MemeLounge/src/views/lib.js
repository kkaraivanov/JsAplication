import { html } from "../../node_modules/lit-html/lit-html.js";
import { dataService } from "../api/dataService.js";

const errorContainer = document.getElementById('errorBox');
const errorField = errorContainer.querySelector('span');

function errorNotifier(message) {
    errorField.textContent = message;
    errorContainer.style.display = 'block';
    
    setTimeout(() => errorContainer.style.display = 'none', 3000);
}
export {
    html,
    dataService,
    errorNotifier
}