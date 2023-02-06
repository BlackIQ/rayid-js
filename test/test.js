import RayID from "rayid";

const ray = new RayID("lower");
const int = new RayID("digit");

console.log(ray.gen(50));
console.log(int.gen(10));
