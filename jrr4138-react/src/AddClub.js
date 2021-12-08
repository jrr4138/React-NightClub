import React from 'react';
import {Label, Button, Input, Container, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardTitle, CardText} from 'reactstrap';

class AddClub extends React.Component{

    constructor(props) {
        super(props);
        /* Need to have single datapiece to send back to Clubs.js */
        let listData = {name: "", location: "", music: "", yellow: 80, red: 100}
        this.state = {changedDetails: listData}
    };

    /* Updates name to new inputted name */
    defineName=(newName)=>{
        const data = {...this.state.changedDetails, name: newName.target.value};
        this.setState({changedDetails: data});
    }

    /* Updates location to new inputted location */
    defineLocation=(newLocation)=>{
        const data = {...this.state.changedDetails, location: newLocation.target.value};
        this.setState({changedDetails: data});
    }

    /* Updates music to new inputted music */
    defineMusic=(newMusic)=>{
        const data = {...this.state.changedDetails, music: newMusic.target.value};
        this.setState({changedDetails: data});
    }

    /* Updates lower limit to new inputted lower limit */
    defineYellow=(newYellow)=>{
        const data = {...this.state.changedDetails, yellow: newYellow.target.value};
        this.setState({changedDetails: data});
    }

    /* Updates upper limit to new inputted upper limit */
    defineRed=(newRed)=>{
        const data = {...this.state.changedDetails, red: newRed.target.value};
        this.setState({changedDetails: data});
    }

    /* Saves the changes made and applies them to the edited club */
    saved=()=>{
        this.props.saveChanges(this.state.changedDetails);
    }

    render(){
        return(
            <div>
                <ModalHeader>Add New Club</ModalHeader>
                <ModalBody>
                    <Label>Club Name</Label>
                    <Input type="text" onChange={this.defineName} placeholder="ex: 'Puzzles'"></Input>
                    <Label>Location of Club</Label>
                    <Input type="text" onChange={this.defineLocation} placeholder="ex: 'London, England'"></Input>
                    <Label>Music</Label>
                    <Input type="text" onChange={this.defineMusic} placeholder="ex: 'Rock'"></Input>
                    <Label>Warning Capacity</Label>
                    <Input type="number" min="0" onChange={this.defineYellow} placeholder="ex: '80'"></Input>
                    <Label>Max Capacity</Label>
                    <Input type="number" min="0" onChange={this.defineRed} placeholder="ex: '100'"></Input>
                </ModalBody>
                <ModalFooter>
                    <Button color="success" onClick={this.saved}>Save Changes</Button>
                </ModalFooter>
            </div>
        )
    }
}
export default AddClub;