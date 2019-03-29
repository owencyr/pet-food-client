import config from "../config";
import TokenService from "./token-service";

const RatingApiService = {
	getRatings() {
		return fetch(`${config.API_ENDPOINT}/ratings`).then(res =>
			!res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
		);
	},
	getUserRatedFoods(userid) {
		return fetch(`${config.API_ENDPOINT}/ratings/users?userid=${userid}`, {
			method: "GET",
			headers: {
				authorization: `bearer ${TokenService.getAuthToken()}`,
				"content-type": "application/json"
			}
		}).then(res =>
			!res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
		);
	},

	postRating(foodId, userId, rating) {
		return fetch(`${config.API_ENDPOINT}/ratings/foods/${foodId}`, {
			method: "POST",
			headers: {
				authorization: `bearer ${TokenService.getAuthToken()}`,
				"content-type": "application/json"
			},
			body: JSON.stringify({
				foodid: foodId,
				rating: rating,
				userid: userId
			})
		}).then(res =>
			!res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
		);
	}
};

export default RatingApiService;
