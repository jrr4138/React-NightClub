import React from 'react';
import {Button, Container, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardTitle, CardText} from 'reactstrap';
import AddClub from './AddClub';
import ClubEdit from './ClubEdit';

class Clubs extends React.Component{

    constructor(props) {
        super(props);
        let values = {name: props.name, location: props.location, music: props.music, message: props.message, yellow: 8, red: 10}
        this.state = {count: 0, clubDetails: values}
    };

    incrementClub=()=>{
        this.setState({count: this.state.count + 1});
    }

    decrementClub=()=>{
        this.setState({count: this.state.count - 1});
    }

    render(){
        /* Changes background color of club based on count [capacity limits] */ 
        let color;
        if(this.state.count == this.state.clubDetails.red){ 
            color = "danger"; 
        }
        else if(this.state.count >= this.state.clubDetails.yellow){
            color = "warning";
        }
        else {
            color = "success";
        }

        /* Turns buttons on/off depending on count */
        let isIncrementable = false;
        let isDecrementable = false;
        if(this.state.count == 0){
            isDecrementable = true;
        }
        if(this.state.count == this.state.clubDetails.red){
            isIncrementable = true;
        }

        return(
            <Row>
                <Col sm="3">
                    <Card body color={color} inverse>
                        <CardTitle tag="h3">
                            Club: {this.state.clubDetails.name}
                        </CardTitle>
                        <CardText tag="h5">
                            <Row>Location: {this.state.clubDetails.location}</Row>
                            <Row>Music: {this.state.clubDetails.music}</Row>
                            <Row>Message: {this.state.clubDetails.message}</Row>
                            <Row>Occupancy: {this.state.count}</Row>
                        </CardText>
                        <br></br>
                        <Button color="primary" disabled={isIncrementable} onClick={this.incrementClub}>Increment</Button>
                        <br></br>
                        <Button color="info" disabled={isDecrementable} onClick={this.decrementClub}>Decrement</Button>
                        <br></br>
                        <Button color="secondary" onClick>Edit</Button>
                    </Card>
                </Col>
            </Row>
        )
    }
}
export default Clubs;