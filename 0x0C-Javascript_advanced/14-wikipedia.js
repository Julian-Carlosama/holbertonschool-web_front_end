// Create a new function named createElement:
function createElement(data) {
       pararaph = document.createElement('p');
       txt = document.createTextNode(data);
       pararaph.appendChild(txt);
       document.body.append(pararaph);
     }