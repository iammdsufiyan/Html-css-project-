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


function createOrder(cart){
const pr = new Promise(function(resolve,reject){
    if(!validateCart(cart)){
        const err = new Error("cart is not validated ");
        reject(err);
    }
    const orderID = '12345'
    setTimeout(function(){
          resolve(orderID);
    },100);
    
})
return pr;
}

function ProcedeToPayment(orderID){
  return new Promise(function(resolve,reject){
        return resolve("payment successfull");
  })
}
function validateCart(cart){
    return true;
}