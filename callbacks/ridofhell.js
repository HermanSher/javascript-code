const cart = [];

const promise = createOrder(cart);
promise
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  .then(function (orderId) {
    return proceedToPayment(orderId)
  })
  .then(function(paymentInfo){
    console.log(paymentInfo);
  })
  .catch((err) => console.log(err.message));

function createOrder(cart) {
  const pr = new Promise((resolve, reject) => {
    // createOrder
    // validateCart
    // orderId
    if (!validateCart(cart)) {
      const error = new Error("Cart is not valid");
      reject(error);
    }
    // logic for createOrder
    const orderId = "12345";
    if (orderId) {
      resolve(orderId);
    }
  });
  return pr;
}

function proceedToPayment(orderId) {
  return new Promise((resolve, reject) => {
    resolve("Payment Successful");
  });
}

function validateCart(cart) {
  if (cart.length >= 1) return true;
}
