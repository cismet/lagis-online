import React, { useState } from 'react';
import CustomTable from '../Commons/CustomTable';
import formattedDateString from '../Commons/DateHelper.js';
import { Button } from 'reactstrap';

const extractRebe = (flurstueck) => {
	var res = [];
	var rebes = flurstueck.rebes;

	if (rebes != null) {
		for (var index = 0; index < rebes.length; ++index) {
			var rebe = {};
			rebe.ist_recht = rebes[index].ist_recht;
			rebe.id = rebes[index].id;
			if (rebes[index].fk_rebe_art != null) {
				rebe.art = rebes[index].fk_rebe_art.bezeichnung;
			}
			rebe.nummer = rebes[index].nummer;
			if (rebes[index].datum_eintragung != null) {
				rebe.datum_eintragung = formattedDateString(new Date(rebes[index].datum_eintragung));
			}
			if (rebes[index].datum_loeschung != null) {
				rebe.datum_loeschung = formattedDateString(new Date(rebes[index].datum_loeschung));
			}
			rebe.bemerkung = rebes[index].bemerkung;
			rebe.art_des_rechts = rebes[index].beschreibung;
			res.push(rebe);
		}
	}

	return res;
};

const RebeTabelle = ({ flurstueck: data, selectionListener: listener }) => {
	const columns = [
		{
			Header: 'ist Recht',
			accessor: 'ist_recht'
		},
		{
			Header: 'Art',
			accessor: 'art'
		},
		{
			Header: 'Art des Rechts',
			accessor: 'art_des_rechts'
		},
		{
			Header: 'Nummer',
			accessor: 'nummer'
		},
		{
			Header: 'Eintragung Datum',
			accessor: 'datum_eintragung'
		},
		{
			Header: 'Löschung Datum',
			accessor: 'datum_loeschung'
		},
		{
			Header: 'Bemerkung',
			accessor: 'bemerkung'
		}
	];

	var rebes = extractRebe(data);
	const [ selectedRow, setSelectedRow ] = useState(rebes != null && rebes.length > 0 ? 0 : -1);
	const [ selectedFlurstueck, setSelectedFlurstueck ] = useState(data);

	if (data.id != selectedFlurstueck.id) {
		setSelectedFlurstueck(data);
		setSelectedRow(rebes != null && rebes.length > 0 ? 0 : -1);
	}

	const selectionListener = (index) => {
		var newIndex = index;

		if (index === selectedRow) {
			newIndex = -1;
		}

		setSelectedRow(newIndex);

		if (listener != null) {
			if (newIndex !== -1) {
				listener(extractRebe(data)[newIndex].id);
			} else {
				listener(null);
			}
		}
	};

	const buttons = (
		<Button>
			<i className="fa fa-undo fa-lg" />
		</Button>
	);

	return (
		<CustomTable
			data={rebes}
			cardTitle="Rechte&nbsp;und&nbsp;Belastungen"
			columns={columns}
			additionalButtons={buttons}
			rowSelectionListener={selectionListener}
			selectedRow={selectedRow}
		/>
	);
};

export default RebeTabelle;
