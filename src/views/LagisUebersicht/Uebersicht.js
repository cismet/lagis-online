import React, { Component, lazy, Suspense } from 'react';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';

import { Map } from 'react-leaflet';
import { getLayersByName, MappingConstants } from 'react-cismap';

import Verwaltungsbereiche from './widgets/Verwaltungsbereiche';
import Mipa from './widgets/Mipa';
import Rebe from './widgets/Rebe';
import Anlagenbuchhaltung from './widgets/Nutzung';

import Vorgaenge from './widgets/Vorgaenge';
import Historie from './widgets/Historie';
import Kassenzeichen from './widgets/Kassenzeichen';
import DMS from './widgets/DMS';

//hooks import useWindowSize from '@rehooks/window-size';
class Dashboard extends Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

		this.state = {
			dropdownOpen: false,
			radioSelected: 2
		};
	}

	toggle() {
		this.setState({
			dropdownOpen: !this.state.dropdownOpen
		});
	}

	onRadioBtnClick(radioSelected) {
		this.setState({ radioSelected: radioSelected });
	}

	loading = () => <div className='animated fadeIn pt-1 text-center'>Loading...</div>;

	render() {
		const zoom = 15;
		const layers = 'wupp-plan-live@90';
		const namedMapStyle = 'default';
		return (
			<div className='animated fadeIn'>
				<Row>
					<Col xs='12' sm='6' lg='3'>
						<Verwaltungsbereiche />
					</Col>
					<Col xs='12' sm='6' lg='3'>
						<Mipa />
					</Col>
					<Col xs='12' sm='6' lg='3'>
						<Rebe />
					</Col>
					<Col xs='12' sm='6' lg='3'>
						<Anlagenbuchhaltung />
					</Col>
				</Row>
				<Row>
					<Col>
						<Card>
							<CardHeader>Langerfeld / 449 152 / 0</CardHeader>
							<CardBody>
								<Map
									crs={MappingConstants.crs25832}
									style={{
										height: 600
									}}
									center={{
										lat: 51.26357182763206,
										lng: 7.176242149341344
									}}
									zoomControl={true}
									attributionControl={false}
									dragging={true}
									keyboard={false}
									zoom={zoom}
									minZoom={5}
									maxZoom={16}
								>
									{getLayersByName(layers, namedMapStyle)}
								</Map>
							</CardBody>
						</Card>
					</Col>
				</Row>

				<Row>
					<Col xs='12' sm='6' lg='3'>
						<Vorgaenge />
					</Col>
					<Col xs='12' sm='6' lg='3'>
						<Historie />
					</Col>
					<Col xs='12' sm='6' lg='3'>
						<Kassenzeichen />
					</Col>
					<Col xs='12' sm='6' lg='3'>
						<DMS />
					</Col>
				</Row>
			</div>
		);
	}
}

// const Comp = ({}) => {

// };
// // export default Comp;
// Comp.propTypes = {};

export default Dashboard;
