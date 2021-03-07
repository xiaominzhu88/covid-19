import React, { useState, useEffect } from 'react';
import styles from './App.module.scss';
import SmallCards from './components/SmallCards/SmallCards';
import Country from './components/Country/Country';
import Chart from './components/Chart/Chart';
import { fetchCovidData, fetchDailyData, fetchCountries } from './api';

function App() {
	const [data, setData] = useState({});
	const [daily, setDaily] = useState([]);
	const [dailyInfo, setDailyInfo] = useState([]);
	const [country, setCountry] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		async function fetchData() {
			let covidData = await fetchCovidData();
			let dailyDate = await fetchDailyData();
			let countries = await fetchCountries();
			setData({ ...covidData });
			setDaily([...dailyDate]);
			setCountry([...countries]);
			setLoading(true);
		}
		fetchData();
	}, [setDaily, setData, setCountry]);

	if (!loading) {
		return 'Loading...';
	}
	const handleChange = async (country) => {
		const fetchedCountryData = await fetchCovidData(country);
		setData({ ...fetchedCountryData, country: country });
	};
	const handleChangeDate = async (date) => {
		const choosedDate = daily.map((el) => el.date).find((el) => el === date);
		const dailyInfo = daily
			.map((el) => el)
			.find((el) => el.date === choosedDate);
		setDailyInfo(dailyInfo);
	};
	return (
		<div className={styles.app}>
			<header className={styles.header}>
				<p>Covid-19 Tracker</p>
			</header>

			<SmallCards data={data} />
			<Country country={country} handleChange={handleChange} />
			<Chart
				handleChangeDate={handleChangeDate}
				daily={daily}
				data={data}
				country={country}
				dailyInfo={dailyInfo}
			/>
		</div>
	);
}

export default App;
