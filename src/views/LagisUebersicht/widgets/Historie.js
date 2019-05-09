import React from 'react';
import PropTypes from 'prop-types';
import NumberWidget from './NumberWidget';

// Since this component is simple and static, there's no parent container for
// it.
const Comp = ({}) => {
    return (<NumberWidget
        bgcolor="bg-teal"
        linkTo="/#/historie"
        title="Historie"
        subtitle=""
        icon="fa fa-history"
        number="3"/>);
};

export default Comp;
Comp.propTypes = {};
