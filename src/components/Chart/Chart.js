import React, { useState } from 'react';
import styles from './Chart.module.scss';
import { Bar, Pie } from '@reactchartjs/react-chart.js';

const Chart = ({ data, dailyInfo, handleChangeDate, daily }) => {
	const confirmedValue = data.confirmed.value;
	const recoveredValue = data.recovered.value;
	const deathsValue = data.deaths.value;
	const [disabled, setDisabled] = useState(true);

	const barChart = data && (
		<Bar
			data={{
				labels: [
					`Confirmed: ${confirmedValue}`,
					`Recovered: ${recoveredValue}`,
					`Deaths: ${deathsValue}`,
				],
				datasets: [
					{
						label: 'View',
						backgroundColor: [
							'burlywood',
							'rgb(241, 136, 236)',
							'rgb(37, 22, 2)',
						],
						data: [confirmedValue, recoveredValue, deathsValue],
					},
				],
			}}
		/>
	);

	const pieChart = dailyInfo && (
		<Pie
			data={{
				labels: ['Confirmed', `Recovered`, `Deaths`],
				datasets: [
					{
						backgroundColor: [
							'burlywood',
							'rgb(241, 136, 236)',
							'rgb(37, 22, 2)',
						],
						data: [dailyInfo.confirmed, dailyInfo.recovered, dailyInfo.deaths],
					},
				],
			}}
		/>
	);

	return (
		<div className={styles.chartWrapper}>
			<div className={styles.bar}>{data && barChart}</div>
			<div className={styles.pie}>
				<div>
					<p>History View:</p>
					<select
						className={styles.option}
						onChange={(e) => {
							handleChangeDate(e.target.value);
							setDisabled(false);
						}}
						defaultValue=""
					>
						<option value="Date" disabled={!disabled}>
							Date
						</option>
						{daily &&
							daily.map((el) => <option value={el.date}>{el.date}</option>)}
					</select>
				</div>
				{dailyInfo && pieChart}
			</div>
		</div>
	);
};

export default Chart;
