import React, { useState } from 'react';
import { Col, Row } from 'reactstrap';
import VertraegeTabelle from './VertraegeTabelle.js';
import jsonData from './../../assets/json/fs_18082.json';
import VertragDetails from './VertragDetails.js';

const extractVertragById = (flurstueck, id) => {
	var vertraege = flurstueck.ar_vertraege;

	if (vertraege != null) {
		for (var index = 0; index < vertraege.length; ++index) {
			if (vertraege[index].id === id) {
				return vertraege[index];
			}
		}
	}

	return null;
};

const Vorgaenge = () => {
	const [ selectedVertrag, setSelectedVertrag ] = useState(null);

	const vertragListener = (id) => {
		if (id === null) {
			setSelectedVertrag(null);
		} else {
			setSelectedVertrag(extractVertragById(jsonData, id));
		}
	};

	return (
		<div className="animated fadeIn">
			<Row>
				<Col>
					<VertraegeTabelle flurstueck={jsonData} selectionListener={vertragListener} />
				</Col>
			</Row>
			<Row>
				<Col>
					<VertragDetails vertrag={selectedVertrag} />
				</Col>
			</Row>
		</div>
	);
};

export default Vorgaenge;
