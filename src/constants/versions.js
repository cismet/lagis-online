const TOPICMAPVERSION = '%LAGIS_ONLINE_VERSION%';
const TOPICMAPHASH = '#%LAGIS_ONLINE_HASH%';

export const getTopicMapVersion = () => {
	if (TOPICMAPVERSION === '%LAGIS_ONLINE' + '_' + 'VERSION%') {
		return 'dev-hot-reload';
	} else {
		return TOPICMAPVERSION;
	}
};
export const getTopicMapHash = () => {
	if (TOPICMAPHASH === '%LAGIS_ONLINE' + '_' + 'HASH%') {
		return '#dev-hot-reload';
	} else {
		return TOPICMAPHASH;
	}
};
