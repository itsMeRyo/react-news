const sentence = "Saya sangat senang mengerjakan soal algoritma";

const longest = (sentence) => {
  return Math.max(...sentence.split(/\s/).map((s) => s.length));
};

console.log(`mengerjakan: ${longest(sentence)} character`);
