const convert = (temp, mesurement = "c") => {
  if (mesurement === "c") {
    return (9 * temp) / 5 + 32 + "fahrenheit";
  } else {
    return ((temp - 32) / 9) * 5 + "celsisu";
  }
};
console.log(convert(23, "c"));
document.getElementById("celusis");
document.getElementById("fahenheit");
