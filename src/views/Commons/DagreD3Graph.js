import React, { useEffect, useRef } from 'react';
import graphlibDot from 'graphlib-dot';
import * as d3 from 'd3';
import * as dagreD3 from 'dagre-d3';

import './dagre.css';

const Comp = ({
	dotGraph,
	graph,
	nodes,
	edges,
	interactive,
	fit,
	height,
	width,
	onNodeClick,
	shapeRenderers
}) => {
	const nodeTree = useRef();
	const nodeTreeGroup = useRef();

	useEffect(() => {
		if (nodeTree !== undefined && nodeTreeGroup !== undefined) {
			renderDag();
		}
	});

	if (dotGraph !== undefined) {
		graph = graphlibDot.read(dotGraph);
	}

	const renderDag = () => {
		let g;
		if (graph !== undefined) {
			g = graph;
		} else {
			g = new dagreD3.graphlib.Graph().setGraph({});

			for (let [ id, node ] of Object.entries(nodes)) g.setNode(id, node);

			for (let edge of edges) g.setEdge(edge[0], edge[1], edge[2]); // from, to, props
		}
		// Set up an SVG group so that we can translate the final graph.
		let svg = d3.select(nodeTree);
		let inner = d3.select(nodeTreeGroup);

		// set up zoom support
		if (interactive) {
			let zoom = d3.zoom().on('zoom', () => inner.attr('transform', d3.event.transform));
			svg.call(zoom);
		}

		// Create the renderer
		let render = new dagreD3.render();

		// set up custom shape renderers
		if (shapeRenderers)
			for (let [ shape, renderer ] of Object.entries(shapeRenderers))
				render.shapes()[shape] = renderer;

		// Run the renderer. This is what draws the final graph.
		render(inner, g);

		// TODO add padding?
		if (fit) {
			let { height: gHeight, width: gWidth } = g.graph();
			let { height, width } = this.nodeTree.getBBox();
			let transX = width - gWidth;
			let transY = height - gHeight;
			svg.attr('height', height);
			svg.attr('width', width);
			inner.attr('transform', d3.zoomIdentity.translate(transX, transY));
		}

		if (onNodeClick) {
			svg.selectAll('.dagre-d3 .node').on('click', (id) => onNodeClick(id));
		}
	};

	return (
		<svg className='dagre-d3' ref={nodeTree} width={height} height={width}>
			<g ref={nodeTreeGroup} />
		</svg>
	);
};

export default Comp;
