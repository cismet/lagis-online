import React, { useState } from 'react';
import {
	Card,
	CardBody,
	CardHeader,
	Col,
	Row,
	FormGroup,
	Label,
	Input,
	Nav,
	NavItem,
	NavLink,
	TabContent,
	TabPane,
	Form
} from 'reactstrap';
import KostenTabelle from './KostenTabelle.js';
import BeschlussTabelle from './BeschlussTabelle.js';
import formattedDateString from '../Commons/DateHelper.js';

const toggle = (tabPane, tab, activeTab, setActiveTab) => {
	const newArray = activeTab.slice();
	newArray[tabPane] = tab;
	setActiveTab(newArray);
};

const tabPane = (data) => {
	return (
        <>
			<TabPane tabId="1">
				<div>Querverweise</div>
			</TabPane>
			<TabPane tabId="2">
				<KostenTabelle vertrag={data} />
			</TabPane>
			<TabPane tabId="3">
				<BeschlussTabelle vertrag={data} />
			</TabPane>
        </>
	);
};

const extractField = (data, field) => {
	if (data != null) {
		if (data[field] != null) {
			return data[field];
		} else {
			return '';
		}
	} else {
		return '';
	}
};

const VertragDetails = ({ vertrag: data }) => {
	const [ activeTab, setActiveTab ] = useState(new Array(4).fill('1'));

	if (data === null || data === undefined) {
		data = {};
	}

	return (
		<div>
			<Row>
				<Col xs="12" md="6">
					<Card>
						<CardHeader>
							<i className="fa fa-align-justify" />Vertragsdaten
						</CardHeader>
						<CardBody>
							<Form action="" method="post" className="form-horizontal">
								<FormGroup row>
									<Col xs="12">
										<Label htmlFor="voreigentuemer">Voreigentümer</Label>
										<Input
											type="text"
											id="voreigentuemer"
											value={extractField(data, 'vertragspartner')}
										/>
									</Col>
								</FormGroup>
								<FormGroup row>
									<Col xs="7">
										<Label htmlFor="kaufpreis">Kaufpreis (inkl.Nebenkosten)</Label>
										<Input type="text" id="kaufpreis" value={extractField(data, 'gesamtpreis')} />
									</Col>
									<Col xs="5">
										<Label htmlFor="auflassung">Auflassung</Label>
										<Input
											type="text"
											id="auflassung"
											value={formattedDateString(data.datum_auflassung)}
										/>
									</Col>
								</FormGroup>
								<FormGroup row>
									<Col xs="7">
										<Label htmlFor="quadratmeterpreis">Quadratmeterpreis</Label>
										<Input
											type="text"
											id="quadratmeterpreis"
											value={extractField(data, 'quadratmeterpreis')}
										/>
									</Col>
									<Col xs="5">
										<Label htmlFor="eintragung">Eintragung</Label>
										<Input
											type="text"
											id="eintragung"
											value={formattedDateString(data.datum_eintragung)}
										/>
									</Col>
								</FormGroup>
								<FormGroup row>
									<Col xs="7">
										<Label htmlFor="vertragsart">Vertragsart</Label>
										<Input
											type="text"
											id="vertragsart"
											value={data.fk_vertragsart != null ? data.fk_vertragsart.bezeichnung : ''}
										/>
									</Col>
									<Col xs="5">
										<Label htmlFor="aktenzeichen">Aktenzeichen</Label>
										<Input
											type="text"
											id="aktenzeichen"
											value={extractField(data, 'aktenzeichen')}
										/>
									</Col>
								</FormGroup>
							</Form>
						</CardBody>
					</Card>
				</Col>
				{/*Querverweise werden über eine Suche gefunden und sind nicht im Flurstueck enthalten-*/}
				<Col xs="12" md="6" className="mb-4">
					<Card style={{height: '100%'}}>
						<CardHeader>
							<i className="fa fa-align-justify" />Querverweise/Kosten/Beschlüsse
						</CardHeader>
						<CardBody>
							<Nav tabs>
								<NavItem>
									<NavLink
										active={activeTab[0] === '1'}
										onClick={() => {
											toggle(0, '1', activeTab, setActiveTab);
										}}
									>
										Querverweise
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink
										active={activeTab[0] === '2'}
										onClick={() => {
											toggle(0, '2', activeTab, setActiveTab);
										}}
									>
										Kosten
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink
										active={activeTab[0] === '3'}
										onClick={() => {
											toggle(0, '3', activeTab, setActiveTab);
										}}
									>
										Beschlüsse
									</NavLink>
								</NavItem>
							</Nav>
							<TabContent activeTab={activeTab[0]}>{tabPane(data)}</TabContent>
						</CardBody>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col>
					<Card>
						<CardHeader>
							<i className="fa fa-align-justify" />Bemerkung
						</CardHeader>
						<CardBody>
							<FormGroup row>
								<Input type="textarea" name="text" id="bemerkungTa" value={extractField(data, 'bemerkung')}/>
							</FormGroup>
						</CardBody>
					</Card>
				</Col>
			</Row>
		</div>
	);
};

export default VertragDetails;
