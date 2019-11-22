import React, { useContext } from 'react';
import KassenzeichenTabelle from './KassenzeichenTabelle.js';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import LagisMap from '../Commons/LagisMap';
import jsonData from './../../assets/json/fs_17778.json';
import GetMapSize from '../Commons/SizeHelper.js';
import FlurstueckContext from './../../model/FlurstueckContext.js';

const Kassenzeichen = ({ flurstueck: fl }) => {
	const flurstueckContext = useContext(FlurstueckContext);

	return (
		<div className="animated fadeIn">
			<Row>
				<Col>
					<Card>
						<CardHeader>
							<i className="fa fa-align-justify" /> Karte
						</CardHeader>
						<CardBody>
							<LagisMap size={GetMapSize() - 555} />
						</CardBody>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col>
					<KassenzeichenTabelle flurstueck={flurstueckContext.flurstueck} />
				</Col>
			</Row>
		</div>
	);
};

export default Kassenzeichen;
