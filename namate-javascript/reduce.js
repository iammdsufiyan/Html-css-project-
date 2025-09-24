const arr = [5,15,1,4,2,9];

function sum () {
     let sum = 0;
    for(let i=0;i<arr.length;i++){
       sum = sum+arr[i];
    }
    return sum;
}

console.log(sum());

const output = arr.reduce(function(acc,curr){
    acc = acc+curr;
    return acc;
},0);

function max (){
   
    let maxi = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>maxi){
            maxi = arr[i];
        }
       
    }
    return maxi;
}

const outputmax = arr.reduce(function (acc,curr){
    if(curr>acc){
        acc=curr;
    }
    return acc;
},0)

console.log(output);

console.log(max());

console.log(outputmax);