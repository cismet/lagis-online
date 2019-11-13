import React, { useState } from 'react';
import "react-table/react-table.css";
import CustomTable from '../Commons/CustomTable';
import formattedDateString from '../Commons/DateHelper.js'


const extractKosten = (vertrag) => {
    var kostenArray = [];
    var kosten = vertrag.n_kosten;

    if (kosten != null) {
        for (var index = 0; index < kosten.length; ++index) {
            var kostenObject = {};
            kostenObject.betrag = kosten[index].betrag;

            if (kosten[index].fk_kostenart != null) {
                kostenObject.kostenart = kosten[index].fk_kostenart.bezeichnung;
            }

            if (kosten[index].datum != null) {
                kostenObject.anweisung = formattedDateString(new Date(kosten[index].datum));
            }

            kostenArray.push(kostenObject);
        }
    }
    return kostenArray;    
}

const KostenTabelle = ({vertrag: data, selectionListener: listener}) => {
    const columnsMipa = [{
        Header: 'Kostenart',
        accessor: 'kostenart'
      }, {
        Header: 'Betrag',
        accessor: 'betrag'
      }, {
        Header: 'Anweisung',
        accessor: 'anweisung'
      }];
    const [selectedRow, setSelectedRow] = useState(-1);
    
    const selectionListener = (index) => {
        var newIndex = index;

        if (index === selectedRow) {
            newIndex = -1;
        }

        setSelectedRow(newIndex)

        if (listener != null) {
            if (newIndex !== -1) {
                listener(extractKosten(data)[newIndex].id);
            } else {
                listener(null);
            }
        }
    };

    return (
            <CustomTable
            data={extractKosten(data)}
            columns={columnsMipa}
            rowSelectionListener={selectionListener}
            selectedRow={selectedRow}
            />
        )
    
}


export default KostenTabelle;