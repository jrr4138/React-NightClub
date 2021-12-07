import React from 'react';
import {Button, Container, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardTitle, CardText} from 'reactstrap';

class Clubs extends React.Component{

    constructor(props) {
        super(props);
        let values = {name: props.name, location: props.location, music: props.music, yellow: props.yellow, red: props.red}
        this.state = {count: 0, clubDetails: values}
    };

    incrementClub=()=>{

    }

    decrementClub=()=>{

    }

    /* Might need some params here, not sure how it will work yet */
    createClub=()=>{

    }

    render(){
        return(
            <div>
                <Row>
                    <Col sm="3">
                        <Card body color="primary" inverse>
                            <CardTitle tag="h3">
                                Club Arcane
                            </CardTitle>
                            <CardText tag="h5">
                                Music: {}
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

                    <Col sm="3">
                        <Card body color="warning" inverse>
                            <CardTitle tag="h3">
                                Club Underground
                            </CardTitle>
                            <CardText tag="h5">
                                Our club is rad!
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

                    <Col sm="3">
                        <Card body color="info" inverse>
                            <CardTitle tag="h3">
                                Club Soda
                            </CardTitle>
                            <CardText tag="h5">
                                Our club is awesome!
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
                    
                    <Col sm="3">
                        <Card body color="secondary" inverse>
                            <CardTitle tag="h3">
                                Studio 52
                            </CardTitle>
                            <CardText tag="h5">
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
            </div>
        )
    }
}
export default Clubs;