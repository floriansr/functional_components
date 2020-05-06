import React, { useState } from "react";

const Counter = () => {
	const [currentNumber, setCurrentNumber] = useState(0);

	return (
		<div>
			<button
				type="button"
				onClick={() => setCurrentNumber(currentNumber + 1)}
			>
				+
			</button>
			<button
				type="button"
				onClick={() => setCurrentNumber(currentNumber - 1)}
			>
				-
			</button>

			<p>Compteur : {currentNumber}</p>
		</div>
	);
};

export default Counter;
