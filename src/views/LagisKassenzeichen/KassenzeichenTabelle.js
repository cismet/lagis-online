import React from 'react';
import CustomTable from '../Commons/CustomTable';
import formattedDateString from '../Commons/DateHelper.js';
import { Button } from 'reactstrap';

const extractKassenzeichen = (flurstueck) => {
	var kzs = [];
	var kassenzeichen = flurstueck.n_kassenzeichen;

	if (kassenzeichen != null) {
		for (var index = 0; index < kassenzeichen.length; ++index) {
			var kassenzei = {};
			kassenzei.kassenzeichen = kassenzeichen[index].kassenzeichennummer;
			if (kassenzeichen[index].zugeordnet_am != null) {
				kassenzei.zugeordnet_am = formattedDateString(new Date(kassenzeichen[index].zugeordnet_am));
			}
			kzs.push(kassenzei);
		}
	}

	return kzs;
};

const KassenzeichenTabelle = ({ flurstueck: data }) => {
	const columns = [
		{
			Header: 'Kassenzeichen',
			accessor: 'kassenzeichen'
		},
		{
			Header: 'zugeordnet am',
			accessor: 'zugeordnet_am'
		}
	];
	const buttons = (
		<Button>
			<i className="fa fa-search-plus fa-lg" />
		</Button>
	);

	return (
		<CustomTable
			cardTitle="Kassenzeichen"
			data={extractKassenzeichen(data)}
			columns={columns}
			additionalButtons={buttons}
		/>
	);
};

export default KassenzeichenTabelle;
