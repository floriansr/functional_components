import React, { useState } from "react";

import SayHello from "components/SayHello/index";

const WillUnmount = () => {
	const [seeButton, setSeeButton] = useState(false);

	return (
		<div>
			<h1>Hello World</h1>
			<button type="button" onClick={() => setSeeButton(!seeButton)}>
				toggle
			</button>
			{seeButton && <SayHello name="Sandra" />}
		</div>
	);
};

export default WillUnmount;
