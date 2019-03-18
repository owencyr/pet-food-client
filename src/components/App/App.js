import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../Header/Header";
import PrivateRoute from "../Utils/PrivateRoute";
import PublicOnlyRoute from "../Utils/PublicOnlyRoute";
// import ThingListPage from "../../routes/ThingListPage/ThingListPage";
// import ThingPage from "../../routes/ThingPage/ThingPage";
import LoginPage from "../../routes/LoginPage/LoginPage";
import RegistrationPage from "../../routes/RegistrationPage/RegistrationPage";
import NotFoundPage from "../../routes/NotFoundPage/NotFoundPage";
import TokenService from "../../services/token-service";
import AuthApiService from "../../services/auth-api-service";
import IdleService from "../../services/idle-service";
import "./App.css";
import SearchPage from "../../routes/SearchPage/SearchPage";
import SignInPage from "../../routes/SignInPage/SignInPage";
import BestOfPage from "../../routes/BestOfPage/BestOfPage";
class App extends Component {
	state = { hasError: false };

	// static getDerivedStateFromError(error) {
	// 	console.error(error);
	// 	return { hasError: true };
	// }

	componentDidMount() {
		IdleService.setIdleCallback(this.logoutFromIdle);
		if (TokenService.hasAuthToken()) {
			IdleService.registerIdleTimerResets();
			TokenService.queueCallbackBeforeExpiry(() => {
				AuthApiService.postRefreshToken();
			});
		}
	}

	componentWillUnmount() {
		IdleService.unRegisterIdleResets();
		TokenService.clearCallbackBeforeExpiry();
	}

	logoutFromIdle = () => {
		TokenService.clearAuthToken();
		TokenService.clearCallbackBeforeExpiry();
		IdleService.unRegisterIdleResets();
		this.forceUpdate();
	};

	render() {
		return (
			<div className="App">
				<header className="App__header">
					<Header />
				</header>

				<main className="App__main">
					<Switch className="left-panel">
						<Route exact path="/" component={SignInPage} />
						<PublicOnlyRoute path="/login" component={LoginPage} />
						<PublicOnlyRoute path="/register" component={RegistrationPage} />
						<PrivateRoute path="/search" component={SearchPage} />
						<Route component={NotFoundPage} />
					</Switch>

					<Switch className="right-panel">
						<Route exact path="/" component={BestOfPage} />
					</Switch>
				</main>
			</div>
		);
	}
}

export default App;
