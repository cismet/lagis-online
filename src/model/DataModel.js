import React, { useState } from 'react';
import fs_17778 from './../assets/json/fs_17778.json';
import fs_18082 from './../assets/json/fs_18082.json';
import fs_18880 from './../assets/json/fs_18880.json';
import fs_19281 from './../assets/json/fs_19281.json';
import fs_22726 from './../assets/json/fs_22726.json';
import fs_23316 from './../assets/json/fs_23316.json';

const flurstuecke = [ fs_17778, fs_18082, fs_18880, fs_19281, fs_22726, fs_23316 ];

const getGemarkungen = () => {
	var gemarkungen = [];

	for (var index = 0; index < flurstuecke.length; ++index) {
		var gemarkung = {
			bezeichnung: flurstuecke[index].fk_flurstueck_schluessel.fk_gemarkung.bezeichnung,
			schluessel: flurstuecke[index].fk_flurstueck_schluessel.fk_gemarkung.schluessel
		};

		if (gemarkungen.filter((e) => e.schluessel === gemarkung.schluessel).length === 0) {
			gemarkungen.push(gemarkung);
		}
	}

	return gemarkungen;
};

const getFlure = (gemarkung) => {
	var flure = [];

	for (var index = 0; index < flurstuecke.length; ++index) {
		if (flurstuecke[index].fk_flurstueck_schluessel.fk_gemarkung.schluessel === gemarkung) {
			var flur = flurstuecke[index].fk_flurstueck_schluessel.flur;

			if (!flure.includes(flur)) {
				flure.push(flur);
			}
		}
	}

	return flure;
};

const getFlurstueckzaehler = (gemarkung, flur) => {
	var zaehler = [];
	for (var index = 0; index < flurstuecke.length; ++index) {
		if (
			flurstuecke[index].fk_flurstueck_schluessel.fk_gemarkung.schluessel === gemarkung &&
			flurstuecke[index].fk_flurstueck_schluessel.flur === flur
		) {
			var z = {
				id: flurstuecke[index].id,
				zaehler: flurstuecke[index].fk_flurstueck_schluessel.flurstueck_zaehler
			};
			zaehler.push(z);
		}
	}

	return zaehler;
};

export { getGemarkungen, getFlure, getFlurstueckzaehler };
