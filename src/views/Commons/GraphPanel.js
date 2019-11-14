import React from 'react';
import { Graphviz } from 'graphviz-react';

const GraphPanel = ({ graphCode: code }) => {
	return <Graphviz dot={code} />;
};

export default GraphPanel;
