import React, { useState, useContext } from 'react';
import RebeTabelle from './RebeTabelle.js';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import LagisMap from '../Commons/LagisMap';
import GetMapSize from '../Commons/SizeHelper.js';
import FlurstueckContext from './../../model/FlurstueckContext.js';

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
	const flurstueckContext = useContext(FlurstueckContext);

	const rebeListener = (id) => {
		if (id === null) {
			setSelectedRebe(null);
		} else {
			setSelectedRebe(extractRebeById(flurstueckContext.flurstueck, id));
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
					<RebeTabelle flurstueck={flurstueckContext.flurstueck} selectionListener={rebeListener} />
				</Col>
			</Row>
		</div>
	);
};

export default Rebe;
