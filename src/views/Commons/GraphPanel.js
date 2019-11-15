import React, { useEffect } from 'react';
import { Graphviz } from 'graphviz-react';

const GraphPanel = ({ graphCode: code, options: o, style: customStyle }) => {
	useEffect(() => {
		// var div = document.getElementsByTagName('svg')[0];
		var div = document.getElementById('graphvizDiv');
		if (div != null) {
			var svg = div.firstChild.firstChild;
			svg.style['width'] = '100%';
		}
	});

	return (
		<div id="graphvizDiv">
			<Graphviz style={customStyle} dot={code} options={o} />
		</div>
	);
};

export default GraphPanel;
