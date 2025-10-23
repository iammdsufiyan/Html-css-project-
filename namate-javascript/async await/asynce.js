

// async function getData(){
//  return "one to one "
// }

// const dataPromise  = getData();

// dataPromise.then(function(res){
//     console.log(res);
// })

// const p = new Promise(function(resolve, rejected){
//     resolve("this is resolved promise ");
// })

// async function getData(){
//     return p;
// }

// const dataPromise = getData();

// dataPromise.then(function(res){
// console.log(res);
// })


// Main part  == this is 

const p =new Promise(function(resolve, rejected){
    setTimeout(function(){
        resolve("promise is resolved ");
    },5000)
        
})

const p2 = new Promise (function(resolve, rejected){
    setTimeout(function(){
        resolve("second promised is resolved")
    },10000)
})
async function getData(){
    console.log("fisrst  line is printed ")
    const val = await p;
    console.log(val);
    console.log("second line  is  printed ")


    const val2 = await p2;
    console.log(val);
    console.log("second await ")
}

getData();


// function getData(){
//     p.then(function(resolve){
         
//         console.log(resolve);


       
//     })
//             console.log(" yeh line pahle print hoga ");
// }

// getData();