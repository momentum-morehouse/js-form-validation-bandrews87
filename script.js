console.log("Add validation!");

let form = document.querySelector("#parking-form");
console.log(form);
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let total = document.querySelector("#total");
  console.log(total);
  let cost = document.createElement("p");
  cost.textContent = "5";
  console.log(cost);
  console.log(total);
  let numberofdays = 6;
  let price = parseInt(cost.textContent) * numberofdays;
  total.append(price);
  console.log("submitted");
});
