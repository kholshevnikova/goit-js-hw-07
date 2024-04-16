function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector("#controls button[data-create]");
const destroyBtn = document.querySelector("#controls button[data-destroy]");
const boxes = document.querySelector("#boxes");
const input = document.querySelector("#controls input");
// console.log(createBtn);
// console.log(destroyBtn);
// console.log(boxes);
// console.log(input);

createBtn.addEventListener("click", createBoxes);

function createBoxes() {
  const amount = Number(input.value);
  if (amount < 1 || amount > 100) {
    return;
  }
  destroyBoxes();
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.appendChild(box);
  }

  input.value = "";
}

destroyBtn.addEventListener("click", destroyBoxes);
function destroyBoxes() {
  boxes.innerHTML = "";
}
