import React from 'react';
import {Label, Button, Input, Container, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardTitle, CardText} from 'reactstrap';
import AddClub from './AddClub';
import EditClub from './EditClub';

class Clubs extends React.Component{

    constructor(props) {
        super(props);
        this.state = {count: 0, name: props.name, location: props.location, music: props.music, message: "", yellow: props.yellow, red: props.red, modalEdit: false, modalAdd: false}
    };

    incrementClub=()=>{
        this.setState({count: this.state.count + 1});
    }

    decrementClub=()=>{
        this.setState({count: this.state.count - 1});
    }

    openCloseModalEdit=()=>{
        this.setState({modalEdit: !this.state.modalEdit})
    }

    openCloseModalAdd=()=>{
        this.setState({modalAdd: !this.state.modalAdd})
    }

    changedValues=(data)=>{
        this.setState({count: data.count, name: data.name, location: data.location, music: data.music, yellow: data.yellow, red: data.red})
        this.openCloseModalEdit();
    }

    addedValues=(data)=>{
        this.openCloseModalAdd();
        return(
            <Col>
                <Clubs name={data.name} location={data.location} music={data.music} yellow={data.yellow} red={data.red}/>
            </Col>
        )
    }

    render(){
        /* Changes background color of club based on count [capacity limits] */
        let color;
        if(this.state.count == this.state.red){
            color = "danger";
            this.state.message = "No one allowed in!";
        }
        else if(this.state.count >= this.state.yellow){
            color = "warning";
            this.state.message = "Warn the bouncers...";
        }
        else {
            color = "success";
            this.state.message = "Welcome!";
        }

        /* Turns buttons on/off depending on count */
        let isIncrementable = false;
        let isDecrementable = false;
        if(this.state.count == 0){
            isDecrementable = true;
        }
        if(this.state.count == this.state.red){
            isIncrementable = true;
        }
        if(this.state.name == null){
            isIncrementable = true;
        }

        return(
            <div>
                {/* Currently does not function */}
                <Button color="primary" outline size="lg" onClick={this.openCloseModalAdd}>Add Club</Button>
                    <br></br>
                    <br></br>
                <Container>
                    <Row>
                        <Col sm="3">
                            <Card body color={color} inverse>
                                <CardTitle tag="h3">
                                    Club: {this.state.name}
                                </CardTitle>
                                <CardText tag="h5">
                                    <Row>Location: {this.state.location}</Row>
                                    <Row>Music: {this.state.music}</Row>
                                    <Row>Message: {this.state.message}</Row>
                                    <Row>Occupancy: {this.state.count}</Row>
                                </CardText>
                                    <br></br>
                                <Button color="primary" disabled={isIncrementable} onClick={this.incrementClub}>Increment (+)</Button>
                                    <br></br>
                                <Button color="info" disabled={isDecrementable} onClick={this.decrementClub}>Decrement (-)</Button>
                                    <br></br>
                                <Button color="secondary" onClick={this.openCloseModalEdit}>Edit</Button>
                            </Card>
                        </Col>
                        <Modal isOpen={this.state.modalAdd} toggle={this.openCloseModalAdd}>
                            <AddClub saveChanges={this.addedValues}/>
                        </Modal>
                    </Row>
                    <Modal isOpen={this.state.modalEdit} toggle={this.openCloseModalEdit}>
                        <EditClub saveChanges={this.changedValues}/>
                    </Modal>
                </Container>
            </div>
        )
    }
}
export default Clubs;