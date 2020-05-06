import "assets/scss/styles.scss";

import React, { Component } from "react";
import SayHello from "./components/SayHello";

class App extends Component {
	constructor(constructor) {
		super(constructor);
		this.state = {};
	}

	render() {
		return (
			<>
				<SayHello name="Florian" />
			</>
		);
	}
}

export default App;
