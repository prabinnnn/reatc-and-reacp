const factorial = (n) => {
  n = Number(n) || 0;
  if (n === 1 || n === 0) return 1;
  return n * factorial(n - 1);
};
console.log(factorial(5));
