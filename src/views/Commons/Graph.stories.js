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
	));
