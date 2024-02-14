const maxCharacter = (strings) => {
  const charMap = {};
  let max = 0,
    maxChar = "";
  const combinedString = strings.join("");

  for (let char of combinedString) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
};
console.log(maxCharacter("find", "findland", "finish"));
