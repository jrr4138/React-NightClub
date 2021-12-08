import React from 'react';
import {Button, Container, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardTitle, CardText} from 'reactstrap';

class AddClubs extends React.Component{

    constructor(props) {
        super(props);
        let values = {name: "", location: "", music: "", message: "", yellow: 80, red: 100}
        this.state = {clubDetails: values}
    };

    defineName=()=>{

    }

    defineLocation=()=>{

    }

    defineMusic=()=>{

    }

    defineMessage=()=>{

    }

    defineYellow=()=>{

    }

    defineRed=()=>{

    }

    render(){
        return(
            <div></div>
        )
    }
}
export default AddClubs;