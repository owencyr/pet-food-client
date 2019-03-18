import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SignInPage extends Component {
	render() {
		return (
			<section className="sign-in-page">
				<Link to="/login">Log in</Link>
				<Link to="/register">Register</Link>
			</section>
		);
	}
}
