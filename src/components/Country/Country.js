import React, { useEffect, useState } from 'react';
import styles from './Country.module.scss';

const Country = ({ country, handleChange }) => {
	return (
		<form>
			<p>Select Country:</p>
			<select
				className={styles.option}
				onChange={(e) => handleChange(e.target.value)}
				defaultValue=""
			>
				{country && country.map((el) => <option value={el}>{el}</option>)}
			</select>
		</form>
	);
};

export default Country;
