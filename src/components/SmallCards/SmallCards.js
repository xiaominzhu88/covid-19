import React from 'react';
import styles from './SmallCards.module.scss';
import covid from '../images/covid.jpg';
import CountUp from 'react-countup';

const SmallCards = ({ data }) => {
	const confirmedValue = data.confirmed.value;
	const recoveredValue = data.recovered.value;
	const deathsValue = data.deaths.value;
	const lastUpdate = data.lastUpdate;

	const confirmed = {
		value: confirmedValue,
		text: 'Confirmed',
	};

	const recovered = {
		value: recoveredValue,
		text: 'recovered',
	};
	const deaths = {
		value: deathsValue,
		text: 'deaths',
	};
	const update = {
		lastUpdate: lastUpdate,
		text: 'Last Update at: ',
	};

	return (
		<div className={styles.cardWrapper}>
			<div>
				{data && (
					<div className={styles.cards}>
						<ul className={styles.confirmedCard}>
							<img src={covid} alt="covid" className={styles.cardImage} />
							<li className={styles.text}>{confirmed.text}</li>
							<CountUp
								start={0}
								end={confirmed.value}
								duration={2}
								separator=","
							/>{' '}
							<li className={styles.text}>{update.text}</li>
							<li className={styles.date}>
								{new Date(update.lastUpdate).toDateString()}
							</li>
						</ul>
						<ul className={styles.recoveredCard}>
							<img src={covid} alt="covid" className={styles.cardImage} />
							<li className={styles.text}>{recovered.text}</li>
							<CountUp
								start={0}
								end={recovered.value}
								duration={2}
								separator=","
							/>{' '}
							<li className={styles.text}>{update.text}</li>
							<li className={styles.date}>
								{new Date(update.lastUpdate).toDateString()}
							</li>
						</ul>
						<ul className={styles.deathCard}>
							<img src={covid} alt="covid" className={styles.cardImage} />
							<li className={styles.text}>{deaths.text}</li>
							<CountUp
								start={0}
								end={deaths.value}
								duration={2}
								separator=","
							/>
							<li className={styles.text}>{update.text}</li>
							<li className={styles.date}>
								{new Date(update.lastUpdate).toDateString()}
							</li>
						</ul>
					</div>
				)}
			</div>
		</div>
	);
};

export default SmallCards;
