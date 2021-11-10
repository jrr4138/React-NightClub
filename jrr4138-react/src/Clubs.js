import React from 'react';

class Clubs extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            club: "",
            count: 0,
            color: "green"
        }
    };

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares,
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
        });
    }




    render(){
        return(
            <div>
                <div id="Arcanebox">Club Arcane
                    <br></br>
                    <p id="ClubArcaneMessage">Welcome!</p>
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
                <p id="ClubArcaneCount">0</p>
                <p id="ClubUndergroundCount">0</p>
                <p id="ClubSodaCount">0</p>
                <p id="StudioCount">0</p>
                <br></br>
                <h2>
                    <input type="radio" id="Arcane" name="club" value="Club Arcane"></input>
                    <label for="Arcane">Club Arcane</label>
                    <br></br>
                    <input type="radio" id="Underground" name="club" value="Club Underground"></input>
                    <label for="Underground">Club Underground</label>
                    <br></br>
                    <input type="radio" id="Soda" name="club" value="Club Soda"></input>
                    <label for="Soda">Club Soda</label>
                    <br></br>
                    <input type="radio" id="Studio" name="club" value="Studio 52"></input>
                    <label for="Studio">Studio 52</label>
                    <br></br>
                    <br></br>
                    <input type="button" name="+" value="+" onclick="increase()"></input>
                    <input type="button" name="-" value="-" onclick="decrease()"></input>
                </h2>
            </div>
        )
    }
}
export default Clubs;