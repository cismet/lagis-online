import React, { useContext } from 'react';
import { Col, Row } from 'reactstrap';
import NutzungTabelle from './NutzungTabelle.js';
import NKFTabelle from './NKFTabelle.js';
import FlurstueckContext from './../../model/FlurstueckContext.js';

const Nutzung = () => {
	const flurstueckContext = useContext(FlurstueckContext);

	return (
		<div className="animated fadeIn">
			<Row>
				<Col>
					<NutzungTabelle flurstueck={flurstueckContext.flurstueck} />
				</Col>
			</Row>
			<Row>
				<Col>
					<NKFTabelle flurstueck={flurstueckContext.flurstueck} />
				</Col>
			</Row>
		</div>
	);
};

export default Nutzung;
