import React from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  FormGroup,
  Label,
  Input
} from 'reactstrap';


const merkmalExists = (merkmal, mipa) => {
    if (mipa != null) {
        var merkmale = mipa.ar_mipa_merkmale;

        if (merkmale != null) {
            for (var index = 0; index < merkmale.length; ++index) {
                if (merkmale[index].bezeichnung === merkmal) {
                    return true;
                }
            }
        }
    }
    return false;
}


const MipaDetail = ({mipa: data}) => {
  return (
      <div>
      <Row>
          <Col lg="4" xs="4">
              <Card>
                  <CardHeader>
                      <i className="fa fa-align-justify"></i>Merkmale
                  </CardHeader>
                  <CardBody>
                    <FormGroup row>
                      <Col>
                        <FormGroup check className="checkbox">
                          <Input className="form-check-input" type="checkbox" id="ckUnentgeltlich" name="checkbox1" value="unentgeltlich" readOnly checked={merkmalExists('Unentgeltlich', data)}/>
                          <Label check className="form-check-label" htmlFor="ckUnentgeltlich">Unentgeltlich</Label>
                        </FormGroup>
                        <FormGroup check className="checkbox">
                          <Input className="form-check-input" type="checkbox" id="ckKeineAkte" name="checkbox2" value="keineAkte" readOnly checked={merkmalExists('keine Akte', data)} />
                          <Label check className="form-check-label" htmlFor="ckKeineAkte">keine Akte</Label>
                        </FormGroup>
                        <FormGroup check className="checkbox">
                          <Input className="form-check-input" type="checkbox" id="ckAltlast" name="checkbox3" value="Altlast" readOnly checked={merkmalExists('Altlast', data)} />
                          <Label check className="form-check-label" htmlFor="ckAltlast">Altlast</Label>
                        </FormGroup>
                        <FormGroup check className="checkbox">
                          <Input className="form-check-input" type="checkbox" id="ckBiotop" name="checkbox3" value="biotop" readOnly checked={merkmalExists('Biotop', data)} />
                          <Label check className="form-check-label" htmlFor="ckBiotop">Biotop</Label>
                        </FormGroup>
                        <FormGroup check className="checkbox">
                          <Input className="form-check-input" type="checkbox" id="ckGestaltung" name="checkbox3" value="gestaltung" readOnly checked={merkmalExists('Gestaltung', data)} />
                          <Label check className="form-check-label" htmlFor="ckGestaltung">Gestaltung</Label>
                        </FormGroup>
                      </Col>
                    </FormGroup>
                  </CardBody>
              </Card>
          </Col>
          {/*Querverweise werden über eine Suche gefunden und sind nicht im Flurstueck enthalten-*/}
          <Col lg="4" xs="4">
              <Card>
                  <CardHeader>
                      <i className="fa fa-align-justify"></i>Querverweise
                  </CardHeader>
                  <CardBody>
                      <FormGroup row>
                        <div style={{height: "105px"}}>
                            <div>Langerfeld 450 46/0</div>
                            <div>Langerfeld 449 118/0</div>
                            <div>Langerfeld 449 126/0</div>
                        </div>
                      </FormGroup>
                  </CardBody>
              </Card>
          </Col>
          <Col lg="4" xs="4">
              <Card>
                  <CardHeader>
                      <i className="fa fa-align-justify"></i>Bemerkung
                  </CardHeader>
                  <CardBody>
                    <FormGroup row>
                      <Col xs="12" md="9">
                        <Input type="textarea" style={{height: "105px"}} name="textarea-input" id="textarea-input" readOnly value={(data === null ? ' ' : data.bemerkung)} />
                      </Col>
                    </FormGroup>
                  </CardBody>
              </Card>
          </Col>
      </Row>
      </div>
      );
}

export default MipaDetail;
