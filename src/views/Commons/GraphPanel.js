import React, { useEffect } from 'react';
import { Graphviz } from 'graphviz-react';

const GraphPanel = ({ graphCode: code, options: o, style: customStyle, clickListener: listener }) => {
	useEffect(() => {
		// var div = document.getElementsByTagName('svg')[0];
		var div = document.getElementById('graphvizDiv');
		if (div != null) {
			var svg = div.firstChild.firstChild;
			svg.style['width'] = '100%';
			var gElement = svg.getElementsByTagName('g');

			Array.from(gElement).forEach(function(ele) {
				if (ele.classList.contains('node')) {
					const text = ele.getElementsByTagName('text');
					if (text != null && text.length > 0) {
						const t = text[0].textContent;
						ele.onclick = function() {
							if (listener != null) {
								listener(t);
							}
						};
					}
				}
			});
		}
	});

	return (
		<div style={customStyle} id="graphvizDiv">
			<Graphviz style={customStyle} dot={code} options={o} />
		</div>
	);
};

export default GraphPanel;
