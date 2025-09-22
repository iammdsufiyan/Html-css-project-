const arr = [3,1,2,4];

const area = function (radius) {
      const output = []
    for(let i=0 ;i<arr.length;i++){
        const area1 = Math.PI*radius[i]*radius[i];
        output.push(area1);
    }
    return output
}
const circumference = function (radius){
    const output  = []
    for(let i=0; i<arr.length;i++){
        output.push(Math.PI*2*radius[i]);
    }
    return output;
}

const daimeter = function (radius){
    const output = []
    for(let i=0;i<arr.length;i++){
        output.push(2*radius[i]);
    }
    return output;
}

console.log(area(arr));

console.log(circumference(arr))

console.log(daimeter(arr));