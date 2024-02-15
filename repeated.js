const repeatedCharacter = (strings) => {
  let count = 0;
  let vcount = "";
  const firstChar = strings[0];
  for (let i = 1; i < strings.length - 5; i++) {
    if (strings[i][0] === firstChar) {
      vcount += firstChar;
      count++;
    }
  }
  return vcount;
};

console.log(repeatedCharacter("find", "finland", "finish"));
