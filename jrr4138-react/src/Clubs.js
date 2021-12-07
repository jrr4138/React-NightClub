import React from 'react';
import {Button, Container, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardTitle, CardText} from 'reactstrap';
import AddClub from './AddClub';
import ClubEdit from './ClubEdit';

class Clubs extends React.Component{

    constructor(props) {
        super(props);
        let values = {name: props.name, location: props.location, music: props.music, message: props.message, yellow: props.yellow, red: 10}
        this.state = {count: 0, clubDetails: values}
    };

    incrementClub=()=>{
        this.setState({count: this.state.count + 1});
    }

    decrementClub=()=>{
        this.setState({count: this.state.count - 1});
    }

    editClub=()=>{
        
    }

    render(){
        return(
                <Row>
                    <Col sm="3">
                        <Card body color="primary" inverse>
                            <CardTitle tag="h3">
                                Club Arcane
                            </CardTitle>
                            <CardText tag="h5">
                                <Row>Location: {this.state.clubDetails.location}</Row>
                                <Row>Music: {this.state.clubDetails.music}</Row>
                                <Row>.{this.state.clubDetails.message}</Row>
                                <Row>{this.state.count}</Row>
                            </CardText>
                            <br></br>
                            <Button color="success" disabled={this.isIncrementable} onClick={this.incrementClub}>increment</Button>
                            <br></br>
                            <Button color="danger" disabled={this.isDecrementable} onClick={this.decrementClub}>decrement</Button>
                        </Card>
                    </Col>
                </Row>
        )
    }
}
export default Clubs;