import React from 'react';
import styles from './SmallCards.module.scss';
import death from '../images/death.jpg';
import covid from '../images/covid.jpg';
import global from '../images/global.png';
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
							<div className={styles.header}>{confirmed.text}</div>
							<img src={global} alt="covid" className={styles.cardImage} />
							<CountUp
								start={0}
								end={confirmed.value}
								duration={3}
								separator=","
							/>{' '}
							<li className={styles.text}>{update.text}</li>
							<li className={styles.date}>
								{new Date(update.lastUpdate).toDateString()}
							</li>
						</ul>
						<ul className={styles.recoveredCard}>
							<li className={styles.header}>{recovered.text}</li>
							<img src={covid} alt="covid" className={styles.cardImage} />
							<CountUp
								start={0}
								end={recovered.value}
								duration={3}
								separator=","
							/>{' '}
							<li className={styles.text}>{update.text}</li>
							<li className={styles.date}>
								{new Date(update.lastUpdate).toDateString()}
							</li>
						</ul>
						<ul className={styles.deathCard}>
							<li className={styles.header}>{deaths.text}</li>
							<img src={death} alt="covid" className={styles.cardImage} />
							<CountUp
								start={0}
								end={deaths.value}
								duration={3}
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
