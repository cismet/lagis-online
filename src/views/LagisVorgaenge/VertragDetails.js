import React, { useState } from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  FormGroup,
  Label,
  Input,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane
} from 'reactstrap';
import KostenTabelle from './KostenTabelle.js'

const toggle = (tabPane, tab, activeTab, setActiveTab) => {
    const newArray = activeTab.slice()
    newArray[tabPane] = tab
    setActiveTab(newArray);
  }

const tabPane = (data) => {
    return (
      <>
        <TabPane tabId="1">
            <div>Querverweise</div>
        </TabPane>
        <TabPane tabId="2">
            <div>Kostentabelle</div>
        </TabPane>
        <TabPane tabId="3">
            <div>BeschlussTabelle</div>
        </TabPane>
      </>
    );
  }


const VertragDetails = ({vertrag: data}) => {
    const [activeTab, setActiveTab] = useState(new Array(4).fill('1'));

    return (
      <div>
      <Row>
          <Col xs="12" md="6">
              <Card>
                  <CardHeader>
                      <i className="fa fa-align-justify"></i>Voreigentümer
                  </CardHeader>
                  <CardBody>
                    <FormGroup row>
                      <Col>
                      </Col>
                    </FormGroup>
                  </CardBody>
              </Card>
          </Col>
          {/*Querverweise werden über eine Suche gefunden und sind nicht im Flurstueck enthalten-*/}
          <Col xs="12" md="6" className="mb-4">
            <Card>
                <CardHeader>
                      <i className="fa fa-align-justify"></i>Querverweise/Kosten/Beschlüsse
                  </CardHeader>
                <CardBody>
                    <Nav tabs>
                    <NavItem>
                        <NavLink
                        active={activeTab[0] === '1'}
                        onClick={() => { toggle(0, '1', activeTab, setActiveTab); }}
                        >
                        Querverweise
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                        active={activeTab[0] === '2'}
                        onClick={() => { toggle(0, '2', activeTab, setActiveTab); }}
                        >
                        Kosten
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                        active={activeTab[0] === '3'}
                        onClick={() => { toggle(0, '3', activeTab, setActiveTab); }}
                        >
                        Beschlüsse
                        </NavLink>
                    </NavItem>
                    </Nav>
                    <TabContent activeTab={activeTab[0]}>
                    {tabPane(data)}
                    </TabContent>
                </CardBody>
            </Card>
          </Col>
      </Row>
      <Row>
        <Col>
            <Card>
                <CardHeader>
                    <i className="fa fa-align-justify"></i>Bemerkung
                </CardHeader>
                <CardBody>
                    <FormGroup row>
                        <Input type="textarea" name="text" id="bemerkungTa" />
                    </FormGroup>
                </CardBody>
            </Card>
        </Col>
      </Row>
      </div>
      );
}

export default VertragDetails;
