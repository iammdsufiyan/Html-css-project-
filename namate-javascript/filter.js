const arr = [5,1,2,4,6];

function odd(a){
if(a%2!=0){
    return a;
}
}

const output = arr.filter(odd);

console.log(output);