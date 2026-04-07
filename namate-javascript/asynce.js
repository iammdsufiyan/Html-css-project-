const pr = new Promise((resolve, reject) =>{
        resolve("promise resolved value")
});


async function abc() {
    return pr
}
const dataP  = abc();
//console.log(abc);

dataP.then((res)=>{
     
        console.log(res)
})

const pro = new Promise((resolve, rejecte)=>{
    resolve("Promis is resolved");
})


async function getdata(){
    return pro;
}


const datap = getdata();


datap.then((res)=>{
    console.log(res);
})