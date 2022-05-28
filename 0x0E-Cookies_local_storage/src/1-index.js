function setCookies()  {
    let d = new(Date);
    d.setTime(d.getTime() + 10*24*60*60*1000);
    let expires = d.toGMTString();
    document.cookie = `firstname=${document.getElementById("firstname").value}; expires=${expires}`;
    document.cookie = `email=${document.getElementById("email").value}; expires=${expires}`;
};
function showCookies() {
    let vals = []
    let keyVals = document.cookie.split(";");
    for (let i in keyVals) {
       vals.push(keyVals[i].split("=")[1]);
    }
    let p = document.createElement("p");
    p.innerText = `Cookies: ${vals[0]}, ${vals[1]}`;
    document.body.appendChild(p);
};