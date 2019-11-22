import React, { useContext } from 'react';

import DienststellenTabelle from './DienststellenTabelle.js';
import RollenTabelle from './RollenTabelle.js';
import StrassenfrontTabelle from './StrassenfrontTabelle';
import { FormGroup, Label, Input, Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import LagisMap from '../Commons/LagisMap';
import GetMapSize from '../Commons/SizeHelper.js';
import '../viewStyle.css';
import FlurstueckContext from './../../model/FlurstueckContext.js';
//import jsonData from './../../assets/json/fs_23316.json';

const Verwaltungsbereiche = () => {
	const flurstueckContext = useContext(FlurstueckContext);

	return (
		<div className="animated fadeIn" style={{ margin: '10px' }}>
			<Row>
				<Col>
					<Row>
						<Col lg="8" style={{ height: GetMapSize() - 507 + 'px' }}>
							<DienststellenTabelle
								style={{ height: '100%' }}
								flurstueck={flurstueckContext.flurstueck}
							/>
						</Col>
						<Col lg="4" style={{ height: '100%' }}>
							<Card>
								<CardHeader>Karte</CardHeader>
								<CardBody>
									<LagisMap />
								</CardBody>
							</Card>
						</Col>
					</Row>
					<Row>
						<Col lg="4">
							<RollenTabelle style={{ height: '90%' }} flurstueck={flurstueckContext.flurstueck} />
						</Col>
						<Col lg="4">
							<StrassenfrontTabelle style={{ height: '90%' }} flurstueck={flurstueckContext.flurstueck} />
						</Col>
						<Col lg="4">
							<Card style={{ height: '90%' }}>
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
											value={flurstueckContext.flurstueck.bemerkung}
										/>
									</FormGroup>

									<FormGroup style={{ float: 'left' }}>
										{/*Do not use the label tag for checkboxes, because firefox has some styling issues with checkboxes*/}
										<span style={{ verticalAlign: 'middle', paddingTop: '5px' }}>Sperre</span>
										<Input style={{ marginLeft: '5px' }} id="sperre" type="checkbox" />
									</FormGroup>
								</CardBody>
							</Card>
						</Col>
					</Row>
				</Col>
			</Row>
		</div>
	);
};

export default Verwaltungsbereiche;
