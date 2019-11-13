import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import NutzungTabelle from './NutzungTabelle.js';
import NKFTabelle from './NKFTabelle.js';

const Nutzung = () => {
	return (
		<div className="animated fadeIn">
			<Row>
				<Col>
					<NutzungTabelle />
				</Col>
			</Row>
			<Row>
				<Col>
					<NKFTabelle />
				</Col>
			</Row>
		</div>
	);
};

export default Nutzung;
