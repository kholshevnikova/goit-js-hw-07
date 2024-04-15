const textInput = document.querySelector("input#name-input");
const textOutput = document.querySelector("span#name-output");
console.log(textInput);
console.log(textOutput);
textInput.addEventListener("input", (event) => {
  const name = event.currentTarget.value;
  const trimmedName = name.trim();
  textOutput.textContent = trimmedName || "Anonymous";
});
