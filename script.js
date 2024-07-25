const myName = "Omnifood";
const h1 = document.querySelector(".heading-primary");
console.log("myName");
console.log("h1");

h1.addEventListener("click", function () {
  h1.textContent = myName;
  h1.style.backgroundColor = "red";
  h1.style.padding = "5rem";
});

const yearEL = document.querySelector(".year");
const currentYear = new Date().getFullYear();
console.log("currentYear");
yearEL.textContent = currentYear;