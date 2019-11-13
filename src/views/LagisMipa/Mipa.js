import React, { useState } from 'react';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import MipaTabelle from './MipaTabelle.js';
import jsonData from './../../assets/json/fs_22726.json';
import MipaDetail from './MipaDetail.js';
import LagisMap from '../Commons/LagisMap.js';

const extractMipaById = (flurstueck, id) => {
	var mipas = flurstueck.mipas;

	if (mipas != null) {
		for (var index = 0; index < mipas.length; ++index) {
			if (mipas[index].id === id) {
				return mipas[index];
			}
		}
	}

	return null;
};

const Mipa = () => {
	const [ selectedMipa, setSelectedMipa ] = useState(null);

	const mipaListener = (id) => {
		if (id === null) {
			setSelectedMipa(null);
		} else {
			setSelectedMipa(extractMipaById(jsonData, id));
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
							<LagisMap />
						</CardBody>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col>
					<MipaTabelle flurstueck={jsonData} selectionListener={mipaListener} />
				</Col>
			</Row>
			<Row>
				<Col>
					<MipaDetail mipa={selectedMipa} />
				</Col>
			</Row>
		</div>
	);
};

export default Mipa;
