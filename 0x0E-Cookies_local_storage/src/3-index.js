function setCookies = () => {
    let d = new(Date);
    d.setTime(d.getTime() + 10*24*60*60*1000);
    let expires = d.toGMTString();
    document.cookie = `firstname=${document.getElementById("firstname").value}; expires=${expires}`;
    document.cookie = `email=${document.getElementById("email").value}; expires=${expires}`;
    showWelcomeMessageOrForm();
};

function showCookies() {
    let p = document.createElement("p");
    let firstname = getCookie("firstname");
    let email = getCookie("email");
    p.innerText = `Email: ${email} - Firstname: ${firstname}`;
    document.body.appendChild(p);
};

function getCookie(name) {
    let keyVals = document.cookie.split("; ");
    for (let i in keyVals) {
        let kv = keyVals[i].split("=");
        if (kv[0] == name) return kv[1];
    }
    return "";
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
    document.cookie = "firstname=; email=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
    showForm();
};

function showWelcomeMessageOrForm() {
    let fn = getCookie("firstname");
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