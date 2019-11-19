import React from 'react';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import FilePanel from '../Commons/FilePanel.js';
import jsonData from './../../assets/json/fs_17778.json';
import GetMapSize from '../Commons/SizeHelper.js';

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
	return (
		<div className="animated fadeIn">
			<Row>
				<Col>
					<Card style={{ height: GetMapSize() - 200 }}>
						<CardHeader>
							<i className="fa fa-align-justify" /> DMS
						</CardHeader>
						<CardBody>
							<FilePanel dmsUrls={extractDmsData(jsonData)} />
						</CardBody>
					</Card>
				</Col>
			</Row>
		</div>
	);
};

export default DMS;
