import React from 'react';
import CustomTable from '../Commons/CustomTable';

const extractNKF = (flurstueck) => {
	var nkf = [];
	var summe = {};
	var nutzungen = flurstueck.n_nutzungen;

	if (nutzungen != null) {
		for (var index = 0; index < nutzungen.length; ++index) {
			if (nutzungen[index].n_buchungen != null) {
				for (var buchungIndex = 0; buchungIndex < nutzungen[index].n_buchungen.length; ++buchungIndex) {
					var flaeche = nutzungen[index].n_buchungen[buchungIndex].flaeche;
					var quadratmeterpreis = nutzungen[index].n_buchungen[buchungIndex].quadratmeterpreis;

					if (nutzungen[index].n_buchungen[buchungIndex].fk_anlageklasse != null) {
						var schluessel = nutzungen[index].n_buchungen[buchungIndex].fk_anlageklasse.schluessel;
						summe[schluessel] =
							(summe[schluessel] != null ? summe[schluessel] : 0) + flaeche * quadratmeterpreis;
					}
				}
			}
		}
	}

	for (var key in summe) {
		var obj = {};
		obj.anlageklasse = key;
		obj.summe = summe[key].toFixed(2) + ' €';
		nkf.push(obj);
	}

	return nkf;
};

const NKFTabelle = ({ flurstueck: flData }) => {
	const columns = [
		{
			Header: 'Anlageklasse',
			accessor: 'anlageklasse'
		},
		{
			Header: 'Summe',
			accessor: 'summe'
		}
	];

	return <CustomTable cardTitle="NKF&nbsp;Übersicht" data={extractNKF(flData)} columns={columns} buttons={false} />;
};

export default NKFTabelle;
