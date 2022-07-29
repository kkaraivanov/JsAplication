import { html } from "./lib.js";

const logedUser = (user) => html`
<div class="user">
    <a href="/create">Create Meme</a>
    <div class="profile">
        <span>Welcome, ${user?.email}</span>
        <a href="/profile">My Profile</a>
        <a href="/logout">Logout</a>
    </div>
</div>
`
const gesttUser = html`
<div class="guest">
    <div class="profile">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
    </div>
    <a class="active" href="/">Home Page</a>
</div>
`

const template = (user) => html`
    <a href="/catalog">All Memes</a>
    ${user ? logedUser(user) : gesttUser}
`

export const navigationView = (ctx) => template(ctx.user);