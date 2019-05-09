import React from 'react';
import PropTypes from 'prop-types';
import NumberWidget from './NumberWidget';
// Since this component is simple and static, there's no parent container for
// it.
const Comp = ({}) => {
    return (<NumberWidget
        bgcolor="bg-danger"
        linkTo="/#/nutzung"
        title="Nutzung"
        subtitle="& Anlagenbuchhaltung"
        icon="fa fa-pie-chart"
        number="1"/>);
};

export default Comp;
Comp.propTypes = {};
