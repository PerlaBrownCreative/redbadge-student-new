let input1 = document.getElementById("number1");
let input2 = document.getElementById("number2");

let button = document.getElementById("btn");

button.addEventListener("click", () => {
  console.log(addNumbers(input1.value, input2.value));
});

function addNumbers(num1, num2) {
  return Number(num1) + Number(num2);
}