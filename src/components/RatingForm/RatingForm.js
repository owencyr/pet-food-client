import React, { Component } from "react";
import FoodListContext from "../../contexts/FoodListContext";
import RatingApiService from "../../services/rating-api-service";

import { Button } from "../Utils/Utils";
import "./RatingForm.css";

export default class RatingForm extends Component {
	static contextType = FoodListContext;
	handleSubmit = ev => {
		ev.preventDefault();
		const thumb_rating = parseInt(ev.target.name);
		const { food } = this.props;

		// need to know what user this is? how to identify
		// have user input name in order to rate (worst)
		// decode token to figure out which user is accessing

		// think about refresh token, how does refresh know that user is authenticated/which user it is?
		const user_idHardCode = 1;

		RatingApiService.postRating(food.id, user_idHardCode, thumb_rating)
			.then(
				RatingApiService.getRatings()
					.then(this.context.setRatingsList)
					.catch(this.context.setError)
			)
			.catch(this.context.setError);
	};

	render() {
		return (
			<form className="RatingForm" onSubmit={this.handleSubmit}>
				<div className="text">
					<form className="FoodListItem__Rating">
						<label htmlFor="Rating__up">Thumbs up</label>
						<button className="Rating__up" name="1">
							^
						</button>
						<label htmlFor="Rating__down">Thumbs down</label>
						<button className="Rating__down" name="-1">
							v
						</button>
					</form>
				</div>

				<Button type="submit">Post rating</Button>
			</form>
		);
	}
}
