const users = 
[
    {firstname : "Muhammad" , lastname: "Sufiyan" , age: "20"},
    {firstname : "Muhammad" , lastname: "jaseem" , age: "239"},
    {firstname : "Muhammad" , lastname: "danish" , age: "20"},
    {firstname : "Muhammad" , lastname: "dilshad" , age: "98"},
]

// add the first name and the last name ; 

function names(a){
    
    return a.firstname + " " + a.lastname;
}

// const output2 = users.map(function(b){
//     return b.firstname+ " " + b.lastname;
// })

const output = users.map(names);


console.log(output);

// console.log(output2);


// { 26:2 ,75:1, 50:1 }

const output3 = users.reduce(function(acc,curr){

   if(acc[curr.age]){
    acc[curr.age]  = ++ acc[curr.age];
   }
   else{
    acc[curr.age] = 1;
   }
  return acc;
},{});

console.log(output3);


const output4 = users.filter(function(x){
      if(x.age<25){
        return x.age;
      }
}).map(function(z){
    return z.firstname;
})

console.log(output4);


