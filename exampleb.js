const { readFileSync } = require("fs");

function read(f) {
  return readFileSync(f).toString();
};

let text = read("in.bat");

let charToVN = {};
let characters = [...new Set(Array.from(text))]

let vard = [];

characters = characters.filter(c => !JSON.stringify(c).includes("\\") && !c === "=")
characters.forEach((ch, i) => {
  let rand = btoa(i).split("=").join("")
  charToVN[ch] = `%${rand}%`;
  vard.push(`set ${rand}=${ch}`)
})

console.log(vard, charToVN)
console.log(vard.join("\n"))
