import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchCovidData = async (country) => {
	let fetchUrl = url;
	if (country) {
		fetchUrl = `${url}/countries/${country}`;
	}

	try {
		const {
			data: { confirmed, recovered, deaths, lastUpdate },
		} = await axios.get(fetchUrl);

		return {
			confirmed,
			recovered,
			deaths,
			lastUpdate,
		};
	} catch (err) {
		console.log('Error: ', err);
	}
};

export const fetchDailyData = async () => {
	let dailyUrl = `${url}/daily`;

	try {
		const { data } = await axios.get(dailyUrl);
		const newData = data.map((daily) => ({
			confirmed: daily.confirmed.total,
			recovered: daily.recovered.total,
			deaths: daily.deaths.total,
			date: daily.reportDate,
		}));

		return newData;
	} catch (err) {
		console.log('Error: ', err);
	}
};

export const fetchCountries = async () => {
	let countryUrl = `${url}/countries`;

	try {
		const {
			data: { countries },
		} = await axios.get(countryUrl);

		return countries.map((el) => el.name);
	} catch (err) {
		console.log('Error: ', err);
	}
};
