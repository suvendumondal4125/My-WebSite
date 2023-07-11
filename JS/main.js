// header scroll
let nav = document.querySelector(".navbar");
window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
}


// nav hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})


//Good morning, 
let myDate = new Date();
let hrs = myDate.getHours();
let greet;
if(hrs>=0 && hrs<12){
    greet = 'Good Morning';
}
else if(hrs == 12){
    greet = 'Good Noon';
}
else if(hrs>=12 && hrs<=17){
    greet = 'Good Afternoon';
}
else if(hrs>=17 && hrs<20){
    greet = 'Good Evening';
}
else{
    greet = 'Good Night';
}
document.getElementById('time').innerHTML = greet;