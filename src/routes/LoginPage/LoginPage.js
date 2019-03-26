import React, { Component } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import { Section } from "../../components/Utils/Utils";
import FoodListContext from "../../contexts/FoodListContext";

export default class LoginPage extends Component {
	static contextType = FoodListContext;
	static defaultProps = {
		location: {},
		history: {
			push: () => {}
		}
	};

	handleLoginSuccess = () => {
		this.context.updateLoggedIn();
		const { location, history } = this.props;
		const destination = (location.state || {}).from || "/";
		history.push(destination);
	};

	render() {
		return (
			<Section className="LoginPage">
				<h2>Login</h2>
				<LoginForm onLoginSuccess={this.handleLoginSuccess} />
			</Section>
		);
	}
}
