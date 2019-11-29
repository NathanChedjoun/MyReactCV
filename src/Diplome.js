import React, { Component } from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import './Diplome.css';

class Diplome extends Component {

    render(){
        return (
            <Card className="diplome">
                <CardBody>
                    <CardTitle className="titreDiplome">{this.props.titre}</CardTitle>
                    <CardSubtitle className="sousTitre">{this.props.ecole},{this.props.emplacement} | {this.props.duree}</CardSubtitle>
                    <CardText>{this.props.description}</CardText>
                </CardBody>
            </Card>
        );
    }
}

export default Diplome;
