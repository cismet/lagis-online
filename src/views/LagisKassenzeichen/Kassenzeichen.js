import React from 'react';
import KassenzeichenTabelle from './KassenzeichenTabelle.js';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import LagisMap from '../Commons/LagisMap';

const Kassenzeichen = () => {
	return (
		<div className="animated fadeIn">
			<Row>
				<Col>
					<KassenzeichenTabelle />
				</Col>
			</Row>
			<Row>
				<Col>
					<Card>
						<CardHeader>
							<i className="fa fa-align-justify" /> Karte
						</CardHeader>
						<CardBody>
							<LagisMap />
						</CardBody>
					</Card>
				</Col>
			</Row>
		</div>
	);
};

export default Kassenzeichen;
