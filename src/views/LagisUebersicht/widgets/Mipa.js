import React from 'react';
import PropTypes from 'prop-types';
import NumberWidget from './NumberWidget';
// Since this component is simple and static, there's no parent container for
// it.
const Comp = ({}) => {
    return (<NumberWidget
        bgcolor="bg-primary"
        linkTo="/#/mipa"
        title="Miet- und Pachtverträge"
        subtitle=""
        icon="fa fa-money"
        number="7"/>);
};

export default Comp;
Comp.propTypes = {};
