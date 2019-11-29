import React, { Component } from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import './Experience.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Experience extends Component {

    render(){
        return (
            <Card className="experience">
                <CardBody>
                    <CardTitle className="titreExperience">{this.props.titre}</CardTitle>
                    <CardSubtitle className="sousTitre">{this.props.societe},{this.props.emplacement} | {this.props.duree}</CardSubtitle>
                    <CardText>{this.props.theme}</CardText>
                    <FontAwesomeIcon icon={"user"}/> {this.props.contact} <br/>
                    <FontAwesomeIcon icon={"at"}/> {this.props.email}
                </CardBody>
            </Card>
        );
    }
}

export default Experience;
