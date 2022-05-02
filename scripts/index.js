// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
//const API="https://masai-mock-api.herokuapp.com/news/top-headlines?country=in";

import { Navbar } from "../components/navbar.js";
let n = document.getElementById("navbar").innerHTML=Navbar();
//console.log(n)

import {searchNews} from "./search.js"

let search = (el) => {
    if(el.key==="Enter"){
        let countycode  = document.getElementById("search_input").value;
        searchNews(countycode).then((data) =>
        {
            console.log("data",data)

            let show = document.getElementById("results");
            show.innerHTML= null;
        })
    }
}

import { searchquery } from "./news.js";

