function menu(id) {
    x = document.getElementById(id);
    if(x == "club_arcane") {
        x.value = "Name: Club Arcane\nLocation: Tonanto\nMusic: Pop";
    } else if(x == "2") {
        x.value = "Name: Club Underground\nLocation: Los Angeles\nMusic: Rock";
    } else if(x == "3") {
        x.value = "Name: Club Soda\nLocation: Montreal\nMusic: Jazz";
    } else if(x == "4") {
        x.value = "Name: Studio 52\nLocation: New York City\nMusic: Pop";
    } else if(x == "5") {
        x.value = "Name: Circo's\nLocation: Woodbridge\nMusic: Rock";
    } else if(x == "6") {
        x.value = "Name: Paradisio Garage\nLocation: New York City\nMusic: Rock";
    }
}