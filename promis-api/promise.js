const p1 = new Promise (function(resolve,reject){
setTimeout(function(){
    // resolve("p1.success");
    reject("p1.fails");
},3000);
})

const p2 = new Promise (function(resolve,reject){
setTimeout(function(){
    // resolve("p2.success");
    reject("p2.fails");
},5000);
})

const p3 = new Promise (function(resolve,reject){
setTimeout(function(){
    // resolve("p3.success");
    reject("p3.fails");
},2000);
})
// this is for. ==. promise.all
// Promise.all([p1,p2,p3])
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
// console.error(err);
// })

// promise. === allsettled
// Promise.allSettled([p1,p2,p3])
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
// console.error(err);
// })

// promise.race 
// Promise.race([p1,p2,p3])
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
// console.error(err);
// })

Promise.any([p1,p2,p3])
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
console.error(err);
console.log(err.errors);
})