GREEN = "Welcome!"
YELLOW = "Warn the bouncers..."
RED = "No one allowed in!"

function increase() {
    var clubs = document.getElementsByName("club");
    selected = null;
    for (let club of clubs){
        if (club.checked) {
            selected = club;
        }
    }
    if(selected == document.getElementById("Arcane")){
        count = document.getElementById("ClubArcaneCount").innerHTML;
        if(count == 100){
            document.getElementById("Arcanebox").style.backgroundColor = "red";
            document.getElementById("ClubArcaneMessage").innerHTML = RED;
        }
        else if(count == 99){
            count++;
            document.getElementById("Arcanebox").style.backgroundColor = "red";
            document.getElementById("ClubArcaneMessage").innerHTML = RED;
        }
        else if(count >= 69 && count < 99){
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

    if(selected == document.getElementById("Underground")){
        count = document.getElementById("ClubUndergroundCount").innerHTML;
        if(count == 50){
            document.getElementById("Undergroundbox").style.backgroundColor = "red";
            document.getElementById("ClubUndergroundMessage").innerHTML = RED;
        }
        else if(count == 49){
            count++;
            document.getElementById("Undergroundbox").style.backgroundColor = "red";
            document.getElementById("ClubUndergroundMessage").innerHTML = RED;
        }
        else if(count >= 29 && count < 49){
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

    if(selected == document.getElementById("Soda")){
        count = document.getElementById("ClubSodaCount").innerHTML;
        if(count == 20){
            document.getElementById("Sodabox").style.backgroundColor = "red";
            document.getElementById("ClubSodaMessage").innerHTML = RED;
        }
        else if(count == 19){
            count++;
            document.getElementById("Sodabox").style.backgroundColor = "red";
            document.getElementById("ClubSodaMessage").innerHTML = RED;
        }
        else if(count >= 11 && count < 19){
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

    if(selected == document.getElementById("Studio")){
        count = document.getElementById("StudioCount").innerHTML;
        if(count == 52){
            document.getElementById("Studiobox").style.backgroundColor = "red";
            document.getElementById("StudioMessage").innerHTML = RED;
        }
        else if(count == 51){
            count++;
            document.getElementById("Studiobox").style.backgroundColor = "red";
            document.getElementById("StudioMessage").innerHTML = RED;
        }
        else if(count >= 31 && count < 51){
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
    var clubs = document.getElementsByName("club");
    selected = null;
    for (let club of clubs){
        if (club.checked) {
            selected = club;
        }
    }
    if(selected == document.getElementById("Arcane")){
        count = document.getElementById("ClubArcaneCount").innerHTML;
        if(count == 0){
            document.getElementById("Arcanebox").style.backgroundColor = "green";
            document.getElementById("ClubArcaneMessage").innerHTML = GREEN;
        }
        else if(count <= 70){
            count--;
            document.getElementById("Arcanebox").style.backgroundColor = "green";
            document.getElementById("ClubArcaneMessage").innerHTML = GREEN;
        }
        else {
            count--;
            document.getElementById("Arcanebox").style.backgroundColor = "yellow";
            document.getElementById("ClubArcaneMessage").innerHTML = YELLOW;
        }
        document.getElementById("ClubArcaneCount").innerHTML = count;
    }

    if(selected == document.getElementById("Underground")){
        count = document.getElementById("ClubUndergroundCount").innerHTML;
        if(count == 0){
            document.getElementById("Undergroundbox").style.backgroundColor = "green";
            document.getElementById("ClubUndergroundMessage").innerHTML = GREEN;
        }
        else if(count <= 30){
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

    if(selected == document.getElementById("Soda")){
        count = document.getElementById("ClubSodaCount").innerHTML;
        if(count == 0){
            document.getElementById("Sodabox").style.backgroundColor = "green";
            document.getElementById("ClubSodaMessage").innerHTML = GREEN;
        }
        else if(count <= 12){
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

    if(selected == document.getElementById("Studio")){
        count = document.getElementById("StudioCount").innerHTML;
        if(count == 0){
            document.getElementById("Studiobox").style.backgroundColor = "green";
            document.getElementById("StudioMessage").innerHTML = GREEN;
        }
        else if(count <= 32){
            count--;
            document.getElementById("Studiobox").style.backgroundColor = "green";
            document.getElementById("StudioMessage").innerHTML = GREEN;
        } 
        else{
            count--;
            document.getElementById("Studiobox").style.backgroundColor = "yellow";
            document.getElementById("StudioMessage").innerHTML = YELLOW;
        }
        document.getElementById("StudioCount").innerHTML = count;
    }
}