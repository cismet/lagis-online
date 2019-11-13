import React from 'react';

import DienststellenTabelle from './DienststellenTabelle.js';
import RollenTabelle from './RollenTabelle.js';
import StrassenfrontTabelle from './StrassenfrontTabelle';
import { FormGroup, Label, Input, Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import LagisMap from '../Commons/LagisMap';
import jsonData from './../../assets/json/fs_22726.json';
//import jsonData from './../../assets/json/fs_23316.json';

const Verwaltungsbereiche = () => {
	return (
		<div className="animated fadeIn" style={{ margin: '10px' }}>
			<Row>
				<Col xs="20" lg="7">
					<Row>
						<Col lg="12">
							<DienststellenTabelle flurstueck={jsonData} />
						</Col>
					</Row>
					<Row>
						<Col xs="12" lg="6">
							<RollenTabelle flurstueck={jsonData} />
						</Col>
						<Col xs="12" lg="6">
							<StrassenfrontTabelle flurstueck={jsonData} />
						</Col>
					</Row>
					<Row>
						<Col xs="12" lg="6">
							<Card>
								<CardHeader>
									<i className="fa fa-align-justify" /> Bemerkungen/Sperre
								</CardHeader>
								<CardBody>
									<FormGroup>
										<Label for="bemerkungTa">Bemerkungen</Label>
										<Input
											type="textarea"
											name="text"
											id="bemerkungTa"
											readOnly
											value={jsonData.bemerkung}
										/>
									</FormGroup>

									<FormGroup style={{ float: 'left' }}>
										<Label check>
											Sperre&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
											<Input type="checkbox" />
											{}
										</Label>
									</FormGroup>
								</CardBody>
							</Card>
						</Col>
					</Row>
				</Col>
				<Col xs="13" lg="5">
					<Card>
						<CardHeader>Karte</CardHeader>
						<CardBody>
							<LagisMap />
						</CardBody>
					</Card>
				</Col>
			</Row>
		</div>
	);
};

export default Verwaltungsbereiche;
