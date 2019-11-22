import React from 'react';
import jsonData from './../assets/json/fs_22726.json';

const FlurstueckContext = React.createContext({
	flurstueck: jsonData,
	changeFlurstueck: (fl) => {}
});

export default FlurstueckContext;
