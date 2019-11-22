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
	var vertraege = extractVertraege(flData);
	const [ selectedRow, setSelectedRow ] = useState(vertraege != null && vertraege.length > 0 ? 0 : -1);
	const [ selectedFlurstueck, setSelectedFlurstueck ] = useState(flData);

	if (flData.id != selectedFlurstueck.id) {
		setSelectedFlurstueck(flData);
		setSelectedRow(vertraege != null && vertraege.length > 0 ? 0 : -1);
	}

	const selectionListener = (index) => {
		var newIndex = index;

		if (index === selectedRow || newIndex >= extractVertraege(flData).length) {
			newIndex = -1;
		}

		setSelectedRow(newIndex);

		if (listener != null) {
			if (newIndex !== -1 && newIndex < extractVertraege(flData).length) {
				listener(extractVertraege(flData)[newIndex].id);
			} else {
				listener(null);
			}
		}
	};

	if (selectedRow !== -1 && selectedRow < extractVertraege(flData).length) {
		listener(extractVertraege(flData)[selectedRow].id);
	} else {
		listener(null);
	}

	return (
		<CustomTable
			cardTitle="Verträge"
			data={vertraege}
			columns={columnsMipa}
			rowSelectionListener={selectionListener}
			selectedRow={selectedRow}
		/>
	);
};

export default VertraegeTabelle;
