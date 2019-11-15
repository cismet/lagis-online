import React, { useState } from 'react';
import { Card, CardBody, CardHeader, Col, Row, FormGroup, Input, Label } from 'reactstrap';
import GraphPanel from '../Commons/GraphPanel';
import jsonData from './../../assets/json/fs_17778.json';
import formattedDateString from '../Commons/DateHelper.js';

const History = () => {
	var flurstueck = jsonData;
	const { adjustSize, setAdjustSize } = useState(false);
	const { holdHistory, setHoldHistory } = useState(false);

	return (
		<div className="animated fadeIn">
			<Row>
				<Col>
					<Card>
						<CardHeader>
							<i className="fa fa-align-justify" /> DMS
						</CardHeader>
						<CardBody>
							<GraphPanel graphCode={flurstueck.historyDot} />
						</CardBody>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col lg="4">
					<Card style={{ height: '90%' }}>
						<CardHeader>
							<i className="fa fa-align-justify" /> Optionen
						</CardHeader>
						<CardBody>
							<FormGroup check className="checkbox">
								<Input
									className="form-check-input"
									type="checkbox"
									id="ckGestaltung"
									name="checkbox3"
									value="gestaltung"
									checked={adjustSize}
								/>
								<span style={{ verticalAlign: 'middle', paddingTop: '5px' }}>
									an Bildschirmgröße anpassen
								</span>
							</FormGroup>
							<FormGroup check className="checkbox">
								<Input
									className="form-check-input"
									type="checkbox"
									id="ckGestaltung"
									name="checkbox3"
									value="gestaltung"
									checked={adjustSize}
								/>
								<span style={{ verticalAlign: 'middle', paddingTop: '5px' }}>Historie halten</span>
							</FormGroup>
						</CardBody>
					</Card>
				</Col>
				<Col lg="4">
					<Card style={{ height: '90%' }}>
						<CardHeader>
							<i className="fa fa-align-justify" /> Darstellung
						</CardHeader>
						<CardBody>
							<Row>
								<Col md="10">
									<FormGroup>
										<Input type="select" name="ccmonth" id="deep">
											<option value="1">Direkte Vorgänger/Nachfolger</option>
											<option value="2">Vollständig</option>
											<option value="3">Begrenzte Tiefe</option>
										</Input>
									</FormGroup>
								</Col>
								<Col md="2">
									<FormGroup>
										<Input type="text" id="count" value="1" />
									</FormGroup>
								</Col>
							</Row>
							<Row>
								<Col md="12">
									<FormGroup>
										<Input type="select" name="ccmonth" id="hierarchie">
											<option value="1">Alle Flurstücke</option>
											<option value="2">Nur Vorgänger</option>
											<option value="3">Nur Nachfolger</option>
										</Input>
									</FormGroup>
								</Col>
							</Row>
						</CardBody>
					</Card>
				</Col>
				<Col lg="4">
					<Card style={{ height: '90%' }}>
						<CardHeader>
							<i className="fa fa-align-justify" /> Informationen
						</CardHeader>
						<CardBody>
							<Row>
								<Col md="6">
									<div>Entstehung:</div>
								</Col>
								<Col md="6">
									<div>
										{formattedDateString(flurstueck.fk_flurstueck_schluessel.datum_entstehung)}
									</div>
								</Col>
							</Row>
							<Row>
								<Col md="6">
									<div>Historisch seit:</div>
								</Col>
								<Col md="6">
									<div>keine Angabe</div>
								</Col>
							</Row>
							<Row>
								<Col md="6">
									<div>letzter Stadtbesitz:</div>
								</Col>
								<Col md="6">
									<div>
										{formattedDateString(
											flurstueck.fk_flurstueck_schluessel.datum_letzter_stadtbesitz
										)}
									</div>
								</Col>
							</Row>
						</CardBody>
					</Card>
				</Col>
			</Row>
		</div>
	);
};

export default History;
