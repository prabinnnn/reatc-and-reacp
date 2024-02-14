const ReplaceSentence = (sentence) => {
  return sentence
    .replaceAll("He", "raktim")
    .replaceAll("C", "mern stack")
    .replaceAll("c", "class");
};

console.log(
  ReplaceSentence(
    "raktim is a C class instructor.he is teaching c in since 2023"
  )
);
