let value1El = document.getElementById("first-value");
let unit1El = document.getElementById("first-unit");
let value2El = document.getElementById("second-value");
let unit2El = document.getElementById("second-unit");
let btnEl = document.getElementById("convert-btn");

const convertValue = () => {
  let value1 = value1El.value;
  let unit1 = unit1El.value;
  let unit2 = unit2El.value;
  let value1InLegalUnit;
  let convertedValue;

  switch (unit1) {
    case "km":
      value1InLegalUnit = value1 * 1000;
      break;
    case "cm":
      value1InLegalUnit = value1 / 100;
      break;
    case "mm":
      value1InLegalUnit = value1 / 1000;
      break;
    default:
      value1InLegalUnit = value1;
  }

  switch (unit2) {
    case "km":
      convertedValue = value1LegalUnit / 1000;
      break;
    case "cm":
      convertedValue = value1InLegalUnit * 100;
      break;
    case "mm":
      convertedValue = value1InLegalUnit * 1000;
      break;
    default:
      convertedValue = value1InLegalUnit;
  }

  console.log(value1);
  console.log(unit1);
  console.log(unit2);
  console.log(value1InLegalUnit);
  console.log(convertedValue);

  value2El.value = convertedValue;
};

btnEl.addEventListener("click", convertValue);
unit2El.addEventListener("change", () => {
  value2El.value = "";
});
