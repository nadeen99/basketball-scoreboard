let homeCounter =0;
let homeEl = document.getElementById("home")
// HOME FUNCTIONS
function homeAddOne(){
    homeCounter+=1;
    homeEl.textContent=homeCounter;
}
function homeAddTwo(){
    homeCounter+=2;
    homeEl.textContent=homeCounter;
}
function homeAddThree(){
    homeCounter+=3;
    homeEl.textContent=homeCounter;
}

//GUEST FUNCTIONS
let guestCounter =0;
let guestEl = document.getElementById("guest")

function guestAddOne(){
     guestCounter+=1;
    guestEl.textContent=guestCounter;
}
function guestAddTwo(){
     guestCounter+=2;
    guestEl.textContent=guestCounter;
}
function guestAddThree(){
     guestCounter+=3;
    guestEl.textContent=guestCounter;
}
// END FUNCTION
function end(){
    homeCounter=0;
    homeEl.textContent=0;
    guestCounter=0;
    guestEl.textContent=0
    
}