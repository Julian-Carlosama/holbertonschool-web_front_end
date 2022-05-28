function setCookies() {
       document.cookie = `firstname=${document.getElementById("firstname").value}`;
       document.cookie = `email=${document.getElementById("email").value}`;
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