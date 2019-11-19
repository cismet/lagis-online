import React, { useState } from 'react';
import { Map } from 'react-leaflet';
import { getLayersByName, MappingConstants, FeatureCollectionDisplay } from 'react-cismap';
import Color from 'color';
import useWindowSize from '@rehooks/window-size';

const GetMapSize = () => {
	let windowSize = useWindowSize().innerHeight;

	return windowSize;
};

export default GetMapSize;
