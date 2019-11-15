import React from 'react';
import FilePanel from '../Commons/FilePanel.js';
import jsonData from './../../assets/json/fs_17778.json';

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

			dms.push(object);
		}
	}

	return dms;
};

const DMS = () => {
	return <FilePanel dmsUrls={extractDmsData(jsonData)} />;
};

export default DMS;
