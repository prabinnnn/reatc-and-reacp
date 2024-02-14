const LargestWord = (sentence) => {
  return sentence
    .split(" ")
    .sort((a, b) => a.length - b.length)
    .pop();
};
console.log(LargestWord("i am a super long and beautiful word"));
