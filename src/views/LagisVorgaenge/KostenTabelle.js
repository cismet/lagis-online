import React from 'react';
import 'react-table/react-table.css';
import CustomTable from '../Commons/CustomTable';
import formattedDateString from '../Commons/DateHelper.js';

const extractKosten = (vertrag) => {
	var kostenArray = [];

	if (vertrag != null) {
		var kosten = vertrag.n_kosten;

		if (kosten != null) {
			for (var index = 0; index < kosten.length; ++index) {
				var kostenObject = {};
				kostenObject.betrag = kosten[index].betrag.toFixed(2) + ' €';

				if (kosten[index].fk_kostenart != null) {
					kostenObject.kostenart = kosten[index].fk_kostenart.bezeichnung;
				}

				if (kosten[index].datum != null) {
					kostenObject.anweisung = formattedDateString(new Date(kosten[index].datum));
				}

				kostenArray.push(kostenObject);
			}
		}
	}

	return kostenArray;
};

const KostenTabelle = ({ vertrag: data }) => {
	const columnsKosten = [
		{
			Header: 'Kostenart',
			accessor: 'kostenart'
		},
		{
			Header: 'Betrag',
			accessor: 'betrag'
		},
		{
			Header: 'Anweisung',
			accessor: 'anweisung'
		}
	];

	return <CustomTable data={extractKosten(data)} columns={columnsKosten} />;
};

export default KostenTabelle;
