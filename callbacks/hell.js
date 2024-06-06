// const cart = ["shoes", "pants", "kurtas"]

//Callback Hell
// createOrder(cart, function (orderId) {
//     proceedToPayment(orderId, function (paymentInfo) {
//         showOrderSummary(paymentInfo, function () {
//             updateWalletBalance();
//         })
//     })
// })

//Call back example
const cart = ["shoes", "pants", "kurtas"];

function createOrder(cart, callback) {
  setTimeout(() => {
    console.log("Order created");
    const orderId = "12345";
    callback(orderId);
  }, 1000);
}

function proceedToPayment(orderId, callback) {
  setTimeout(() => {
    console.log(`Payment processed for order ID: ${orderId}`);
    const paymentInfo = { orderId: orderId, status: "success" };
    callback(paymentInfo);
  }, 1000);
}

function showOrderSummary(paymentInfo, callback) {
  setTimeout(() => {
    console.log(`Showing order summary for order ID: ${paymentInfo.orderId}`);
    callback();
  }, 1000);
}

function updateWalletBalance() {
  setTimeout(() => {
    console.log("Wallet balance updated");
  }, 1000);
}

// Callback Hell
createOrder(cart, function(orderId) {
  proceedToPayment(orderId, function(paymentInfo) {
    showOrderSummary(paymentInfo, function() {
      updateWalletBalance();
    });
  });
});
