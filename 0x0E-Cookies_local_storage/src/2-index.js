function setCookies () {
    let d = new(Date);
    d.setTime(d.getTime() + 10*24*60*60*1000);
    let expires = d.toGMTString();
    document.cookie = `firstname=${document.getElementById("firstname").value}; expires=${expires}`;
    document.cookie = `email=${document.getElementById("email").value}; expires=${expires}`;
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
}