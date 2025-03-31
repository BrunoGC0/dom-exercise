const container = document.querySelector("#container");

const p = document.createElement("p");
p.textContent = "Hey I'm red!";
p.style.color = "red";

const h3 = document.createElement("h3");
h3.textContent = "I'm a blue h3!";
h3.style.color = "blue";

const div = document.createElement("div");
div.style.cssText = "border: 1px solid #000; background: pink;";

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";

const p2 = document.createElement("p");
p2.textContent = "Me too"

div.appendChild(h1);
div.appendChild(p2);

container.appendChild(p);
container.appendChild(h3);
container.appendChild(div);