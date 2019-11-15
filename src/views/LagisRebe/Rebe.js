import React from 'react';
import RebeTabelle from './RebeTabelle.js';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import LagisMap from '../Commons/LagisMap';

const Rebe = () => {
	return (
		<div className="animated fadeIn">
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
			<Row>
				<Col>
					<RebeTabelle />
				</Col>
			</Row>
		</div>
	);
};

export default Rebe;
