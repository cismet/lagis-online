import React from 'react';
import CustomTable from '../Commons/CustomTable';
import formattedDateString from '../Commons/DateHelper.js';

const extractBeschluesse = (vertrag) => {
	//kein Beispiel mit Bechlüssen gefunden. todo: Beispiel finden und Funktion testen
	var beschlussArray = [];

	if (vertrag != null) {
		var beschluesse = vertrag.n_beschluss;

		if (beschluesse != null) {
			for (var index = 0; index < beschluesse.length; ++index) {
				var kostenObject = {};

				if (beschluesse[index].fk_beschlussart != null) {
					kostenObject.beschlussart = beschluesse[index].fk_beschlussart.bezeichnung;

					if (beschluesse[index].datum != null) {
						kostenObject.datum = formattedDateString(new Date(beschluesse[index].fk_beschlussart.datum));
					}
				}

				beschlussArray.push(kostenObject);
			}
		}
	}

	return beschlussArray;
};

const BeschlussTabelle = ({ vertrag: data }) => {
	const columnsBeschluesse = [
		{
			Header: 'Beschlussart',
			accessor: 'beschlussart'
		},
		{
			Header: 'Datum',
			accessor: 'datum'
		}
	];

	return <CustomTable data={extractBeschluesse(data)} columns={columnsBeschluesse} />;
};

export default BeschlussTabelle;
