import React, { Component } from "react";
import FoodListContext from "../../contexts/FoodListContext";
import RatingApiService from "../../services/rating-api-service";

import { Button } from "../Utils/Utils";
import "./RatingForm.css";

export default class RatingForm extends Component {
	static contextType = FoodListContext;
	handleSubmit = e => {
		e.preventDefault();

		const thumb_rating = e.target[0].checked ? 1 : -1;
		const { food } = this.props;
		// debugger;
		// need to know what user this is? how to identify
		// have user input name in order to rate (worst)
		// decode token to figure out which user is accessing

		// think about refresh token, how does refresh know that user is authenticated/which user it is?
		const user_idHardCode = 1;
		// localStorage.get('userID') - could be id or token or both
		// golden rule when it comes to localStorage, it only supports String, Boolean and Number
		// does not support objects or arrays - now you can stringify them .toString() for object, or JSON stringify, or Array.join(",")
		// [object Object]
		// localStorage.set('userID', responseJSON)  at time of login

		RatingApiService.postRating(food.id, user_idHardCode, thumb_rating)
			.then(
				RatingApiService.getRatings()
					.then(ratings => {
						this.context.setRatingsList(ratings);
					})
					.catch(this.context.setError)
			)
			.catch(this.context.setError);
	};

	render() {
		return (
			<form className="FoodListItem__Rating" onSubmit={this.handleSubmit}>
				<input
					type="radio"
					name="rating_thumb"
					value="1"
					className="form-rating-input"
				/>{" "}
				Thumbs Up
				<input
					type="radio"
					name="rating_thumb"
					value="-1"
					className="form-rating-input"
				/>{" "}
				Thumbs Down
				<Button type="submit">Post rating</Button>
			</form>
		);
	}
}