import React from 'react';
import {Button, Container, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardTitle, CardText} from 'reactstrap';

class Clubs extends React.Component{

    constructor(props) {
        super(props);
        
        this.state = {}
    };

    

    render(){
        return(
            <div>
                <Row>
                    <Col sm="3">
                        <Card body color="primary" inverse>
                            <CardTitle tag="h5">
                                Club Arcane
                            </CardTitle>
                            <CardText tag="h3">
                                Our club is cool!
                                <br></br>
                                <br></br>
                                0
                            </CardText>
                            <br></br>
                            <Button color="success">increment</Button>
                            <br></br>
                            <Button color="danger">decrement</Button>
                        </Card>
                    </Col>

                    <Col sm="3">
                        <Card body color="warning" inverse>
                            <CardTitle tag="h5">
                                Club 2
                            </CardTitle>
                            <CardText>
                                Our club is rad!
                                <br></br>
                                <br></br>
                                0
                            </CardText>
                            <br></br>
                            <Button color="success">increment</Button>
                            <br></br>
                            <Button color="danger">decrement</Button>
                        </Card>
                    </Col>

                    <Col sm="3">
                        <Card body color="info" inverse>
                            <CardTitle tag="h5">
                                Club 3
                            </CardTitle>
                            <CardText>
                                Our club is awesome!
                                <br></br>
                                <br></br>
                                0
                            </CardText>
                            <br></br>
                            <Button color="success">increment</Button>
                            <br></br>
                            <Button color="danger">decrement</Button>
                        </Card>
                    </Col>
                    
                    <Col sm="3">
                        <Card body color="secondary" inverse>
                            <CardTitle tag="h5">
                                Club 4
                            </CardTitle>
                            <CardText>
                                Our club is fantastic!
                                <br></br>
                                <br></br>
                                0
                            </CardText>
                            <br></br>
                            <Button color="success" onClick={this.incrementClub}>increment</Button>
                            <br></br>
                            <Button color="danger" onClick={this.decrementClub}>decrement</Button>
                    </Card>
                </Col>
            </Row><br></br>
            
            <div id={this.state.ArcColor}>Club Arcane
                    <br></br>
                    <p id="ClubArcaneMessage">{this.ClubArcaneMessage}</p>
                </div><div id={this.state.UndColor}>Club Underground
                    <br></br>
                    <p id="ClubUndergroundMessage">{this.ClubUndergroundMessage}</p>
                </div><div id={this.state.SodColor}>Club Soda
                    <br></br>
                    <p id="ClubSodaMessage">{this.ClubSodaMessage}</p>
                </div><div id={this.state.StuColor}>Studio 52
                    <br></br>
                    <p id="StudioMessage">{this.ClubStudioMessage}</p>
                </div><br></br><p id="ClubArcaneCount">{this.state.countArcane}</p><p id="ClubUndergroundCount">{this.state.countUnderground}</p><p id="ClubSodaCount">{this.state.countSoda}</p><p id="StudioCount">{this.state.countStudio}</p><br></br><h2>
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