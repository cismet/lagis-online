import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import Graph from 'react-graph-vis';
import * as d3 from 'd3';
import * as d3Graphviz from 'd3-graphviz';

//import './styles.css';
// need to import the vis network css in order to show tooltip
//import './network.css';

const GraphTool = ({ graphCode: code, options: o, style: customStyle, clickListener: listener }) => {
	//this listener will reset the graph zoom and pan
	var listener1 = (t) => {
		var option = o != null ? o : { height: 500, width: 1550 };
		var adjustedCode = code.replace('digraph G{', 'digraph G{node [shape="polygon" style="filled"]');
		var graph = d3.select('.graph').graphviz(option).renderDot(adjustedCode);
		graph.resetZoom();
	};
	useEffect(() => {
		var option = o != null ? o : { height: 500, width: 1550 };
		var scale = 1.0;
		//        d3.select('.graph').graphviz().options(option);
		var adjustedCode = code.replace('digraph G{', 'digraph G{node [shape="polygon" style="filled"]');
		var graph = d3.select('.graph').graphviz(option).renderDot(adjustedCode);

		var div = document.getElementById('graphvizDiv');
		if (div != null) {
			var svg = div.firstChild;
			var gElement = svg.getElementsByTagName('g');
			while (div.getBoundingClientRect().width < svg.firstElementChild.getBoundingClientRect().width) {
				scale = scale - 0.02;
				graph.scale(scale).renderDot(adjustedCode);
			}
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

	var additionalStyle = { backgroundColor: 'white', overflow: 'hidden' };

	const styleOptions = {
		...customStyle,
		...additionalStyle
	};

	return <div style={styleOptions} className="graph" name="graph" id="graphvizDiv" />;
};

export default GraphTool;
