import React, { useState } from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row
} from 'reactstrap';
import VertraegeTabelle from './VertraegeTabelle.js'
import jsonData from './../../assets/json/fs_18082.json';
import VertragDetails from './VertragDetails.js'


const extractVertragById = (flurstueck, id) => {
    var mipas = flurstueck.mipas;

    if (mipas != null) {
      for (var index = 0; index < mipas.length; ++index) {
        if (mipas[index].id === id) {
          return mipas[index];
        }
      }
    }

    return null;    
}


const Vorgaenge = () => {
  const [selectedVertrag, setSelectedVertrag] = useState(null);

  const vertragListener = (id) => {
    if (id === null) {
      setSelectedVertrag(null);
    } else {
      setSelectedVertrag(extractVertragById(jsonData, id));
    }
  }

  return (
    <div className="animated fadeIn">
      <Row>
          <Col>
              <Card>
                  <CardHeader>
                      <i className="fa fa-align-justify"></i> Dienststellen
                  </CardHeader>
                  <CardBody>
                      <VertraegeTabelle flurstueck={jsonData} selectionListener={vertragListener} />
                  </CardBody>
              </Card>
          </Col>
      </Row>
      <Row>
          <Col>
            <VertragDetails mipa={selectedVertrag} />
          </Col>
      </Row>
    </div>);
}

export default Vorgaenge;
