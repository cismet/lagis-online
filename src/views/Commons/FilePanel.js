import React from 'react';

const createUrls = (urls) => {
	var symbols = [];

	if (urls != null) {
		for (var index = 0; index < urls.length; ++index) {
			symbols.push(
				<div style={{ textAlign: 'center', marginRight: '10px' }}>
					<i className="fa fa-file-pdf-o fa-lg" />
					<div>{urls[index].name}</div>
				</div>
			);
		}
	}

	return symbols;
};

const FilePanel = ({ dmsUrls: urls }) => {
	return <div style={{ display: 'flex', flexWrap: 'wrap' }}>{createUrls(urls)}</div>;
};

export default FilePanel;
