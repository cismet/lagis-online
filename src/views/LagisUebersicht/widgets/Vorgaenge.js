import React from 'react';
import PropTypes from 'prop-types';
import NumberWidget from './NumberWidget';
// Since this component is simple and static, there's no parent container for
// it.
const Comp = ({}) => {
    return (<NumberWidget
        bgcolor="bg-purple"
        linkTo="/#/vorgaenge"
        title="Vorgänge"
        subtitle=""
        icon="fa fa-long-arrow-right"
        number="0"/>);
};
export default Comp;
Comp.propTypes = {};
