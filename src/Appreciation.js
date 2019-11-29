import React, { Component } from 'react';
import { Progress } from 'reactstrap';
import { Row, Col } from 'reactstrap';
import './Appreciation.css';


class Appreciation extends Component {

    render(){
        return (
            <Row>
                <Col sm={6}>{this.props.description}</Col>
                <Col><Progress color="success" value={this.props.valeur} /></Col>
            </Row>
        );
    }
}

export default Appreciation;
