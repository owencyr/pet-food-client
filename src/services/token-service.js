import jwtDecode from "jwt-decode";
import config from "../config";

let _timeoutId;
const _TEN_SECONDS_IN_MS = 10000;

const TokenService = {
	saveAuthToken(token) {
		window.localStorage.setItem(config.TOKEN_KEY, token);
	},
	saveUserMetadata(id, nickname) {
		window.localStorage.setItem("userid", id);
		window.localStorage.setItem("nickname", nickname);
	},

	getAuthToken() {
		return window.localStorage.getItem(config.TOKEN_KEY);
	},
	clearAuthToken() {
		window.localStorage.removeItem(config.TOKEN_KEY);
	},
	clearUserMetadata() {
		window.localStorage.removeItem("userid");
		window.localStorage.removeItem("nickname");
	},
	hasAuthToken() {
		return !!TokenService.getAuthToken();
	},
	makeBasicAuthToken(userName, password) {
		return window.btoa(`${userName}:${password}`);
	},
	parseJwt(jwt) {
		return jwtDecode(jwt);
	},
	readJwtToken() {
		return TokenService.parseJwt(TokenService.getAuthToken());
	},
	_getMsUntilExpiry(payload) {
		return payload.exp * 1000 - Date.now();
	},
	queueCallbackBeforeExpiry(callback) {
		const msUntilExpiry = TokenService._getMsUntilExpiry(
			TokenService.readJwtToken()
		);
		_timeoutId = setTimeout(callback, msUntilExpiry - _TEN_SECONDS_IN_MS);
	},
	clearCallbackBeforeExpiry() {
		clearTimeout(_timeoutId);
	}
};

export default TokenService;
