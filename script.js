const celciusEl = document.getElementById("Celcius");
const fahrenheitEl = document.getElementById("Fahrenheit");
const kelvinEl = document.getElementById("Kelvin");
const reset = document.getElementById("reset");
let container = document.getElementById("valuesContainer");
let temps = [];
function computeTemp(event) {
  const currentValue = event.target.value;
  switch (event.target.name) {
    case "Celcius":
      fahrenheitEl.value = (currentValue * 9) / 5 + 32;
      kelvinEl.value = parseFloat(currentValue) + 273.15;
      break;
    case "Fahrenheit":
      celciusEl.value = ((currentValue - 32) * 5) / 9;
      kelvinEl.value = ((currentValue - 32) * 5) / 9 + 273.15;
      break;
    case "Kelvin":
      celciusEl.value = currentValue - 273.15;
      fahrenheitEl.value = ((currentValue - 273.15) * 9) / 5 + 32;
      break;
    default:
      break;
  }
  let instance = {
    value1: celciusEl.value,
    value2: fahrenheitEl.value,
    value3: kelvinEl.value,
  };
  temps.push(instance);
  container.innerHTML = "";
  let para = document.createElement("p");
  para.classList.add("list");
  let spanElement = document.createElement("span");
  spanElement.textContent = "Celcius";
  para.appendChild(spanElement);
  spanElement = document.createElement("span");
  spanElement.textContent = "Fahrenheit";
  para.appendChild(spanElement);
  spanElement = document.createElement("span");
  spanElement.textContent = "Kelvin";
  para.appendChild(spanElement);
  container.appendChild(para);
  for (let temp of temps) {
    para = document.createElement("p");
    para.classList.add("list");
    spanElement = document.createElement("span");
    spanElement.textContent = temp.value1;
    para.appendChild(spanElement);
    spanElement = document.createElement("span");
    spanElement.textContent = temp.value2;
    para.appendChild(spanElement);
    spanElement = document.createElement("span");
    spanElement.textContent = temp.value3;
    para.appendChild(spanElement);
    container.appendChild(para);
  }
}

reset.onclick = function () {
  celciusEl.value = "";
  fahrenheitEl.value = "";
  kelvinEl.value = "";
};
