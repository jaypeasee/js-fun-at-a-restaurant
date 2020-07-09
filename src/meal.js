function nameMenuItem(menuItemName) {
  return `Delicious ${menuItemName}`;
};

function createMenuItem(name, price, type) {
  var menuItem = {
    name: name,
    price: price,
    type: type,
  }
};

function addIngredients(ingredient1, ingredients) {
  var isUnique = true;
  for (var i = 0; i < ingredients.length; i++) {
    if (ingredient1 === ingredients[i]) {
      isUnique = false;
    }
  }
  if (isUnique) {
    ingredients.push(ingredient1);
  }
};

function formatPrice(formattedPrice) {
  return `$${formattedPrice}`;
};

function decreasePrice(decreasedPrice) {
  var price = decreasedPrice * .9;
}

function createRecipe(title, ingredients, type) {
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: type,
  }
};


module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
