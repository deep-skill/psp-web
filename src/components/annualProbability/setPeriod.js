export const setPeriod = () => {
	const arr = [0.0, 0.05, 0.075];
	for (let i = 0.1; i < 1; i = i + 0.05) {
		const roundedValue = Math.round(i * 100) / 100;
		arr.push(roundedValue);
	}
	for (let i = 1; i < 3.1; i = i + 0.1) {
		const roundedValue = Math.round(i * 10) / 10;
		arr.push(roundedValue);
	}
	return arr;
};

export const setPeriodPercentage = () => {
	const arr = [];
	for (let i = 2; i < 11; i++) {
		arr.push(i);
	}
	return arr;
};
