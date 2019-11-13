import React from 'react';
import CustomTable from '../Commons/CustomTable';
import jsonData from './../../assets/json/fs_22726.json';
import { Button } from 'reactstrap';

const extractNutzung = (flurstueck) => {
	var nutzungArray = [];
	var nutzungen = flurstueck.n_nutzungen;

	if (nutzungen != null) {
		for (var index = 0; index < nutzungen.length; ++index) {
			var nutzung = {};

			if (nutzungen[index].n_buchungen != null) {
				for (var buchungIndex = 0; buchungIndex < nutzungen[index].n_buchungen.length; ++buchungIndex) {
					nutzung.nutzungs_nr = nutzungen[index].n_buchungen[buchungIndex].id;
					nutzung.buchungs_nr = buchungIndex + 1;
					nutzung.flaeche = nutzungen[index].n_buchungen[buchungIndex].flaeche;
					nutzung.quadratmeterpreis = nutzungen[index].n_buchungen[buchungIndex].quadratmeterpreis;
					nutzung.ist_buchwert = nutzungen[index].n_buchungen[buchungIndex].ist_buchwert;
					nutzung.bemerkung = nutzungen[index].n_buchungen[buchungIndex].bemerkung;

					if (nutzungen[index].n_buchungen[buchungIndex].fk_nutzungsart != null) {
						nutzung.schluessel = nutzungen[index].n_buchungen[buchungIndex].fk_nutzungsart.schluessel;
						nutzung.na_bezeichnung = nutzungen[index].n_buchungen[buchungIndex].fk_nutzungsart.bezeichnung;
					}

					if (nutzungen[index].n_buchungen[buchungIndex].fk_anlageklasse != null) {
						nutzung.ak_bezeichnung = nutzungen[index].n_buchungen[buchungIndex].fk_anlageklasse.bezeichnung;
					}
					nutzung.gesamtpreis = (nutzung.flaeche * nutzung.quadratmeterpreis).toFixed(2) + ' €';
					nutzung.quadratmeterpreis = nutzung.quadratmeterpreis.toFixed(2) + ' €';
					nutzungArray.push(nutzung);
				}
			}
		}
	}

	return nutzungArray;
};

const NutzungTabelle = () => {
	const columns = [
		{
			Header: 'Nutzung-Nr.',
			accessor: 'nutzungs_nr'
		},
		{
			Header: 'Buchungs-Nr.',
			accessor: 'buchungs_nr'
		},
		{
			Header: 'Anlageklasse',
			accessor: 'ak_bezeichnung'
		},
		{
			Header: 'Nutzugsart',
			accessor: 'schluessel'
		},
		{
			Header: 'Nutzungsarten-Bezeichnung',
			accessor: 'na_bezeichnung'
		},
		{
			Header: 'Fläche/m²',
			accessor: 'flaeche'
		},
		{
			Header: 'm²-Preis',
			accessor: 'quadratmeterpreis'
		},
		{
			Header: 'Gesamtpreis',
			accessor: 'gesamtpreis'
		},
		{
			Header: 'Stille Reserve',
			accessor: 'bemerkung'
		},
		{
			Header: 'Buchwert',
			accessor: 'ist_buchwert'
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
			cardTitle="Nutzungen"
			data={extractNutzung(jsonData)}
			columns={columns}
			additionalButtons={buttons}
		/>
	);
};

export default NutzungTabelle;
