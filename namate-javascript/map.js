const arr = [5,3,1,2,4];

function double(a){
    return a*2;
}

function triple(b){
    return b*3;
}

// function binary(c){
//     return c.toString(2);
// }

const output = arr.map(double);

const output2 = arr.map(triple);

//const output3 = arr.map(binary);

const output3 = arr.map(function binary(c){
    return c.toString(2);
});

console.log(output3);

console.log(output);

console.log(output2);