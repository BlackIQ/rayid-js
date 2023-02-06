import RayID from "rayid";

const ray = new RayID(); // All values
const srt = new RayID("lower"); // Loercase generator
const int = new RayID("digit"); // Only int generator
const sym = new RayID("symbol"); // Symbol generator

console.log("Random of everything: " + ray.gen(10));
console.log("String in lowercase: " + srt.gen(10));
console.log("Number, 0 is not first: " + int.gen(10));
console.log("Some symbols stuff: " + sym.gen(10));
