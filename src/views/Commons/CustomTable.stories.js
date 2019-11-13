import React from 'react';
import { storiesOf } from '@storybook/react';
import CustomTable from './CustomTable';
import LagisMap from './LagisMap';

storiesOf('CustomTable', module).add('CustomTable With 0 entries', () => {
    const cols = [{
        Header: 'Dienststelle',
        accessor: 'dienststelle'
    }, {
        Header: 'Fläche in m²',
        accessor: 'flaeche'
    }];

    const data = []

    return <CustomTable 
                columns={cols}
                data={data}
                />

}).add('CustomTable With 2 entries', () => {
    const cols = [{
        Header: 'Dienststelle',
        accessor: 'dienststelle'
    }, {
        Header: 'Fläche in m²',
        accessor: 'flaeche'
    }];

    const data = [{
        dienststelle: 'Wasser, Boden, Abfall1',
        flaeche: 65536
    },
    {
        dienststelle: 'Wasser, Boden, Abfall2',
        flaeche: 1000
    }]

    return <CustomTable 
                columns={cols}
                data={data}
                />

}).add('CustomTable With 5 entries', () => {
    const cols = [{
        Header: 'Dienststelle',
        accessor: 'dienststelle'
    }, {
        Header: 'Fläche in m²',
        accessor: 'flaeche'
    }];

    const data = [{
        dienststelle: 'Wasser, Boden, Abfall1',
        flaeche: 65536
    },
    {
        dienststelle: 'Wasser, Boden, Abfall2',
        flaeche: 1000
    },
    {
        dienststelle: 'Wasser, Boden, Abfall3',
        flaeche: 1000
    },
    {
        dienststelle: 'Wasser, Boden, Abfall4',
        flaeche: 1000
    },
    {
        dienststelle: 'Wasser, Boden, Abfall5',
        flaeche: 1000
    }]

    return <CustomTable 
                columns={cols}
                data={data}
                />

}).add('CustomTable With 25 entries', () => {
    const cols = [{
        Header: 'Dienststelle',
        accessor: 'dienststelle'
    }, {
        Header: 'Fläche in m²',
        accessor: 'flaeche'
    }];

    const data = [{
        dienststelle: 'Wasser, Boden, Abfall1',
        flaeche: 65536
    },
    {
        dienststelle: 'Wasser, Boden, Abfall2',
        flaeche: 1000
    },
    {
        dienststelle: 'Wasser, Boden, Abfall3',
        flaeche: 1000
    },
    {
        dienststelle: 'Wasser, Boden, Abfall4',
        flaeche: 1000
    },
    {
        dienststelle: 'Wasser, Boden, Abfall5',
        flaeche: 1000
    },
    {
        dienststelle: 'Wasser, Boden, Abfall6',
        flaeche: 1000
    },
    {
        dienststelle: 'Wasser, Boden, Abfall8',
        flaeche: 1000
    },
    {
        dienststelle: 'Wasser, Boden, Abfall9',
        flaeche: 1000
    },
    {
        dienststelle: 'Wasser, Boden, Abfall10',
        flaeche: 1000
    },
    {
        dienststelle: 'Wasser, Boden, Abfall11',
        flaeche: 1000
    },{
        dienststelle: 'Wasser, Boden, Abfall1',
        flaeche: 65536
    },
    {
        dienststelle: 'Wasser, Boden, Abfall2',
        flaeche: 1000
    },
    {
        dienststelle: 'Wasser, Boden, Abfall3',
        flaeche: 1000
    },
    {
        dienststelle: 'Wasser, Boden, Abfall4',
        flaeche: 1000
    },
    {
        dienststelle: 'Wasser, Boden, Abfall5',
        flaeche: 1000
    },
    {
        dienststelle: 'Wasser, Boden, Abfall6',
        flaeche: 1000
    },
    {
        dienststelle: 'Wasser, Boden, Abfall8',
        flaeche: 1000
    },
    {
        dienststelle: 'Wasser, Boden, Abfall9',
        flaeche: 1000
    },
    {
        dienststelle: 'Wasser, Boden, Abfall10',
        flaeche: 1000
    },
    {
        dienststelle: 'Wasser, Boden, Abfall11',
        flaeche: 1000
    },{
        dienststelle: 'Wasser, Boden, Abfall1',
        flaeche: 65536
    },
    {
        dienststelle: 'Wasser, Boden, Abfall2',
        flaeche: 1000
    },
    {
        dienststelle: 'Wasser, Boden, Abfall3',
        flaeche: 1000
    },
    {
        dienststelle: 'Wasser, Boden, Abfall4',
        flaeche: 1000
    },
    {
        dienststelle: 'Wasser, Boden, Abfall5',
        flaeche: 1000
    }]

    return <CustomTable 
                columns={cols}
                data={data}
                />

});


