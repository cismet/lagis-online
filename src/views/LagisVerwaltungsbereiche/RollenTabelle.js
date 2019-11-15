import React from 'react';
// import 'react-table/react-table.css';
import CustomTable from '../Commons/CustomTable';

const extractRollen = (flurstueck) => {
	var rollen = [];
	var zusatzRollen = flurstueck.n_zusatz_rollen;

	if (zusatzRollen != null) {
		for (var index = 0; index < zusatzRollen.length; ++index) {
			var rolle = {};
			rolle.dienststelle = zusatzRollen[index].fk_dienststelle.fk_ressort.abkuerzung;
			rolle.rolle = zusatzRollen[index].fk_art.name;
			rollen.push(rolle);
		}
	}

	return rollen;
};

const RollenTabelle = ({ flurstueck: flData, style: customStyle }) => {
	const columnsRollen = [
		{
			Header: 'Dienststelle',
			accessor: 'dienststelle'
		},
		{
			Header: 'Rolle',
			accessor: 'rolle'
		}
	];

	const data = extractRollen(flData);
	return (
		<CustomTable
			style={customStyle}
			cardTitle='zusätzliche&nbsp;Rollen'
			data={data}
			columns={columnsRollen}
		/>
	);
};

export default RollenTabelle;
