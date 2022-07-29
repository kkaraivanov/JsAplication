import { html, dataService, errorNotifier } from "./lib.js";

const template = (onSubmit) => html`
<section id="register">
    <form id="register-form" @submit=${onSubmit}>
        <div class="container">
            <h1>Register</h1>
            <label for="username">Username</label>
            <input id="username" type="text" placeholder="Enter Username" name="username">
            <label for="email">Email</label>
            <input id="email" type="text" placeholder="Enter Email" name="email">
            <label for="password">Password</label>
            <input id="password" type="password" placeholder="Enter Password" name="password">
            <label for="repeatPass">Repeat Password</label>
            <input id="repeatPass" type="password" placeholder="Repeat Password" name="repeatPass">
            <div class="gender">
                <input type="radio" name="gender" id="female" value="female">
                <label for="female">Female</label>
                <input type="radio" name="gender" id="male" value="male" checked>
                <label for="male">Male</label>
            </div>
            <input type="submit" class="registerbtn button" value="Register">
            <div class="container signin">
                <p>Already have an account?<a href="/login">Sign in</a>.</p>
            </div>
        </div>
    </form>
</section>
`

export const registerView = (ctx) => {
    ctx.render(template(onSubmit))

    function onSubmit(e) {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target));

        if(data.username.trim() == '' || data.email.trim() == '' || data.password.trim() == '') {
            return errorNotifier('All fields are required!')
        }

        if(data.password != data.repeatPass) {
            return errorNotifier('Passwords don\'t match!')
        }

        dataService.register(data)
            .then(() => {
                ctx.page.redirect(uris.catalog)
            })
            .catch(err => alert(err))
    }
}