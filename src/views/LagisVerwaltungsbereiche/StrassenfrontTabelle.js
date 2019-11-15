import React from 'react';
// import 'react-table/react-table.css';
import CustomTable from '../Commons/CustomTable';

const extractStrassenfront = (flurstueck) => {
	var strassenfronten = [];
	var strassen = flurstueck.n_strassenfronten;

	if (strassen != null) {
		for (var index = 0; index < strassen.length; ++index) {
			var stelle = {};
			stelle.strasse = strassen[index].strassenname;
			stelle.laenge = strassen[index].laenge;
			strassenfronten.push(stelle);
		}
	}

	return strassenfronten;
};

const StrassenfrontTabelle = ({ flurstueck: flData, style: customStyle }) => {
	const columnsStrasse = [
		{
			Header: 'Straße',
			accessor: 'strasse'
		},
		{
			Header: 'Länge',
			accessor: 'laenge'
		}
	];

	return (
		<CustomTable
			style={customStyle}
			cardTitle='Straßenfronten'
			data={extractStrassenfront(flData)}
			columns={columnsStrasse}
		/>
	);
};

export default StrassenfrontTabelle;
