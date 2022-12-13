const wordsReverser = (str) => {
  return str.replace(/[a-zA-Z]+/gm, (item) => {
    return item.split("").reverse().join("");
  });
};

console.log(wordsReverser("NEGIE1"));
