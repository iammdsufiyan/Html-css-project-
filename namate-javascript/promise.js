
const cart = ["shirt" , "jeans", "pants" , "t-shirt"];

CreateOder(cart , function(orderId){

    proceedTopayment(orderId, function(paymentinfo){

        paymentinfo(paymentinfo,function(){

            updatewallet();
        })
    });

})

// const promise = CreateOder(cart);

// promise.them(function(orderId){
//     proceedTopayment(orderId);
// })


const promise = CreateOder(cart)
.then(function(orderId){
   return proceedTopayment(orderId);
})
.then(function(paymentinfo){
   return paymentinfo(paymentinfo);
})
.then(function(paymentinfo){
   return updatewallet(paymentinfo);
})