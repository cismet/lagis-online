import React from 'react';
import CustomTable from '../Commons/CustomTable';
import jsonData from './../../assets/json/fs_22726.json';
import formattedDateString from '../Commons/DateHelper.js';
import { Button } from 'reactstrap';

const extractRebe = (flurstueck) => {
	var res = [];
	var rebes = flurstueck.rebes;

	if (rebes != null) {
		for (var index = 0; index < rebes.length; ++index) {
			var rebe = {};
			rebe.ist_recht = rebes[index].ist_recht;
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

const KassenzeichenTabelle = () => {
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

	const buttons = (
		<Button>
			<i className="fa fa-undo fa-lg" />
		</Button>
	);

	return (
		<CustomTable
			data={extractRebe(jsonData)}
			cardTitle="Rechte&nbsp;und&nbsp;Belastungen"
			columns={columns}
			additionalButtons={buttons}
		/>
	);
};

export default KassenzeichenTabelle;
