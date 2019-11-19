import React from 'react';
import { Card, CardBody, CardHeader, Col, Row, FormGroup, Label, Input } from 'reactstrap';

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
};

const MipaDetail = ({ mipa: data }) => {
	return (
		<div>
			<Row>
				<Col lg="3" xs="3">
					<Card style={{ height: '90%' }}>
						<CardHeader>
							<i className="fa fa-align-justify" />Merkmale
						</CardHeader>
						<CardBody>
							<FormGroup row>
								<Col sm={{ size: 6, order: 2, offset: 1 }}>
									<FormGroup check className="checkbox">
										<Input
											className="form-check-input"
											type="checkbox"
											id="ckUnentgeltlich"
											name="checkbox1"
											value="unentgeltlich"
											checked={merkmalExists('Unentgeltlich', data)}
										/>
										<span style={{ verticalAlign: 'middle', paddingTop: '5px' }}>
											Unentgeltlich
										</span>
										{/* Do not use the label tag, because firefox has some styling issues, when
                                            using checkboxes with a label
                                            <Label check className="form-check-label" htmlFor="ckUnentgeltlich">
											Unentgeltlich
										</Label> */}
									</FormGroup>
									<FormGroup check className="checkbox">
										<Input
											className="form-check-input"
											type="checkbox"
											id="ckKeineAkte"
											name="checkbox2"
											value="keineAkte"
											checked={merkmalExists('keine Akte', data)}
										/>
										<span style={{ verticalAlign: 'middle', paddingTop: '5px' }}>keine Akte</span>
									</FormGroup>
									<FormGroup check className="checkbox">
										<Input
											className="form-check-input"
											type="checkbox"
											id="ckAltlast"
											name="checkbox3"
											value="Altlast"
											checked={merkmalExists('Altlast', data)}
										/>
										<span style={{ verticalAlign: 'middle', paddingTop: '5px' }}>Altlast</span>
									</FormGroup>
									<FormGroup check className="checkbox">
										<Input
											className="form-check-input"
											type="checkbox"
											id="ckBiotop"
											name="checkbox3"
											value="biotop"
											checked={merkmalExists('Biotop', data)}
										/>
										<span style={{ verticalAlign: 'middle', paddingTop: '5px' }}>Biotop</span>
									</FormGroup>
									<FormGroup check className="checkbox">
										<Input
											className="form-check-input"
											type="checkbox"
											id="ckGestaltung"
											name="checkbox3"
											value="gestaltung"
											checked={merkmalExists('Gestaltung', data)}
										/>
										<span style={{ verticalAlign: 'middle', paddingTop: '5px' }}>Gestaltung</span>
									</FormGroup>
								</Col>
							</FormGroup>
						</CardBody>
					</Card>
				</Col>
				{/*Querverweise werden über eine Suche gefunden und sind nicht im Flurstueck enthalten-*/}
				<Col lg="4" xs="4">
					<Card style={{ height: '90%' }}>
						<CardHeader>
							<i className="fa fa-align-justify" />Querverweise
						</CardHeader>
						<CardBody>
							<FormGroup row>
								<div style={{ marginLeft: '40px' }}>
									<div>Langerfeld 450 46/0</div>
									<div>Langerfeld 449 118/0</div>
									<div>Langerfeld 449 126/0</div>
								</div>
							</FormGroup>
						</CardBody>
					</Card>
				</Col>
				<Col lg="5" xs="5">
					<Card style={{ height: '90%' }}>
						<CardHeader>
							<i className="fa fa-align-justify" />Bemerkung
						</CardHeader>
						<CardBody>
							<Input
								type="textarea"
								style={{ height: '120px' }}
								name="textarea-input"
								id="textarea-input"
								value={data === null ? ' ' : data.bemerkung}
							/>
						</CardBody>
					</Card>
				</Col>
			</Row>
		</div>
	);
};

export default MipaDetail;
