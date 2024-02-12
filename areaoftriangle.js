const display = (solution) => {
  console.log("The area of the triangle is: " + solution);
};

const areaoftriangle = (a, b, c, callback) => {
  const s = (a + b + c) / 2; // Calculate the semi-perimeter
  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c)); // Heron's formula
  callback(area); // Call the callback function with the result
};

// Example usage:
areaoftriangle(3, 4, 5, display);
