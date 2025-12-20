console.dir(document.body.childNodes[1])

let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>Hi, I m new!</i>";

document.querySelector("body").prepend(newHeading);