console.log("Add validation!");

let form = document.querySelector("#parking-form");
console.log(form);
form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("submitted");
});
