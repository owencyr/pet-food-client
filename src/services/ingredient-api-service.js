import config from "../config";

const IngredientApiService = {
	getIngredients() {
		return fetch(`${config.API_ENDPOINT}/ingredients`).then(res =>
			!res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
		);
	}
};

export default IngredientApiService;
