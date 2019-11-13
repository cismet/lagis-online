import React from 'react';
import 'react-table/react-table.css';
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

const DienststellenTabelle = ({ flurstueck: flData }) => {
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

	// for test purposes
	// const data = [{
	//     dienststelle: 'Wasser, Boden, Abfall1',
	//     flaeche: 65536
	// },
	// {
	//     dienststelle: 'Wasser, Boden, Abfall2',
	//     flaeche: 1000
	// },
	// {
	//     dienststelle: 'Wasser, Boden, Abfall3',
	//     flaeche: 1000
	// },
	// {
	//     dienststelle: 'Wasser, Boden, Abfall4',
	//     flaeche: 1000
	// },
	// {
	//     dienststelle: 'Wasser, Boden, Abfall5',
	//     flaeche: 1000
	// },
	// {
	//     dienststelle: 'Wasser, Boden, Abfall6',
	//     flaeche: 1000
	// },
	// {
	//     dienststelle: 'Wasser, Boden, Abfall8',
	//     flaeche: 1000
	// },
	// {
	//     dienststelle: 'Wasser, Boden, Abfall9',
	//     flaeche: 1000
	// },
	// {
	//     dienststelle: 'Wasser, Boden, Abfall10',
	//     flaeche: 1000
	// },
	// {
	//     dienststelle: 'Wasser, Boden, Abfall11',
	//     flaeche: 1000
	// }]
	const buttons = [
		<Button>
			<i className="fa fa-history fa-lg" />
		</Button>,
		<Button>
			<i className="fa fa-undo fa-lg" />
		</Button>
	];

	return (
		<div>
			<CustomTable
				cardTitle="Dienststellen"
				data={extractDienststelle(flData)}
				columns={columnsDienststellen}
				additionalButtons={buttons}
			/>
		</div>
	);
};

export default DienststellenTabelle;
