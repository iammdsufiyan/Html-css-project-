console.log("fetch api");

const API_URL = "https://api.github.com/users/iammdsufiyan";


async function handle(){

    try{
 const data  = await fetch(API_URL);

    const jsonValue = await data.json();

    console.log(jsonValue);
    }

    catch(err){
            console.log("Api-url mismatch ");
    }
   

    
}

handle();