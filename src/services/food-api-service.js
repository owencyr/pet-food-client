import config from "../config";

const FoodApiService = {
	getFoods() {
		return fetch(`${config.API_ENDPOINT}/foods`).then(res =>
			!res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
		);
	}
};

export default FoodApiService;
