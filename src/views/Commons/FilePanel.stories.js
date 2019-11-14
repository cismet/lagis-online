import React from 'react';
import { storiesOf } from '@storybook/react';
import FilePanel from './FilePanel.js';

storiesOf('FilePanel', module)
	.add('FilePanel 1 file', () => (
		<FilePanel
			dmsUrls={[
				{ name: 'MP', server: 'stadt.wuppertal-intra.de', path: '\\102\\Stadt\\MP-Verträge\\Elberfeld\\' }
			]}
		/>
	))
	.add('FilePanel 5 file', () => (
		<FilePanel
			dmsUrls={[
				{ name: 'MP', server: 'stadt.wuppertal-intra.de', path: '\\102\\Stadt\\MP-Verträge\\Elberfeld\\' },
				{ name: 'MP', server: 'stadt.wuppertal-intra.de', path: '\\102\\Stadt\\MP-Verträge\\Elberfeld\\' },
				{ name: 'MP', server: 'stadt.wuppertal-intra.de', path: '\\102\\Stadt\\MP-Verträge\\Elberfeld\\' },
				{ name: 'MP', server: 'stadt.wuppertal-intra.de', path: '\\102\\Stadt\\MP-Verträge\\Elberfeld\\' },
				{ name: 'MP', server: 'stadt.wuppertal-intra.de', path: '\\102\\Stadt\\MP-Verträge\\Elberfeld\\' }
			]}
		/>
	))
	.add('FilePanel 25 file', () => (
		<FilePanel
			dmsUrls={[
				{ name: 'MP', server: 'stadt.wuppertal-intra.de', path: '\\102\\Stadt\\MP-Verträge\\Elberfeld\\' },
				{ name: 'MP1', server: 'stadt.wuppertal-intra.de', path: '\\102\\Stadt\\MP-Verträge\\Elberfeld\\' },
				{ name: 'MP', server: 'stadt.wuppertal-intra.de', path: '\\102\\Stadt\\MP-Verträge\\Elberfeld\\' },
				{ name: 'MP', server: 'stadt.wuppertal-intra.de', path: '\\102\\Stadt\\MP-Verträge\\Elberfeld\\' },
				{ name: 'MP', server: 'stadt.wuppertal-intra.de', path: '\\102\\Stadt\\MP-Verträge\\Elberfeld\\' },
				{ name: 'MP', server: 'stadt.wuppertal-intra.de', path: '\\102\\Stadt\\MP-Verträge\\Elberfeld\\' },
				{ name: 'MP', server: 'stadt.wuppertal-intra.de', path: '\\102\\Stadt\\MP-Verträge\\Elberfeld\\' },
				{ name: 'MP', server: 'stadt.wuppertal-intra.de', path: '\\102\\Stadt\\MP-Verträge\\Elberfeld\\' },
				{ name: 'MP', server: 'stadt.wuppertal-intra.de', path: '\\102\\Stadt\\MP-Verträge\\Elberfeld\\' },
				{ name: 'MP', server: 'stadt.wuppertal-intra.de', path: '\\102\\Stadt\\MP-Verträge\\Elberfeld\\' },
				{ name: 'MP', server: 'stadt.wuppertal-intra.de', path: '\\102\\Stadt\\MP-Verträge\\Elberfeld\\' },
				{ name: 'MP', server: 'stadt.wuppertal-intra.de', path: '\\102\\Stadt\\MP-Verträge\\Elberfeld\\' },
				{ name: 'MP', server: 'stadt.wuppertal-intra.de', path: '\\102\\Stadt\\MP-Verträge\\Elberfeld\\' },
				{ name: 'MP', server: 'stadt.wuppertal-intra.de', path: '\\102\\Stadt\\MP-Verträge\\Elberfeld\\' },
				{ name: 'MP', server: 'stadt.wuppertal-intra.de', path: '\\102\\Stadt\\MP-Verträge\\Elberfeld\\' },
				{ name: 'MP', server: 'stadt.wuppertal-intra.de', path: '\\102\\Stadt\\MP-Verträge\\Elberfeld\\' },
				{ name: 'MP', server: 'stadt.wuppertal-intra.de', path: '\\102\\Stadt\\MP-Verträge\\Elberfeld\\' },
				{ name: 'MP', server: 'stadt.wuppertal-intra.de', path: '\\102\\Stadt\\MP-Verträge\\Elberfeld\\' },
				{ name: 'MP', server: 'stadt.wuppertal-intra.de', path: '\\102\\Stadt\\MP-Verträge\\Elberfeld\\' },
				{ name: 'MP', server: 'stadt.wuppertal-intra.de', path: '\\102\\Stadt\\MP-Verträge\\Elberfeld\\' },
				{ name: 'MP', server: 'stadt.wuppertal-intra.de', path: '\\102\\Stadt\\MP-Verträge\\Elberfeld\\' },
				{ name: 'MP', server: 'stadt.wuppertal-intra.de', path: '\\102\\Stadt\\MP-Verträge\\Elberfeld\\' },
				{ name: 'MP', server: 'stadt.wuppertal-intra.de', path: '\\102\\Stadt\\MP-Verträge\\Elberfeld\\' },
				{ name: 'MP', server: 'stadt.wuppertal-intra.de', path: '\\102\\Stadt\\MP-Verträge\\Elberfeld\\' },
				{ name: 'MP', server: 'stadt.wuppertal-intra.de', path: '\\102\\Stadt\\MP-Verträge\\Elberfeld\\' }
			]}
		/>
	));
