const btn = document.querySelector("button");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

btn.addEventListener("click", () => {
    let text = input.value;

    let li = document.createElement("li");
    let span = document.createElement("span");
    let liBtn = document.createElement("button");

    li.appendChild(span);
    li.appendChild(liBtn);

    span.textContent = text;
    liBtn.textContent = "Delete";

    ul.appendChild(li);

    liBtn.addEventListener("click", () => {
        li.remove();
    })

    input.focus();
})

