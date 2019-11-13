import React, {Component} from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row
} from 'reactstrap';
import NutzungTabelle from './NutzungTabelle.js';
import NKFTabelle from './NKFTabelle.js';

const Nutzung = () => {
  return  (
    <div className="animated fadeIn">
        <Row>
            <Col>
                <Card>
                    <CardHeader>
                        <i className="fa fa-align-justify"></i> Rechte und Belastungen
                    </CardHeader>
                    <CardBody>
                        <NutzungTabelle />
                    </CardBody>
                </Card>
            </Col>
        </Row>
        <Row>
            <Col>
                <Card>
                    <CardHeader>
                        <i className="fa fa-align-justify"></i> NKF Übersicht
                    </CardHeader>
                    <CardBody>
                        <NKFTabelle />
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </div>)
}


export default Nutzung;