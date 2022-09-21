"use strict";

let url = 'https://randomuser.me/api/?results=200';
let btn = document.querySelector("button");
let info;
let onePerson;
let loadMore;
let container = document.getElementById("info-container");


    let http = new XMLHttpRequest();

    http.onload = function(){

        for (let i = 0; i < 5; i++){
            var el = document.createElement("p");
            container.appendChild(el);
            onePerson = document.querySelectorAll("p");    
        }
        
        for (let i = 0; i < 5; i++){
        info = JSON.parse(http.response)
        info = info.results[i];
        console.log(info);
        onePerson[i].innerHTML = "Gender: " + JSON.stringify(info.gender).slice(1, -1) + " <br> First name: " + JSON.stringify(info.name.first).slice(1, -1) + " <br> Last name: " + JSON.stringify(info.name.last).slice(1, -1);
        }

        loadMore = document.createElement("button");
        loadMore = document.body.appendChild(loadMore);
        loadMore.innerHTML = "Load more";
        
        loadMore.addEventListener('click', moreInfo)

        loadMore.classList.add("fixed");

    }

    function moreInfo(){

        let n = Number(document.querySelectorAll("p").length);

        for (let i = 0; i < 5; i++){
            var el = document.createElement("p");
            container.appendChild(el);
            onePerson = document.querySelectorAll("p");    
        }
        
        for (let i = n; i < n + 5; i++){
            info = JSON.parse(http.response)
            info = info.results[i];
            console.log(info);
            onePerson[i].innerHTML = "Gender: " + JSON.stringify(info.gender).slice(1, -1) + " <br> First name: " + JSON.stringify(info.name.first).slice(1, -1) + " <br> Last name: " + JSON.stringify(info.name.last).slice(1, -1);
            }
    }
    

    http.open("GET", url);

    http.send();
