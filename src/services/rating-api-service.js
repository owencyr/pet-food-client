import config from "../config";
import TokenService from "./token-service";

const RatingApiService = {
	getRatings() {
		return fetch(`${config.API_ENDPOINT}/ratings`).then(res =>
			!res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
		);
	},
	// getIngredient(ratingId) {
	// 	return fetch(`${config.API_ENDPOINT}/ratings/${ratingId}`, {
	// 		// headers: {
	// 		// 	authorization: `bearer ${TokenService.getAuthToken()}`
	// 		// }
	// 	}).then(res =>
	// 		!res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
	// 	);
	// }
	// getFoodReviews(FoodId) {
	//   return fetch(`${config.API_ENDPOINT}/Foods/${FoodId}/reviews`, {
	//     headers: {
	//       'authorization' : `bearer ${TokenService.getAuthToken()}`,
	//     },
	//   })
	//     .then(res =>
	//       (!res.ok)
	//         ? res.json().then(e => Promise.reject(e))
	//         : res.json()
	//     )
	// },
	postRating(foodId, userId, rating) {
		return fetch(`${config.API_ENDPOINT}/ratings/${foodId}`, {
			method: "POST",
			headers: {
				authorization: `bearer ${TokenService.getAuthToken()}`,
				"content-type": "application/json"
			},
			body: JSON.stringify({
				food_id: foodId,
				rating: rating,
				user_id: userId
			})
		}).then(res =>
			!res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
		);
	}
};

export default RatingApiService;
