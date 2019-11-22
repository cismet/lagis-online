import React from 'react';
import { storiesOf } from '@storybook/react';
import DagreD3 from './DagreD3';
import DagreD3Graph from './DagreD3Graph';

let dot = `digraph G{
	"Barmen 205 688/0"->"pseudo Schluessel18746" [lineInterpolate="linear"];
	"pseudo Schluessel18746"->"Barmen 200 316/0" [lineInterpolate="linear"];
	"pseudo Schluessel18746"->"Barmen 201 250/0" [lineInterpolate="linear"];
	"pseudo Schluessel18746"->"Barmen 201 251/0" [lineInterpolate="linear"];
	"pseudo Schluessel18746"->"Barmen 201 252/0" [lineInterpolate="linear"];
	"pseudo Schluessel18746"->"Barmen 206 132/0" [lineInterpolate="linear"];
	"Barmen 200 316/0"->"pseudo Schluessel22309" [lineInterpolate="linear"];
	"Barmen 201 250/0"->"Barmen 201 253/0" [lineInterpolate="linear"];
	"Barmen 201 250/0"->"Barmen 201 254/0" [lineInterpolate="linear"];
	"Barmen 201 252/0"->"pseudo Schluessel22309" [lineInterpolate="linear"];
	"Barmen 206 132/0"->"Barmen 206 133/0" [lineInterpolate="linear"];
	"Barmen 206 132/0"->"Barmen 206 134/0" [lineInterpolate="linear"];
	"Barmen 206 132/0"->"Barmen 206 135/0" [lineInterpolate="linear"];
	"pseudo Schluessel22309"->"Barmen 201 256/0" [lineInterpolate="linear"];
	"Barmen 201 253/0"->"pseudo Schluessel22309" [lineInterpolate="linear"];
	"Barmen 201 254/0"->"pseudo Schluessel22309" [lineInterpolate="linear"];
	"Barmen 206 134/0"->"Barmen 201 255/0" [lineInterpolate="linear"];
	"Barmen 206 135/0"->"Barmen 205 709/0" [lineInterpolate="linear"];
	"pseudo Schluessel22309"->"Barmen 200 326/0" [lineInterpolate="linear"];
	"pseudo Schluessel22309"->"Barmen 201 257/0" [lineInterpolate="linear"];
	"pseudo Schluessel22309"->"Barmen 201 258/0" [lineInterpolate="linear"];
	"Barmen 205 688/0"  [style="fill: #eee; font-weight: bold"];
	"pseudo Schluessel18746" [label="    "]"pseudo Schluessel22309" [label="    "]}
`;

storiesOf('DagreD3 Viz', module)
	.add('DagreD3Viz simple', () => (
		<DagreD3 fit={true} interactive={true} width='100%' height='100%' dotGraph={dot} />
	))
	.add('DagreD3Graph (FunctionalComp) Viz simple', () => (
		<DagreD3Graph fit={true} interactive={true} width='100%' height='100%' dotGraph={dot} />
	));
