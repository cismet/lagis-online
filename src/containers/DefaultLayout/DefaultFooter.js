import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { getTopicMapVersion, getTopicMapHash } from '../../constants/versions';

const propTypes = {
	children: PropTypes.node
};

const defaultProps = {};

class DefaultFooter extends Component {
	render() {
		// eslint-disable-next-line
		const { children, ...attributes } = this.props;

		return (
			<React.Fragment>
				<span>
					<a href='https://cismet.de'>LagIS-online</a> &copy; 2019. {getTopicMapVersion()}
				</span>
				<span className='ml-auto'>
					Powered by <a href='https://cismet.de'>cids</a>
				</span>
			</React.Fragment>
		);
	}
}

DefaultFooter.propTypes = propTypes;
DefaultFooter.defaultProps = defaultProps;

export default DefaultFooter;
