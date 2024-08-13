const inputNumber = document.getElementById("textbox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
// const myButton = document.getElementById("myButton");

let temp;

function convert() {
  if (toFahrenheit.checked) {
    temp = Number(inputNumber.value);
    temp = temp * (9 / 5) + 32;
    result.textContent = temp.toFixed(1) + "°F";
  } else if (toCelsius.checked) {
    temp = Number(inputNumber.value);
    temp = (temp - 32) * (5 / 9);
    result.textContent = temp.toFixed(1) + "°C";
  } else {
    result.textContent = "Please Select an option!!!";
  }
  
  setTimeout(() => {
    result.textContent = "";
  }, 10000);
};
