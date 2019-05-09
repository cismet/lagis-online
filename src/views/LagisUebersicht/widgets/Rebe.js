import React from 'react';
import PropTypes from 'prop-types';
import NumberWidget from './NumberWidget';
// Since this component is simple and static, there's no parent container for
// it.
const Comp = ({}) => {
    return (<NumberWidget
        bgcolor="bg-warning"
        linkTo="/#/rebe"
        title="Rechte und Belastungen"
        subtitle=" Dienstbarkeiten, Baulasten"
        icon="fa fa-road"
        number="3"/>);
};

export default Comp;
Comp.propTypes = {};
