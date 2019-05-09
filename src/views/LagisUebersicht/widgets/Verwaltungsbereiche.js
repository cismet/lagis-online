import React from 'react';
import PropTypes from 'prop-types';
import NumberWidget from './NumberWidget';

// Since this component is simple and static, there's no parent container for
// it.
const Comp = ({}) => {
    return <NumberWidget
        bgcolor="bg-info"
        linkTo="/#/verwaltungsbereiche"
        title="Verwaltungsbereiche"
        subtitle="& Rollen"
        icon="fa fa-folder-open"
        number=""
        additionalContent={(
        <table width="100%" style={{
            marginLeft: '10px'
        }}>
            <tr>
                <td>
                    <div
                        style={{
                        width: '12px',
                        height: '12px',
                        background: '#35CBFD',
                        borderStyle: 'solid',
                        borderWidth: '1px',
                        borderColor: 'black'
                    }}></div>
                </td>
                <td>104.2</td>
                <td>250 m²</td>
            </tr>
            <tr>
                <td>
                    <div
                        style={{
                        width: '12px',
                        height: '12px',
                        background: '#B338E3',
                        borderStyle: 'solid',
                        borderWidth: '1px',
                        borderColor: 'black'
                    }}></div>
                </td>
                <td>403.4</td>
                <td>50 m²</td>
            </tr>
        </table>
    )}/>
};
export default Comp;
Comp.propTypes = {};
