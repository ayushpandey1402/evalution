// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import { Navbar } from "../components/navbar.js";
let n = document.getElementById("navbar").innerHTML=Navbar();
//console.log(n)

let searchNews = async () => {
    //let countycode = document.getElementById("search_input").value;
    try{
        let res = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${ countycode}`);
        let  data = await res.json()
        console.log(data)
    }
    catch(err){
        console.log(err);

    }
}
 

export{searchNews}