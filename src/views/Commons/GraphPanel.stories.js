import React from 'react';
import { storiesOf } from '@storybook/react';
import GraphPanel from './GraphPanel';

storiesOf('GraphPanel', module)
	.add('GraphPanel simple', () => (
		<GraphPanel graphCode={'digraph G{ "Langerfeld  473 21/0" [style="fill: #00ff00; font-weight: bold"];}'} />
	))
	.add('GraphPanel complex', () => (
		<GraphPanel
			graphCode={
				'digraph G{\n"Beyenburg 13 635/0"->"Beyenburg 13 915/0" [lineInterpolate="linear"];\n"Beyenburg 13 757/0"->"Beyenburg 13 915/0" [lineInterpolate="linear"];\n"Beyenburg 13 840/0"->"Beyenburg 13 915/0" [lineInterpolate="linear"];\n"Beyenburg 13 903/0"->"Beyenburg 13 915/0" [lineInterpolate="linear"];\n"Beyenburg 13 915/0"  [style="fill: #eee; font-weight: bold"];\n}'
			}
		/>
	))
	.add('GraphPanel simple with style', () => (
		<GraphPanel graphCode={'digraph G{ "Langerfeld  473 21/0"[color=red];}'} />
	));
