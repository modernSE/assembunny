import { readFileSync } from "fs";

const file = readFileSync("./src/input.txt").toString();
const example = `cpy 41 a
inc a
inc a
dec a
jnz a 2
dec a`;
console.log(example);
