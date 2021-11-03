GREEN = "Welcome!"
YELLOW = "Warn the bouncers..."
RED = "No one allowed in!"

function increase() {
    var club = document.getElementByName("club");
    if(club == null){

    }
    else if(club == document.getElementById("Arcane")){
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
        document.getElementById("ClubArcaneCount").innerHTML = count;
    }

    else if(club == document.getElementById("Underground")){
        count = document.getElementByName("ClubUndergroundCount").innerHTML;
        if(count == 50){
            document.getElementById("Undergroundbox").style.backgroundColor = "red";
            document.getElementById("ClubUndergroundMessage").innerHTML = RED;
        }
        
        else if(count >= 30 && count < 50){
            count++;
            document.getElementById("Undergroundbox").style.backgroundColor = "yellow";
            document.getElementById("ClubUndergroundMessage").innerHTML = YELLOW;
        } 
        else{
            count++;
            document.getElementById("Undergroundbox").style.backgroundColor = "green";
            document.getElementById("ClubUndergroundMessage").innerHTML = GREEN;
        }
        document.getElementById("ClubUndergroundCount").innerHTML = count;
    }

    else if(club == document.getElementById("Soda")){
        count = document.getElementByName("ClubSodaCount").innerHTML;
        if(count == 20){
            document.getElementById("Sodabox").style.backgroundColor = "red";
            document.getElementById("ClubSodaMessage").innerHTML = RED;
        }
        
        else if(count >= 12 && count < 20){
            count++;
            document.getElementById("Sodabox").style.backgroundColor = "yellow";
            document.getElementById("ClubSodaMessage").innerHTML = YELLOW;
        } 
        else{
            count++;
            document.getElementById("Sodabox").style.backgroundColor = "green";
            document.getElementById("ClubSodaMessage").innerHTML = GREEN;
        }
        document.getElementById("ClubSodaCount").innerHTML = count;
    }

    else if(club == document.getElementById("Studio")){
        count = document.getElementByName("StudioCount").innerHTML;
        if(count == 52){
            document.getElementById("Studiobox").style.backgroundColor = "red";
            document.getElementById("StudioMessage").innerHTML = RED;
        }
        
        else if(count >= 32 && count < 52){
            count++;
            document.getElementById("Studiobox").style.backgroundColor = "yellow";
            document.getElementById("StudioMessage").innerHTML = YELLOW;
        } 
        else{
            count++;
            document.getElementById("Studiobox").style.backgroundColor = "green";
            document.getElementById("StudioMessage").innerHTML = GREEN;
        }
        document.getElementById("StudioCount").innerHTML = count;
    }

}

function decrease() {
    var club = document.getElementByName("club");
    if(club == null){
        
    }
    else if(club == document.getElementById("Arcane")){
        count = document.getElementByName("ClubArcaneCount").innerHTML;
        if(count == 0){
            document.getElementById("Arcanebox").style.backgroundColor = "green";
            document.getElementById("ClubArcaneMessage").innerHTML = GREEN;
        }
        else if(count <= 71){
            count--;
            document.getElementById("Arcanebox").style.backgroundColor = "green";
            document.getElementById("ClubArcaneMessage").innerHTML = GREEN;
        }
        else {
            count--;
            document.getElementById("Arcanebox").style.backgroundColor = "yellow";
            document.getElementById("ClubArcaneMessage").innerHTML = YELLOW;
        }
    }

    else if(club == document.getElementById("Underground")){
        count = document.getElementByName("ClubUndergroundCount").innerHTML;
        if(count == 0){
            document.getElementById("Undergroundbox").style.backgroundColor = "green";
            document.getElementById("ClubUndergroundMessage").innerHTML = GREEN;
        }
        
        else if(count <= 31){
            count--;
            document.getElementById("Undergroundbox").style.backgroundColor = "green";
            document.getElementById("ClubUndergroundMessage").innerHTML = GREEN;
        } 
        else{
            count--;
            document.getElementById("Undergroundbox").style.backgroundColor = "yellow";
            document.getElementById("ClubUndergroundMessage").innerHTML = YELLOW;
        }
        document.getElementById("ClubUndergroundCount").innerHTML = count;
    }

    else if(club == document.getElementById("Soda")){
        count = document.getElementByName("ClubSodaCount").innerHTML;
        if(count == 0){
            document.getElementById("Sodabox").style.backgroundColor = "green";
            document.getElementById("ClubSodaMessage").innerHTML = GREEN;
        }
        
        else if(count <= 13){
            count--;
            document.getElementById("Sodabox").style.backgroundColor = "green";
            document.getElementById("ClubSodaMessage").innerHTML = GREEN;
        } 
        else{
            count--;
            document.getElementById("Sodabox").style.backgroundColor = "yellow";
            document.getElementById("ClubSodaMessage").innerHTML = YELLOW;
        }
        document.getElementById("ClubSodaCount").innerHTML = count;
    }

    else if(club == document.getElementById("Studio")){
        count = document.getElementByName("StudioCount").innerHTML;
        if(count == 0){
            document.getElementById("Studiobox").style.backgroundColor = "green";
            document.getElementById("ClubStudioMessage").innerHTML = GREEN;
        }
        
        else if(count <= 33){
            count--;
            document.getElementById("Studiobox").style.backgroundColor = "green";
            document.getElementById("ClubStudioMessage").innerHTML = GREEN;
        } 
        else{
            count--;
            document.getElementById("Studiobox").style.backgroundColor = "yellow";
            document.getElementById("ClubStudioMessage").innerHTML = YELLOW;
        }
        document.getElementById("StudioCount").innerHTML = count;
    }    
}