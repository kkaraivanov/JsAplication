import { html } from "../templates/lib.js";

export const header = (ctx) => html`
<!-- Navigation -->
<a id="logo" href="/"
    ><img id="logo-img" src="./images/logo.jpg" alt=""
/></a>
<nav>
    <div>
        <a href=${ctx.logoUrl}>${ctx.logoContent}</a>
    </div>
    ${
        !ctx.isLoged 
        ? navigationBar.gest 
        : navigationBar.user(ctx.user, ctx.logout)
    }
</nav>
`

const navigationBar = {
    user: (user, onLogout)  => html`
    <!-- Logged-in users -->
    <div class="user">
        <a href="/create">Create Offer</a>
        <a @click=${onLogout} href="javascript:void(0)">Logout</a>
    </div>
    `,
    gest: html`
    <!-- Guest users -->
    <div class="guest">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
    </div>
    `
}