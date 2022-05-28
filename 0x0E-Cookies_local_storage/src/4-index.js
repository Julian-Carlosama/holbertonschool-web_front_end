function setCookies() {
    Cookies.set("firstname", document.getElementById("firstname").value, {expires: 10})
    Cookies.set("email", document.getElementById("email").value, {expires: 10})
    showWelcomeMessageOrForm();
};

function showCookies() {
    let p = document.createElement("p");
    let firstname = Cookies.get("firstname");
    let email = Cookies.get("email");
    p.innerText = `Email: ${email} - Firstname: ${firstname}`;
    document.body.appendChild(p);
};

function showForm() {
    document.getElementById("#form").style.display = "block";
};

function hideForm() {
    document.getElementById("#form").style.display = "none";
};

function deleteCookiesAndShowForm() {
    let h1 = document.getElementById("#h1");
    h1.remove();
    Cookies.remove("firstname");
    Cookies.remove("email");
    showForm();
};

function showWelcomeMessageOrForm() {
    let fn = Cookies.get("firstname");
    if (fn) {
        hideForm();

        let h1 = document.createElement("h1");
        h1.innerText = `Welcome ${fn}`;
        h1.setAttribute("id", "#h1");

        let link = document.createElement("a");
        link.innerText = "(logout)";
        link.setAttribute("class", "logout");
        link.setAttribute("onclick", "deleteCookiesAndShowForm()");

        h1.appendChild(link);
        document.body.appendChild(h1);

    } else showForm();
};
showWelcomeMessageOrForm();