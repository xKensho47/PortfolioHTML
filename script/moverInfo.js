const right = document.querySelector("#right");
const left = document.querySelector("#left");
const data = document.querySelector("#data-personal");
const techs = document.querySelector("#techs");

right.addEventListener("click", () => {
    techs.classList.add("move");
    data.classList.remove("move");
    right.classList.add("move");
    left.classList.remove("move");
})
left.addEventListener("click", () => {
    techs.classList.remove("move");
    data.classList.add("move");
    right.classList.remove("move");
    left.classList.add("move");
})