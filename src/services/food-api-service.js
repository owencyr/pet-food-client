import config from "../config";
import TokenService from "./token-service";

const FoodApiService = {
	getFoods() {
		return fetch(`${config.API_ENDPOINT}/foods`, {
			// headers: {
			// 	authorization: `bearer ${TokenService.getAuthToken()}`
			// }
		}).then(res =>
			!res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
		);
	},
	getFood(foodId) {
		return fetch(`${config.API_ENDPOINT}/foods/${foodId}`, {
			headers: {
				authorization: `bearer ${TokenService.getAuthToken()}`
			}
		}).then(res =>
			!res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
		);
	}
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
	// postReview(FoodId, text, rating) {
	//   return fetch(`${config.API_ENDPOINT}/reviews`, {
	//     method: 'POST',
	//     headers: {
	//       'authorization' : `bearer ${TokenService.getAuthToken()}`,
	//       'content-type': 'application/json',
	//     },
	//     body: JSON.stringify({
	//       Food_id: FoodId,
	//       rating,
	//       text,
	//     }),
	//   })
	//     .then(res =>
	//       (!res.ok)
	//         ? res.json().then(e => Promise.reject(e))
	//         : res.json()
	//     )
	// }
};

export default FoodApiService;
