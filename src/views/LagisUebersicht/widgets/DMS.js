import React from 'react';
import PropTypes from 'prop-types';
import NumberWidget from './NumberWidget';

// Since this component is simple and static, there's no parent container for
// it.
const Comp = ({}) => {
    return <NumberWidget
        bgcolor="bg-gray-400"
        linkTo="/#/dms"
        title="DMS"
        subtitle=""
        icon="fa fa-file-pdf-o"
        number="2"/>
};
export default Comp;
Comp.propTypes = {};
