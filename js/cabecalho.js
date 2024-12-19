document.addEventListener('DOMContentLoaded', function(){
    const cabecalho = document.querySelector('.containerHeader');
    const searchBar = document.querySelector('.search-bar');
    const logoContainer = document.querySelector('.logoContainer');
    
    window.addEventListener('scroll', function(){
        if(window.scrollY > 50){
            cabecalho.classList.add('scrolled');
            logoContainer.classList.add('logoContainerNone');
        }
        else{
            cabecalho.classList.remove('scrolled');
            logoContainer.classList.remove('logoContainerNone');
        }
    });

    cabecalho.addEventListener('mouseover', function(){
        if(!searchBar.contains(event.target)){
            cabecalho.classList.add('scrolled');
        }
    });

    cabecalho.addEventListener('mouseout', function(){
        if(!searchBar.contains(event.target) && window.scrollY <= 50){
            cabecalho.classList.remove('scrolled');
        }
    });
});

let dropdownBtn = document.getElementById("drop-text");
let list = document.getElementById("list");
let icon = document.getElementById("iconOptions");
let span = document.getElementById("span");
let input = document.querySelectorAll(".search-input");
let listItems = document.querySelectorAll(".dropdown-list-item");

dropdownBtn.onclick = function(){
    if(list.classList.contains('show')){
        icon.style.rotate = "0deg";
    }else{
        icon.style.rotate = "-180deg";
    }

    list.classList.toggle("show");
};

window.onclick = function (e) {
    if(e.target.id !== "drop-text" &&
       e.target.id !== "span" &&
       e.target.id !== "icon"
    ){
        list.classList.remove('show');
        icon.style.rotate = "0deg";
    }
};

for (item of listItems){
    item.onclick=function(e){
        span.innerText = e.target.innerText;

        input.placeholder = "Procure por " + e.target.innerText + "...";
    };
}