let INPUT = ["xc", "dz", "bbb", "dz"],
  QUERY = ["bbb", "ac", "dz"],
  OUTPUT = INPUT.filter((item) => QUERY.includes(item).length);

console.log(OUTPUT);
