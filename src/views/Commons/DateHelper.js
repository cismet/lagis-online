const formattedDateString = (value) => {
	if (value != null) {
		var date;
		if (value instanceof Date) {
			date = value;
		} else {
			date = new Date(value);
		}
		return date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear();
	} else {
		return '';
	}
};

export default formattedDateString;
