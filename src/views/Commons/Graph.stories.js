import React from 'react';
import { storiesOf } from '@storybook/react';
import GraphTool from './Graph.js';

storiesOf('GraphTool', module)
	.add('GraphTool simple', () => (
		<GraphTool
			graphCode={
				'digraph G{node [shape="polygon" style="filled"] "Langerfeld  473 21/0" [shape="polygon" fillcolor="#00ff00" style="fill: #00ff00; font-weight: bold"];}'
			}
		/>
	))
	.add('GraphPanel complex', () => (
		<GraphTool
			graphCode={
				'digraph G{\n  "Beyenburg 13 635/0"->"Beyenburg 13 915/0" [lineInterpolate="linear"];\n"Beyenburg 13 757/0"->"Beyenburg 13 915/0" [lineInterpolate="linear"];\n"Beyenburg 13 840/0"->"Beyenburg 13 915/0" [lineInterpolate="linear"];\n"Beyenburg 13 903/0"->"Beyenburg 13 915/0" [lineInterpolate="linear"];\n"Beyenburg 13 915/0"  [style="fill: #eee; font-weight: bold"];\n}'
			}
		/>
	))
	.add('GraphPanel deep', () => (
		<GraphTool
			graphCode={
				'digraph G{\n"Elberfeld 224 158/0"->"pseudo Schluessel18883" [lineInterpolate="linear"];\n"Elberfeld 238 105/0"->"pseudo Schluessel18883" [lineInterpolate="linear"];\n"Elberfeld 238 125/0"->"pseudo Schluessel18883" [lineInterpolate="linear"];\n"Elberfeld 238 175/0"->"pseudo Schluessel18883" [lineInterpolate="linear"];\n"Elberfeld 238 177/0"->"pseudo Schluessel18883" [lineInterpolate="linear"];\n"Elberfeld 238 178/0"->"pseudo Schluessel18883" [lineInterpolate="linear"];\n"Elberfeld 238 259/0"->"pseudo Schluessel18883" [lineInterpolate="linear"];\n"Elberfeld 238 262/0"->"pseudo Schluessel18883" [lineInterpolate="linear"];\n"Elberfeld 238 263/0"->"pseudo Schluessel18883" [lineInterpolate="linear"];\n"Elberfeld 238 66/2"->"pseudo Schluessel18883" [lineInterpolate="linear"];\n"Elberfeld 238 70/10"->"pseudo Schluessel18883" [lineInterpolate="linear"];\n"Elberfeld 238 72/10"->"pseudo Schluessel18883" [lineInterpolate="linear"];\n"Elberfeld 238 81/15"->"pseudo Schluessel18883" [lineInterpolate="linear"];\n"Elberfeld 240 132/0"->"pseudo Schluessel18883" [lineInterpolate="linear"];\n"Elberfeld 240 160/0"->"pseudo Schluessel18883" [lineInterpolate="linear"];\n"Elberfeld 240 164/0"->"pseudo Schluessel18883" [lineInterpolate="linear"];\n"Elberfeld 240 172/0"->"pseudo Schluessel18883" [lineInterpolate="linear"];\n"Elberfeld 240 20/0"->"pseudo Schluessel18883" [lineInterpolate="linear"];\n"Elberfeld 240 75/0"->"pseudo Schluessel18883" [lineInterpolate="linear"];\n"Elberfeld 240 94/0"->"pseudo Schluessel18883" [lineInterpolate="linear"];\n"pseudo Schluessel18883"->"Elberfeld 240 190/0" [lineInterpolate="linear"];\n"Elberfeld 240 190/0"  [style="fill: #eee; font-weight: bold"];\n"pseudo Schluessel18883" [label="    "]}'
			}
		/>
	))
	.add('GraphPanel deep ortho', () => (
		<GraphTool
			graphCode={
				'digraph G{\n"Elberfeld 224 158/0"->"pseudo Schluessel18883" [lineInterpolate="linear"];\n"Elberfeld 238 105/0"->"pseudo Schluessel18883" [lineInterpolate="linear"];\n"Elberfeld 238 125/0"->"pseudo Schluessel18883" [lineInterpolate="linear"];\n"Elberfeld 238 175/0"->"pseudo Schluessel18883" [lineInterpolate="linear"];\n"Elberfeld 238 177/0"->"pseudo Schluessel18883" [lineInterpolate="linear"];\n"Elberfeld 238 178/0"->"pseudo Schluessel18883" [lineInterpolate="linear"];\n"Elberfeld 238 259/0"->"pseudo Schluessel18883" [lineInterpolate="linear"];\n"Elberfeld 238 262/0"->"pseudo Schluessel18883" [lineInterpolate="linear"];\n"Elberfeld 238 263/0"->"pseudo Schluessel18883" [lineInterpolate="linear"];\n"Elberfeld 238 66/2"->"pseudo Schluessel18883" [lineInterpolate="linear"];\n"Elberfeld 238 70/10"->"pseudo Schluessel18883" [lineInterpolate="linear"];\n"Elberfeld 238 72/10"->"pseudo Schluessel18883" [lineInterpolate="linear"];\n"Elberfeld 238 81/15"->"pseudo Schluessel18883" [lineInterpolate="linear"];\n"Elberfeld 240 132/0"->"pseudo Schluessel18883" [lineInterpolate="linear"];\n"Elberfeld 240 160/0"->"pseudo Schluessel18883" [lineInterpolate="linear"];\n"Elberfeld 240 164/0"->"pseudo Schluessel18883" [lineInterpolate="linear"];\n"Elberfeld 240 172/0"->"pseudo Schluessel18883" [lineInterpolate="linear"];\n"Elberfeld 240 20/0"->"pseudo Schluessel18883" [lineInterpolate="linear"];\n"Elberfeld 240 75/0"->"pseudo Schluessel18883" [lineInterpolate="linear"];\n"Elberfeld 240 94/0"->"pseudo Schluessel18883" [lineInterpolate="linear"];\n"pseudo Schluessel18883"->"Elberfeld 240 190/0" [lineInterpolate="linear"];\n"Elberfeld 240 190/0"  [style="fill: #eee; font-weight: bold"];\n"pseudo Schluessel18883" [label="    "]}'
			}
			splines='ortho'
		/>
	))
	.add('GraphPanel deep polyline', () => (
		<GraphTool
			graphCode={
				'digraph G{\n"Elberfeld 224 158/0"->"pseudo Schluessel18883" [lineInterpolate="linear"];\n"Elberfeld 238 105/0"->"pseudo Schluessel18883" [lineInterpolate="linear"];\n"Elberfeld 238 125/0"->"pseudo Schluessel18883" [lineInterpolate="linear"];\n"Elberfeld 238 175/0"->"pseudo Schluessel18883" [lineInterpolate="linear"];\n"Elberfeld 238 177/0"->"pseudo Schluessel18883" [lineInterpolate="linear"];\n"Elberfeld 238 178/0"->"pseudo Schluessel18883" [lineInterpolate="linear"];\n"Elberfeld 238 259/0"->"pseudo Schluessel18883" [lineInterpolate="linear"];\n"Elberfeld 238 262/0"->"pseudo Schluessel18883" [lineInterpolate="linear"];\n"Elberfeld 238 263/0"->"pseudo Schluessel18883" [lineInterpolate="linear"];\n"Elberfeld 238 66/2"->"pseudo Schluessel18883" [lineInterpolate="linear"];\n"Elberfeld 238 70/10"->"pseudo Schluessel18883" [lineInterpolate="linear"];\n"Elberfeld 238 72/10"->"pseudo Schluessel18883" [lineInterpolate="linear"];\n"Elberfeld 238 81/15"->"pseudo Schluessel18883" [lineInterpolate="linear"];\n"Elberfeld 240 132/0"->"pseudo Schluessel18883" [lineInterpolate="linear"];\n"Elberfeld 240 160/0"->"pseudo Schluessel18883" [lineInterpolate="linear"];\n"Elberfeld 240 164/0"->"pseudo Schluessel18883" [lineInterpolate="linear"];\n"Elberfeld 240 172/0"->"pseudo Schluessel18883" [lineInterpolate="linear"];\n"Elberfeld 240 20/0"->"pseudo Schluessel18883" [lineInterpolate="linear"];\n"Elberfeld 240 75/0"->"pseudo Schluessel18883" [lineInterpolate="linear"];\n"Elberfeld 240 94/0"->"pseudo Schluessel18883" [lineInterpolate="linear"];\n"pseudo Schluessel18883"->"Elberfeld 240 190/0" [lineInterpolate="linear"];\n"Elberfeld 240 190/0"  [style="fill: #eee; font-weight: bold"];\n"pseudo Schluessel18883" [label="    "]}'
			}
			splines='polyline'
		/>
	))
	.add('GraphPanel deepest', () => (
		<GraphTool
			graphCode={
				'digraph G{\n"pseudo Schluessel19286"->"Schöller 11 153/0" [lineInterpolate="linear"];\n"pseudo Schluessel19286"->"Schöller 11 154/0" [lineInterpolate="linear"];\n"Schöller 11 110/0"->"pseudo Schluessel19286" [lineInterpolate="linear"];\n"Schöller 11 135/0"->"pseudo Schluessel19286" [lineInterpolate="linear"];\n"Schöller 11 154/0"  [style="fill: #eee; font-weight: bold"];\n"pseudo Schluessel19286" [label="    "]}'
			}
		/>
	))
	.add('GraphPanel 9 nodes splines=ortho', () => (
		<GraphTool
			graphCode={
				'digraph G{\n"Elberfeld 30 144/0"->"Elberfeld 30 265/0" [lineInterpolate="linear"];\n"Elberfeld 30 152/0"->"Elberfeld 30 265/0" [lineInterpolate="linear"];\n"Elberfeld 30 19/11"->"Elberfeld 30 265/0" [lineInterpolate="linear"];\n"Elberfeld 30 19/12"->"Elberfeld 30 265/0" [lineInterpolate="linear"];\n"Elberfeld 30 212/0"->"Elberfeld 30 265/0" [lineInterpolate="linear"];\n"Elberfeld 30 255/0"->"Elberfeld 30 265/0" [lineInterpolate="linear"];\n"Elberfeld 30 261/0"->"Elberfeld 30 265/0" [lineInterpolate="linear"];\n"Elberfeld 30 68/15"->"Elberfeld 30 265/0" [lineInterpolate="linear"];\n"Elberfeld 30 265/0"  [style="fill: #eee; font-weight: bold"];\n}'
			}
			splines='ortho'
		/>
	))
	.add('GraphPanel 9 nodes splines=line', () => (
		<GraphTool
			graphCode={
				'digraph G{\n"Elberfeld 30 144/0"->"Elberfeld 30 265/0" [lineInterpolate="linear"];\n"Elberfeld 30 152/0"->"Elberfeld 30 265/0" [lineInterpolate="linear"];\n"Elberfeld 30 19/11"->"Elberfeld 30 265/0" [lineInterpolate="linear"];\n"Elberfeld 30 19/12"->"Elberfeld 30 265/0" [lineInterpolate="linear"];\n"Elberfeld 30 212/0"->"Elberfeld 30 265/0" [lineInterpolate="linear"];\n"Elberfeld 30 255/0"->"Elberfeld 30 265/0" [lineInterpolate="linear"];\n"Elberfeld 30 261/0"->"Elberfeld 30 265/0" [lineInterpolate="linear"];\n"Elberfeld 30 68/15"->"Elberfeld 30 265/0" [lineInterpolate="linear"];\n"Elberfeld 30 265/0"  [style="fill: #eee; font-weight: bold"];\n}'
			}
			splines='line'
		/>
	))
	.add('GraphPanel 9 nodes splines=polyline', () => (
		<GraphTool
			graphCode={
				'digraph G{\n"Elberfeld 30 144/0"->"Elberfeld 30 265/0" [lineInterpolate="linear"];\n"Elberfeld 30 152/0"->"Elberfeld 30 265/0" [lineInterpolate="linear"];\n"Elberfeld 30 19/11"->"Elberfeld 30 265/0" [lineInterpolate="linear"];\n"Elberfeld 30 19/12"->"Elberfeld 30 265/0" [lineInterpolate="linear"];\n"Elberfeld 30 212/0"->"Elberfeld 30 265/0" [lineInterpolate="linear"];\n"Elberfeld 30 255/0"->"Elberfeld 30 265/0" [lineInterpolate="linear"];\n"Elberfeld 30 261/0"->"Elberfeld 30 265/0" [lineInterpolate="linear"];\n"Elberfeld 30 68/15"->"Elberfeld 30 265/0" [lineInterpolate="linear"];\n"Elberfeld 30 265/0"  [style="fill: #eee; font-weight: bold"];\n}'
			}
			splines='polyline'
		/>
	))
	.add('GraphPanel 9 nodes splines=curved', () => (
		<GraphTool
			graphCode={
				'digraph G{\n"Elberfeld 30 144/0"->"Elberfeld 30 265/0" [lineInterpolate="linear"];\n"Elberfeld 30 152/0"->"Elberfeld 30 265/0" [lineInterpolate="linear"];\n"Elberfeld 30 19/11"->"Elberfeld 30 265/0" [lineInterpolate="linear"];\n"Elberfeld 30 19/12"->"Elberfeld 30 265/0" [lineInterpolate="linear"];\n"Elberfeld 30 212/0"->"Elberfeld 30 265/0" [lineInterpolate="linear"];\n"Elberfeld 30 255/0"->"Elberfeld 30 265/0" [lineInterpolate="linear"];\n"Elberfeld 30 261/0"->"Elberfeld 30 265/0" [lineInterpolate="linear"];\n"Elberfeld 30 68/15"->"Elberfeld 30 265/0" [lineInterpolate="linear"];\n"Elberfeld 30 265/0"  [style="fill: #eee; font-weight: bold"];\n}'
			}
			splines='curved'
		/>
	))
	.add('GraphPanel 9 nodes splines=spline', () => (
		<GraphTool
			graphCode={
				'digraph G{\n"Elberfeld 30 144/0"->"Elberfeld 30 265/0" [lineInterpolate="linear"];\n"Elberfeld 30 152/0"->"Elberfeld 30 265/0" [lineInterpolate="linear"];\n"Elberfeld 30 19/11"->"Elberfeld 30 265/0" [lineInterpolate="linear"];\n"Elberfeld 30 19/12"->"Elberfeld 30 265/0" [lineInterpolate="linear"];\n"Elberfeld 30 212/0"->"Elberfeld 30 265/0" [lineInterpolate="linear"];\n"Elberfeld 30 255/0"->"Elberfeld 30 265/0" [lineInterpolate="linear"];\n"Elberfeld 30 261/0"->"Elberfeld 30 265/0" [lineInterpolate="linear"];\n"Elberfeld 30 68/15"->"Elberfeld 30 265/0" [lineInterpolate="linear"];\n"Elberfeld 30 265/0"  [style="fill: #eee; font-weight: bold"];\n}'
			}
			splines='curved'
		/>
	));
