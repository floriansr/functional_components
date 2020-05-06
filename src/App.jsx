import "assets/scss/styles.scss";

import React, { Component } from "react";
import SayHello from "./components/SayHello";
import Counter from "./components/Counter";
import NameForm from "./components/NameForm";

class App extends Component {
	constructor(constructor) {
		super(constructor);
		this.state = {};
	}

	render() {
		return (
			<>
				<SayHello name="Florian" />
				<Counter />
				<NameForm />
			</>
		);
	}
}

export default App;
