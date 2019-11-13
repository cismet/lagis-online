import { configure } from '@storybook/react';
import '../src/index.css';
import '../src/App.scss';
const req = require.context('../src/views', true, /\.stories\.js$/);

function loadStories() {
	//require('../src/stories');
	req.keys().forEach((path) => req(path));
}
configure(loadStories, module);
