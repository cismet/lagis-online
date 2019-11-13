import React from 'react';
import RebeTabelle from './RebeTabelle.js';
import {Card, CardBody, CardHeader, Col, Row} from 'reactstrap';
import LagisMap from '../Commons/LagisMap';




const Rebe = () => {
  return  (
    <div className="animated fadeIn">
        <Row>
            <Col>
                <Card>
                    <CardHeader>
                        <i className="fa fa-align-justify"></i> Rechte und Belastungen
                    </CardHeader>
                    <CardBody>
                        <RebeTabelle />
                    </CardBody>
                </Card>
            </Col>
        </Row>
        <Row>
            <Col>
                <Card>
                    <CardHeader>
                        <i className="fa fa-align-justify"></i> Karte
                    </CardHeader>
                    <CardBody>
                        <LagisMap />
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </div>)
}


export default Rebe;
