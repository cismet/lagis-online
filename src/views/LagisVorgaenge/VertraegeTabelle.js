import React, { useState } from 'react';
import CustomTable from '../Commons/CustomTable';

const extractVertraege = (flurstueck) => {
	var vertragArray = [];
	var vertraege = flurstueck.ar_vertraege;

	if (vertraege != null) {
		for (var index = 0; index < vertraege.length; ++index) {
			var vertrag = {};
			vertrag.quadratmeterpreis = vertraege[index].quadratmeterpreis;
			vertrag.gesamtpreis = vertraege[index].gesamtpreis;
			vertrag.aktenzeichen = vertraege[index].aktenzeichen;
			vertrag.id = vertraege[index].id;

			if (vertraege[index].fk_vertragsart != null) {
				vertrag.vertragsart = vertraege[index].fk_vertragsart.bezeichnung;
			}

			vertragArray.push(vertrag);
		}
	}
	return vertragArray;
};

const VertraegeTabelle = ({ flurstueck: flData, selectionListener: listener }) => {
	const columnsMipa = [
		{
			Header: 'Vertragsart',
			accessor: 'vertragsart'
		},
		{
			Header: 'Aktenzeichen',
			accessor: 'aktenzeichen'
		},
		{
			Header: 'Quadratmeterpreis',
			accessor: 'quadratmeterpreis'
		},
		{
			Header: 'Kaufpreis',
			accessor: 'gesamtpreis'
		}
	];
	const [ selectedRow, setSelectedRow ] = useState(-1);

	const selectionListener = (index) => {
		var newIndex = index;

		if (index === selectedRow) {
			newIndex = -1;
		}

		setSelectedRow(newIndex);

		if (listener != null) {
			if (newIndex !== -1) {
				listener(extractVertraege(flData)[newIndex].id);
			} else {
				listener(null);
			}
		}
	};

	return (
		<CustomTable
			cardTitle="Verträge"
			data={extractVertraege(flData)}
			columns={columnsMipa}
			rowSelectionListener={selectionListener}
			selectedRow={selectedRow}
		/>
	);
};

export default VertraegeTabelle;
