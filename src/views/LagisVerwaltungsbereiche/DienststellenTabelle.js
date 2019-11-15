import React from 'react';
import CustomTable from '../Commons/CustomTable';
import { Button } from 'reactstrap';

const extractDienststelle = (flurstueck) => {
	var dienststellen = [];
	var verwaltungsbereiche_eintraege = flurstueck.n_verwaltungsbereiche_eintraege;

	if (verwaltungsbereiche_eintraege != null) {
		for (var eintragIndex = 0; eintragIndex < verwaltungsbereiche_eintraege.length; ++eintragIndex) {
			var verwaltungsbereiche = flurstueck.n_verwaltungsbereiche_eintraege[eintragIndex].n_verwaltungsbereiche;
			if (verwaltungsbereiche != null) {
				for (var index = 0; index < verwaltungsbereiche.length; ++index) {
					var stelle = {};
					var dienststelle = verwaltungsbereiche[index].fk_verwaltende_dienststelle;
					stelle.dienststelle = dienststelle.fk_ressort.abkuerzung + '.' + dienststelle.abkuerzung_abteilung;
					stelle.flaeche = verwaltungsbereiche[index].flaeche;
					dienststellen.push(stelle);
				}
			}
		}
	}
	return dienststellen;
};

const DienststellenTabelle = ({ flurstueck: flData, style: customStyle }) => {
	const columnsDienststellen = [
		{
			Header: 'Dienststelle',
			accessor: 'dienststelle'
		},
		{
			Header: 'Fläche in m²',
			accessor: 'flaeche'
		}
	];

	const buttons = [
		<Button>
			<i className="fa fa-history fa-lg" />
		</Button>,
		<Button>
			<i className="fa fa-undo fa-lg" />
		</Button>
	];

	return (
		<div style={customStyle}>
			<CustomTable
				style={customStyle}
				cardTitle="Dienststellen"
				data={extractDienststelle(flData)}
				columns={columnsDienststellen}
				additionalButtons={buttons}
			/>
		</div>
	);
};

export default DienststellenTabelle;
