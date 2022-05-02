// Ude Import export (MANDATORY)

import { Navbar } from "../components/navbar.js";
let n = document.getElementById("navbar").innerHTML=Navbar();

let searchquery = async () => {
    
    try{
        let res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${query}`);
        let  data = await res.json()
        console.log(data)
    }
    catch(err){
        console.log(err);
    }
} 

export{searchquery}
