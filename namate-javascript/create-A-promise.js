const cart = ["shirt", "pant" , "kurta"];

// const promise = createOrder(cart);

// promise.then(function(orderID){
// // ProcedeToPayment(orderID);
// console.log(orderID);
// return orderID
// })
// promise.then(function(orderID){
//    return ProcedeToPayment(orderID);

// })
// .then(function(paymentInfo){
//     console.log("paymentInfo");
// })


// promise.catch(function(err){
//     console.log(err.message);
// })




function ProcedeToPayment(orderID){
  return new Promise(function(resolve,reject){
        return resolve("payment successfull");
  })
}
function validateCart(cart){
    return true;
}