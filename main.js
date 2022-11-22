console.log("Var: ", varAb);
console.log("letAB:", letABCC);
// console.log("A:", conABC);
let letAB = 0;
{
  letAB = 10;
  console.log("A:", letAB);
}
console.log("letAB:", letAB);

const conABC = 0;
{
  const conABC = 20;
  console.log("A:", conABC);
}
console.log("A:", conABC);

var varAb = 30;
{
  varAb = 20;
  console.log("Var: ", varAb);
}
var varAb = 25;
console.log("Var: ", varAb);
