import React, { useState, useEffect } from 'react';
import styles from './App.module.scss';
import SmallCards from './components/SmallCards/SmallCards';
import Country from './components/Country/Country';

import { fetchCovidData, fetchDailyData, fetchCountries } from './api';
function App() {
	const [data, setData] = useState({});
	const [country, setCountry] = useState([]);
	const [dailyData, setDailyData] = useState({});
	const [status, setStatus] = useState(false);

	useEffect(() => {
		async function fetchData() {
			let covidData = await fetchCovidData();
			let dailyData = await fetchDailyData();
			let countries = await fetchCountries();
			setData({ ...covidData });
			setDailyData({ ...dailyData });
			setCountry([...countries]);
			setStatus(true);
		}
		fetchData();
	}, []);

	if (!status) {
		return 'Loading...';
	}
	const handleChange = async (country) => {
		const fetchedCountryData = await fetchCovidData(country);
		setData({ ...fetchedCountryData, country: country });
	};

	return (
		<div className={styles.app}>
			<header className={styles.header}>
				<p>Covid-19 Tracker</p>
			</header>

			<SmallCards data={data} />
			<Country country={country} handleChange={handleChange} />
		</div>
	);
}

export default App;
