import React from 'react';
import GraphPanel from '../Commons/GraphPanel';
import jsonData from './../../assets/json/fs_17778.json';

const History = () => {
	return <GraphPanel graphCode={jsonData.historyDot} />;
};

export default History;
