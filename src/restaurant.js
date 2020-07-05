function createRestaurant(name, menus, breakfast, lunch, dinner) {
  var menus = {
    breakfast: [],
    lunch: [],
    dinner: [],
  }
  var pizzaRestaurant = {
    name: name,
    menus: menus,
  }
  return pizzaRestaurant;
};

function addMenuItem(restaurant, newItem) {
  var isUnique = true;
  var restKey = Object.keys(restaurant.menus)
  for (var j = 0; j < restKey.length; j++) {
    var menu = restaurant.menus[restKey[j]];
    for (var i = 0; i < menu.length; i++) {
      if (newItem === menu[i]) {
        isUnique = false;
      }
    }
  }
  if (isUnique) {
    if (newItem.type === "breakfast") {
      restaurant.menus.breakfast.push(newItem);
    } else if (newItem.type === "lunch") {
      restaurant.menus.lunch.push(newItem);
    } else if (newItem.type === "dinner") {
      restaurant.menus.dinner.push(newItem);
    }
  }

  return restaurant;
};


function removeMenuItem(restaurant, newItem, menuType) { 
if (menuType === "breakfast") {
  restaurant.menus.breakfast.pop();
  return `No one is eating our ${newItem} - it has been removed from the breakfast menu!`;
 }  else if (menuType === "dinner") {
  restaurant.menus.dinner.pop();
  return `No one is eating our ${newItem} - it has been removed from the dinner menu!`
} else if (newItem.includes(newItem) == true) {
  return `Sorry, we don't sell ${newItem}, try adding a new recipe!`;
}
 } ;


module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
