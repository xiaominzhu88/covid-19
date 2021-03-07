import React, { useState } from 'react';
import styles from './Country.module.scss';

const Country = ({ country, handleChange }) => {
	const [disabled, setDisabled] = useState(true);
	return (
		<form>
			<div>
				<p>Current View:</p>
				<select
					className={styles.option}
					onChange={(e) => {
						handleChange(e.target.value);
						setDisabled(false);
					}}
					defaultValue=""
				>
					<option value="Global" disabled={!disabled}>
						Global
					</option>
					{country && country.map((el) => <option value={el}>{el}</option>)}
				</select>
			</div>
		</form>
	);
};

export default Country;
