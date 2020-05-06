import React, { useEffect } from "react";

const SayHello = ({ name }: SayHello) => {
	useEffect(() => {
		return () => {
			console.log("The component will be unmounted");
		};
	}, []);
	return <h1>Hello {name}</h1>;
};

export default SayHello;
