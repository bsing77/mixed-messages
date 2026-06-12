const chemical = ['Cl', "O2",'N2O'];
const animalPart = ["Eye of Newt", "Bat Wing", "Owl Heart"];
const solution = ["Water", "Acid", "Gatorade"];

let randIndex = () => {
return Math.floor(Math.random() * 3)

}
console.log(`Your secret potion is made of...
   Chemical: ${chemical[randIndex()]}
   Animal Part: ${animalPart[randIndex()]}
   Solution: ${solution[randIndex()]}`);

