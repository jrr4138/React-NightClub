import React from 'react';

class Clubs extends React.Component{
    
    GREEN = "Welcome!";
    YELLOW = "Warn the bouncers...";
    RED = "No one allowed in!";

    ClubArcaneMessage = this.GREEN;
    ClubUndergroundMessage = this.GREEN;
    ClubSodaMessage = this.GREEN;
    ClubStudioMessage = this.GREEN;

    constructor(props) {
        super(props);
        this.state = {
            club: "",
            countArcane: 0,
            countUnderground: 0,
            countSoda: 0,
            countStudio: 0,
            color: "green",
        }
    };

    buttonClick(i) {
        // why is it 3 equals signs??
        if(i.target.value == "+"){
            if(this.state.club == "arcane"){
                if(this.state.countArcane == 100){
                    this.setState({color: "red"});
                    this.ClubArcaneMessage = this.RED;
                }
                else if(this.state.countArcane == 99){
                    this.setState({countArcane: this.state.countArcane + 1, color: "red"});
                    this.ClubArcaneMessage = this.RED;
                }
                else if(this.state.countArcane >= 69 && this.state.countArcane < 99){
                    this.setState({countArcane: this.state.countArcane + 1, color: "yellow"});
                    this.ClubArcaneMessage = this.YELLOW;
                }
                else{
                    this.setState({countArcane: this.state.countArcane + 1, color: "green"});
                    this.ClubArcaneMessage = this.GREEN;
                }
            }
        }
        else if(i.target.value == "-"){
            if(this.state.club == "arcane"){
                if(this.state.countArcane == 0){
                    this.setState({color: "green"});
                    this.ClubArcaneMessage = this.GREEN;
                }
                else if(this.state.countArcane <= 70){
                    this.setState({countArcane: this.state.countArcane - 1, color: "green"});
                    this.ClubArcaneMessage = this.GREEN;
                }
                else{
                    this.setState({countArcane: this.state.countArcane - 1, color: "yellow"});
                    this.ClubArcaneMessage = this.YELLOW;
                }
            }
        }
    }

    clubSelect(i) {
        this.setState({club: i.target.id});
    }

    render(){
        return(
            <div>
                <div id="Arcanebox">Club Arcane
                    <br></br>
                    <p id="ClubArcaneMessage">{this.ClubArcaneMessage}</p>
                </div>
                <div id="Undergroundbox">Club Underground
                    <br></br>
                    <p id="ClubUndergroundMessage">Welcome!</p>
                </div>
                <div id="Sodabox">Club Soda
                    <br></br>
                    <p id="ClubSodaMessage">Welcome!</p>
                </div>
                <div id="Studiobox">Studio 52
                    <br></br>
                    <p id="StudioMessage">Welcome!</p>
                </div>
                <br></br>
                <p id="ClubArcaneCount">{this.state.countArcane}</p>
                <p id="ClubUndergroundCount">0</p>
                <p id="ClubSodaCount">0</p>
                <p id="StudioCount">0</p>
                <br></br>
                <h2>
                    <input type="radio" id="arcane" name="club" value="Club Arcane" onChange={(i) => this.clubSelect(i)}></input>
                    <label for="Arcane">Club Arcane</label>
                    <br></br>
                    <input type="radio" id="underground" name="club" value="Club Underground" onChange={(i) => this.clubSelect(i)}></input>
                    <label for="Underground">Club Underground</label>
                    <br></br>
                    <input type="radio" id="soda" name="club" value="Club Soda" onChange={(i) => this.clubSelect(i)}></input>
                    <label for="Soda">Club Soda</label>
                    <br></br>
                    <input type="radio" id="studio" name="club" value="Studio 52" onChange={(i) => this.clubSelect(i)}></input>
                    <label for="Studio">Studio 52</label>
                    <br></br>
                    <br></br>
                    <input type="button" name="+" value="+" onClick={(i) => this.buttonClick(i)}></input>
                    <input type="button" name="-" value="-" onClick={(i) => this.buttonClick(i)}></input>
                </h2>
            </div>
        )
    }
}
export default Clubs;