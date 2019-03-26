import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TokenService from "../../services/token-service";
import IdleService from "../../services/idle-service";
import "./Header.css";

export default class Header extends Component {
	handleLogoutClick = () => {
		TokenService.clearAuthToken();
		TokenService.clearUserNick();
		TokenService.clearCallbackBeforeExpiry();
		IdleService.unRegisterIdleResets();
	};

	renderLogoutLink() {
		const nickname = window.localStorage.getItem("nickname");
		return (
			<div className="Header__logged-in">
				<span className="User__greeting">{`Hello, ${nickname}`}</span>
				<Link onClick={this.handleLogoutClick} to="/">
					Logout
				</Link>
			</div>
		);
	}

	renderLoginLink() {
		return (
			<div className="Header__not-logged-in">
				<Link to="/login">Log in</Link>
				<Link to="/register">Register</Link>
			</div>
		);
	}

	render() {
		return (
			<>
				<nav className="Header">
					<h1>
						<Link to="/">
							{/* <FontAwesomeIcon className="blue" icon="gift" /> */}
							Pet Food Shopper
						</Link>
					</h1>
					<span className="Header__tagline--wide">
						Pet Nutrition, Simplified
					</span>
					{TokenService.hasAuthToken()
						? this.renderLogoutLink()
						: this.renderLoginLink()}
				</nav>

				<span className="Header__tagline--narrow">
					Pet Nutrition, Simplified
				</span>
			</>
		);
	}
}
