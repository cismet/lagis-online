import React, { useState } from 'react';
import RebeTabelle from './RebeTabelle.js';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import LagisMap from '../Commons/LagisMap';
import jsonData from './../../assets/json/fs_22726.json';
import GetMapSize from '../Commons/SizeHelper.js';

const extractRebeById = (flurstueck, id) => {
	var rebe = flurstueck.rebes;

	if (rebe != null) {
		for (var index = 0; index < rebe.length; ++index) {
			if (rebe[index].id === id) {
				return rebe[index];
			}
		}
	}

	return null;
};

const Rebe = () => {
	const [ selectedRebe, setSelectedRebe ] = useState(null);

	const rebeListener = (id) => {
		if (id === null) {
			setSelectedRebe(null);
		} else {
			setSelectedRebe(extractRebeById(jsonData, id));
		}
	};

	return (
		<div className="animated fadeIn">
			<Row>
				<Col>
					<Card>
						<CardHeader>
							<i className="fa fa-align-justify" /> Karte
						</CardHeader>
						<CardBody>
							<LagisMap size={GetMapSize() - 760} />
						</CardBody>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col>
					<RebeTabelle flurstueck={jsonData} selectionListener={rebeListener} />
				</Col>
			</Row>
		</div>
	);
};

export default Rebe;
