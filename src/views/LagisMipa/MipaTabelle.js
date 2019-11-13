import React, { useState } from 'react';
import "react-table/react-table.css";
import CustomTable from '../Commons/CustomTable';
import formattedDateString from '../Commons/DateHelper.js'


const extractMipas = (flurstueck) => {
    var mipaData = [];
    var mipas = flurstueck.mipas;

    if (mipas != null) {
        for (var index = 0; index < mipas.length; ++index) {
            var mipa = {};
            mipa.nutzer = mipas[index].nuzer;
            mipa.lage = mipas[index].lage;

            if (mipas[index].vertragsbeginn != null) {
                mipa.vertragsbeginn = formattedDateString(new Date(mipas[index].vertragsbeginn));
            }
            if (mipas[index].vertragsende != null) {
                mipa.vertragsende = formattedDateString(new Date(mipas[index].vertragsende));
            }
            mipa.aktenzeichen = mipas[index].aktenzeichen;
            mipa.flaeche = mipas[index].flaeche;
            mipa.id = mipas[index].id;

            if (mipas[index].fk_mipa_nutzung != null && mipas[index].fk_mipa_nutzung.fk_mipa_kategorie != null && 
                mipas[index].fk_mipa_nutzung.fk_mipa_kategorie.bezeichnung != null) {
                mipa.nutzung = mipas[index].fk_mipa_nutzung.fk_mipa_kategorie.bezeichnung;
            }
            mipaData.push(mipa);
        }
    }
    return mipaData;    
}

const MipaTabelle = ({flurstueck: flData, selectionListener: listener}) => {
    const columnsMipa = [{
        Header: 'Lage',
        accessor: 'lage'
      }, {
        Header: 'Aktenzeichen',
        accessor: 'aktenzeichen'
      }, {
        Header: 'Fläche m²',
        accessor: 'flaeche'
      }, {
        Header: 'Nutzung',
        accessor: 'nutzung'
      }, {
        Header: 'Nutzer',
        accessor: 'nutzer'
      }, {
        Header: 'Vertragsbeginn',
        accessor: 'vertragsbeginn'
      }, {
        Header: 'Vertragsende',
        accessor: 'vertragsende'
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
                listener(extractMipas(flData)[newIndex].id);
            } else {
                listener(null);
            }
        }
    };

    return (
            <CustomTable
            data={extractMipas(flData)}
            columns={columnsMipa}
            rowSelectionListener={selectionListener}
            selectedRow={selectedRow}
            />
        )
    
}


export default MipaTabelle;