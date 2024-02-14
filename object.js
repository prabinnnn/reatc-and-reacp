const arr = ["nepal", "india", "thailand"];

const largestArray = (arr) => {
  return arr.sort((a, b) => a.length - b.length).pop();
};
console.log(largestArray(arr));
