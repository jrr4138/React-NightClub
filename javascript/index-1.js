GREEN = "Welcome!"
YELLOW = "Warn the bouncers..."
RED = "No one allowed in!"

function increase() {
    var club = document.getElementByName("club");
    if(club == null){

    }
    else if(club == document.getElementById("1")){
        count = document.getElementByName("ClubArcaneCount").innerHTML;
        if(count == 100){
            document.getElementById("Arcanebox").style.backgroundColor = "red";
            document.getElementById("ClubArcaneMessage").innerHTML = RED;
        }
        
        else if(count >= 70 && count < 100){
            count++;
            document.getElementById("Arcanebox").style.backgroundColor = "yellow";
            document.getElementById("ClubArcaneMessage").innerHTML = YELLOW;
        } 
        else{
            count++;
            document.getElementById("Arcanebox").style.backgroundColor = "green";
            document.getElementById("ClubArcaneMessage").innerHTML = GREEN;
        }

    }
}

function decrease() {
    var club = document.getElementByName("club");
    
}