import React, { useContext } from 'react';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import FilePanel from '../Commons/FilePanel.js';
import GetMapSize from '../Commons/SizeHelper.js';
import FlurstueckContext from './../../model/FlurstueckContext.js';

const extractDmsData = (flurstueck) => {
	var dms = [];
	var dmsUrls = flurstueck.n_dms_urls;

	if (dmsUrls != null) {
		for (var index = 0; index < dmsUrls.length; ++index) {
			var object = {};

			if (dmsUrls[index].fk_url != null) {
				object.server = dmsUrls[index].fk_url.server;
				object.path = dmsUrls[index].fk_url.path;
			}

			object.name = dmsUrls[index].name;
			object.object_name = dmsUrls[index].object_name;
			dms.push(object);
		}
	}

	return dms;
};

const DMS = () => {
	const flurstueckContext = useContext(FlurstueckContext);

	return (
		<div className="animated fadeIn">
			<Row>
				<Col>
					<Card style={{ height: GetMapSize() - 200 }}>
						<CardHeader>
							<i className="fa fa-align-justify" /> DMS
						</CardHeader>
						<CardBody>
							<FilePanel dmsUrls={extractDmsData(flurstueckContext.flurstueck)} />
						</CardBody>
					</Card>
				</Col>
			</Row>
		</div>
	);
};

export default DMS;
