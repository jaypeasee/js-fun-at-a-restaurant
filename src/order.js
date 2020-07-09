function takeOrder(orderNumber, orderArray) {
  if (orderArray.length <= 2) {
    orderArray.push(orderNumber);
  }
};

function refundOrder(orderNumber, orderArray) {
  orderArray.splice(orderNumber - 1, 1);
};

function listItems(itemsArr) {
  var orderItems = "";
  var newOrderItems;
  for (var i = 0; i < itemsArr.length; i++) {
    orderItems += `${itemsArr[i].item}, `
  }
  newOrderItems = orderItems.substring(0, orderItems.length - 2);
  return newOrderItems;
};

function searchOrder(ordersArr, orderChecker) {
  var orderPresent = false;
  for (var i = 0; i < ordersArr.length; i++) {
    if (orderChecker === ordersArr[i].item) {
      orderPresent = true;
    }
  }
    return orderPresent;
  };

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
