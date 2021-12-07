import React from 'react';
import {Button, Container, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardTitle, CardText} from 'reactstrap';

class ClubEdit extends React.Component{

    constructor(props) {
        super(props);
        let values = {name: "", location: "", music: "", message: "", yellow: "", red: ""}
        this.state = {details: values}
    };

    render(){
        return(
            <div></div>
        )
    }
}
export default ClubEdit;