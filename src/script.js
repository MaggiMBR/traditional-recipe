function moreRecipes() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email?");
  alert("Gracias " + name + "! We'll send you more delicious recipes 🥣 ");
}

let recipeButton = document.querySelector("button");

recipeButton.addEventListener("click", moreRecipes);
