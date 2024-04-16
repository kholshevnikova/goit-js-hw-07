const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  if (email === "" || password === "") {
    alert("All form fields must be filled in");
  }

  const info = {
    email: email,
    password: password,
  };

  console.log(info);
  form.reset();
}
