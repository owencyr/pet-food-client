import config from "../config";
import TokenService from "./token-service";

const RatingApiService = {
	getRatings() {
		// Get Ratings does not fetch the vanilla ratings table, but the sum of ratings based on foodid.
		return fetch(`${config.API_ENDPOINT}/ratings`).then(res =>
			!res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
		);
	},
	getUserRatedFoods(userid) {
		// this also does not fetch the vanilla ratings table, but the foods rated by the current user
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
		// this does not stop the user from submitting twice, but the UI does
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
