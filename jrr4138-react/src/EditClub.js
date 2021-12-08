import React from 'react';
import {Label, Button, Input, Container, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardTitle, CardText} from 'reactstrap';

class EditClub extends React.Component{

    constructor(props) {
        super(props);
        /* Need to have single datapiece to send back to Clubs.js */
        let listData = {name: "", location: "", music: "", yellow: "", red: ""}
        this.state = {changedDetails: listData}
    };

    /* Updates name to new inputted name */
    editName=(newName)=>{
        const data = {...this.state.changedDetails, name: newName.target.value};
        this.setState({changedDetails: data});
    }

    /* Updates location to new inputted location */
    editLocation=(newLocation)=>{
        const data = {...this.state.changedDetails, location: newLocation.target.value};
        this.setState({changedDetails: data});
    }

    /* Updates music to new inputted music */
    editMusic=(newMusic)=>{
        const data = {...this.state.changedDetails, music: newMusic.target.value};
        this.setState({changedDetails: data});
    }

    /* Updates lower limit to new inputted lower limit */
    editYellow=(newYellow)=>{
        const data = {...this.state.changedDetails, yellow: newYellow.target.value};
        this.setState({changedDetails: data});
    }

    /* Updates upper limit to new inputted upper limit */
    editRed=(newRed)=>{
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
                <ModalHeader>Edit Club</ModalHeader>
                <ModalBody>
                    <Label>Club Name</Label>
                    <Input type="text" onChange={this.editName}/>
                    <Label>Location of Club</Label>
                    <Input type="text" onChange={this.editLocation}/>
                    <Label>Music</Label>
                    <Input type="text" onChange={this.editMusic}/>
                    <Label>Warning Capacity</Label>
                    <Input type="number" min="0" onChange={this.editYellow}/>
                    <Label>Max Capacity</Label>
                    <Input type="number" min="0" onChange={this.editRed}/>
                </ModalBody>
                <ModalFooter>
                    <Button color="success" onClick={this.saved}>Save Changes</Button>
                </ModalFooter>
            </div>
        )
    }
}
export default EditClub;