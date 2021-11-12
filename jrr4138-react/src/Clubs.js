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
            ArcColor: "box",
            UndColor: "box",
            SodColor: "box",
            StuColor: "box",
        }
    };

    buttonClick(i) {
        // why is it 3 equals signs??
        if(i.target.value === "+"){
            if(this.state.club === "arcane"){
                if(this.state.countArcane === 100){
                    this.setState({ArcColor: "red"});
                    this.ClubArcaneMessage = this.RED;
                }
                else if(this.state.countArcane === 99){
                    this.setState({countArcane: this.state.countArcane + 1, ArcColor: "red"});
                    this.ClubArcaneMessage = this.RED;
                }
                else if(this.state.countArcane >= 69 && this.state.countArcane < 99){
                    this.setState({countArcane: this.state.countArcane + 1, ArcColor: "yellow"});
                    this.ClubArcaneMessage = this.YELLOW;
                }
                else{
                    this.setState({countArcane: this.state.countArcane + 1, ArcColor: "green"});
                    this.ClubArcaneMessage = this.GREEN;
                }
            }
            else if(this.state.club === "underground"){
                if(this.state.countUnderground === 50){
                    this.setState({UndColor: "red"});
                    this.ClubUndergroundMessage = this.RED;
                }
                else if(this.state.countUnderground === 49){
                    this.setState({countUnderground: this.state.countUnderground + 1, UndColor: "red"});
                    this.ClubUndergroundMessage = this.RED;
                }
                else if(this.state.countUnderground >= 29 && this.state.countUnderground < 49){
                    this.setState({countUnderground: this.state.countUnderground + 1, UndColor: "yellow"});
                    this.ClubUndergroundMessage = this.YELLOW;
                }
                else{
                    this.setState({countUnderground: this.state.countUnderground + 1, UndColor: "green"});
                    this.ClubUndergroundMessage = this.GREEN;
                }
            }
            else if(this.state.club === "soda"){
                if(this.state.countSoda === 20){
                    this.setState({SodColor: "red"});
                    this.ClubSodaMessage = this.RED;
                }
                else if(this.state.countSoda === 19){
                    this.setState({countSoda: this.state.countSoda + 1, SodColor: "red"});
                    this.ClubSodaMessage = this.RED;
                }
                else if(this.state.countSoda >= 11 && this.state.countSoda < 19){
                    this.setState({countSoda: this.state.countSoda + 1, SodColor: "yellow"});
                    this.ClubSodaMessage = this.YELLOW;
                }
                else{
                    this.setState({countSoda: this.state.countSoda + 1, SodColor: "green"});
                    this.ClubSodaMessage = this.GREEN;
                }
            }
            else if(this.state.club === "studio"){
                if(this.state.countStudio === 52){
                    this.setState({StuColor: "red"});
                    this.ClubStudioMessage = this.RED;
                }
                else if(this.state.countStudio === 51){
                    this.setState({countStudio: this.state.countStudio + 1, StuColor: "red"});
                    this.ClubStudioMessage = this.RED;
                }
                else if(this.state.countStudio >= 31 && this.state.countStudio < 51){
                    this.setState({countStudio: this.state.countStudio + 1, StuColor: "yellow"});
                    this.ClubStudioMessage = this.YELLOW;
                }
                else{
                    this.setState({countStudio: this.state.countStudio + 1, StuColor: "green"});
                    this.ClubStudioMessage = this.GREEN;
                }
            }
        }
        else if(i.target.value === "-"){
            if(this.state.club === "arcane"){
                if(this.state.countArcane === 0){
                    this.setState({ArcColor: "box"});
                    this.ClubArcaneMessage = this.GREEN;
                }
                else if(this.state.countArcane === 1){
                    this.setState({countArcane: this.state.countArcane - 1, ArcColor: "box"});
                    this.ClubArcaneMessage = this.GREEN;
                }
                else if(this.state.countArcane <= 70){
                    this.setState({countArcane: this.state.countArcane - 1, ArcColor: "green"});
                    this.ClubArcaneMessage = this.GREEN;
                }
                else{
                    this.setState({countArcane: this.state.countArcane - 1, ArcColor: "yellow"});
                    this.ClubArcaneMessage = this.YELLOW;
                }
            }
            else if(this.state.club === "underground"){
                if(this.state.countUnderground === 0){
                    this.setState({UndColor: "box"});
                    this.ClubUndergroundMessage = this.GREEN;
                }
                else if(this.state.countUnderground === 1){
                    this.setState({countUnderground: this.state.countUnderground - 1, UndColor: "box"});
                    this.ClubUndergroundMessage = this.GREEN;
                }
                else if(this.state.countUnderground <= 30){
                    this.setState({countUnderground: this.state.countUnderground - 1, UndColor: "green"});
                    this.ClubUndergroundMessage = this.GREEN;
                }
                else{
                    this.setState({countUnderground: this.state.countUnderground - 1, UndColor: "yellow"});
                    this.ClubUndergroundMessage = this.YELLOW;
                }
            }
            else if(this.state.club === "soda"){
                if(this.state.countSoda === 0){
                    this.setState({SodColor: "box"});
                    this.ClubSodaMessage = this.GREEN;
                }
                else if(this.state.countSoda === 1){
                    this.setState({countSoda: this.state.countSoda - 1, SodColor: "box"});
                    this.ClubSodaMessage = this.GREEN;
                }
                else if(this.state.countSoda <= 12){
                    this.setState({countSoda: this.state.countSoda - 1, SodColor: "green"});
                    this.ClubSodaMessage = this.GREEN;
                }
                else{
                    this.setState({countSoda: this.state.countSoda - 1, SodColor: "yellow"});
                    this.ClubSodaMessage = this.YELLOW;
                }
            }
            else if(this.state.club === "studio"){
                if(this.state.countStudio === 0){
                    this.setState({StuColor: "box"});
                    this.ClubStudioMessage = this.GREEN;
                }
                else if(this.state.countStudio === 1){
                    this.setState({countStudio: this.state.countStudio - 1, StuColor: "box"});
                    this.ClubStudioMessage = this.GREEN;
                }
                else if(this.state.countStudio <= 32){
                    this.setState({countStudio: this.state.countStudio - 1, StuColor: "green"});
                    this.ClubStudioMessage = this.GREEN;
                }
                else{
                    this.setState({countStudio: this.state.countStudio - 1, StuColor: "yellow"});
                    this.ClubStudioMessage = this.YELLOW;
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
                <div id={this.state.ArcColor}>Club Arcane
                    <br></br>
                    <p id="ClubArcaneMessage">{this.ClubArcaneMessage}</p>
                </div>
                <div id={this.state.UndColor}>Club Underground
                    <br></br>
                    <p id="ClubUndergroundMessage">{this.ClubUndergroundMessage}</p>
                </div>
                <div id={this.state.SodColor}>Club Soda
                    <br></br>
                    <p id="ClubSodaMessage">{this.ClubSodaMessage}</p>
                </div>
                <div id={this.state.StuColor}>Studio 52
                    <br></br>
                    <p id="StudioMessage">{this.ClubStudioMessage}</p>
                </div>
                <br></br>
                <p id="ClubArcaneCount">{this.state.countArcane}</p>
                <p id="ClubUndergroundCount">{this.state.countUnderground}</p>
                <p id="ClubSodaCount">{this.state.countSoda}</p>
                <p id="StudioCount">{this.state.countStudio}</p>
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