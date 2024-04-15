const items = document.querySelectorAll("li.item");
console.log("Number of categories:", items.length);
items.forEach((item) => {
  const categoryName = item.querySelector("h2").textContent;
  console.log("Category:", categoryName);
  const amountOfElements = item.querySelectorAll("li").length;
  console.log("Elements:", amountOfElements);
});
