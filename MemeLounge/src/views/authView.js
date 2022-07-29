import { html, dataService, errorNotifier } from "./lib.js";

const template = (onSubmit) => html`
<section id="login">
    <form id="login-form" @submit=${onSubmit}>
        <div class="container">
            <h1>Login</h1>
            <label for="email">Email</label>
            <input id="email" placeholder="Enter Email" name="email" type="text">
            <label for="password">Password</label>
            <input id="password" type="password" placeholder="Enter Password" name="password">
            <input type="submit" class="registerbtn button" value="Login">
            <div class="container signin">
                <p>Dont have an account?<a href="register">Sign up</a>.</p>
            </div>
        </div>
    </form>
</section>
`

 export const loginView = (ctx) => {
    ctx.render(template(onSubmit));

    function onSubmit(e) {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target));

        if(data.email.trim() == '' || data.password.trim() == '') {
            return errorNotifier('All fields are required!')
        }

        dataService.login(data)
            .then(() => {
                ctx.page.redirect('/catalog')
            })
            .catch(err => alert(err))
    }
}

export const logoutView = (ctx) => {
    dataService.logout().then(() => ctx.page.redirect('/'))
}