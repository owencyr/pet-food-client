import React, { Component } from "react";
import FoodListContext from "../../contexts/FoodListContext";
import RatingApiService from "../../services/rating-api-service";

import { Button } from "../Utils/Utils";
import "./RatingForm.css";

export default class RatingForm extends Component {
	static contextType = FoodListContext;

	checkRated = () => {
		const { food } = this.props;
		const { userRatedFoods } = this.context;
		const foodids = userRatedFoods.map(food => food.foodid);
		return foodids.includes(food.id);
		// look inside this.context.userRatedFoods for foodid = this.props.food.id
		// if foodid already in userRatedFoods, renderRatingDisplay
		// if foodid not rated in userRatedFoods, renderRatingInterface
	};

	renderRatingDisabled() {
		return (
			<form
				className="RatingForm FoodListItem__Rating "
				onSubmit={this.handleSubmit}>
				<label htmlFor="rating_thumb_up">Thumbs Up</label>
				<Button
					type="submit"
					name="rating_thumb_up"
					value="1"
					className="form-rating-input"
					disabled>
					Thumbs Up
				</Button>
				<label htmlFor="rating_thumb_down">Thumbs Down</label>
				<Button
					type="submit"
					name="rating_thumb_down"
					value="-1"
					className="form-rating-input"
					disabled>
					Thumbs Down
				</Button>
			</form>
		);
	}

	renderRatingEnabled() {
		return (
			<form className="FoodListItem__Rating" onSubmit={this.handleSubmit}>
				<label htmlFor="rating_thumb_up">Thumbs Up</label>
				<Button
					type="submit"
					name="rating_thumb_up"
					value="1"
					className="form-rating-input">
					Thumbs Up
				</Button>
				<label htmlFor="rating_thumb_down">Thumbs Down</label>
				<Button
					type="submit"
					name="rating_thumb_down"
					value="-1"
					className="form-rating-input">
					Thumbs Down
				</Button>
			</form>
		);
	}

	handleSubmit = e => {
		e.preventDefault();

		const thumb_rating = e.target[0].checked ? 1 : -1;
		const { food } = this.props;
		const userId = localStorage.getItem("userid");
		// debugger;
		// need to know what user this is? how to identify
		// have user input name in order to rate (worst)
		// decode token to figure out which user is accessing

		// think about refresh token, how does refresh know that user is authenticated/which user it is?
		// localStorage.get('userID') - could be id or token or both
		// golden rule when it comes to localStorage, it only supports String, Boolean and Number
		// does not support objects or arrays - now you can stringify them .toString() for object, or JSON stringify, or Array.join(",")
		// [object Object]
		// localStorage.set('userID', responseJSON)  at time of login

		RatingApiService.postRating(food.id, userId, thumb_rating)
			.then(() => RatingApiService.getRatings())
			.then(ratings => {
				this.context.setRatingsList(ratings);
			})
			.then(() =>
				RatingApiService.getUserRatedFoods(
					window.localStorage.getItem("userid")
				)
			)
			.then(this.context.setUserRatedFoods)
			.catch(this.context.setError);
	};

	render() {
		return this.checkRated()
			? this.renderRatingDisabled()
			: this.renderRatingEnabled();
	}
}
