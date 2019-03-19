import React, { Component } from "react";
import FoodContext from "../../contexts/FoodContext";
import FoodApiService from "../../services/food-api-service";
import { Button, Textarea } from "../Utils/Utils";
import "./ReviewForm.css";

export default class ReviewForm extends Component {
	static contextType = FoodContext;

	handleSubmit = ev => {
		ev.preventDefault();
		const { food } = this.context;
		const { text, rating } = ev.target;

		FoodApiService.postReview(food.id, text.value, Number(rating.value))
			.then(this.context.addReview)
			.then(() => {
				text.value = "";
			})
			.catch(this.context.setError);
	};

	render() {
		return (
			<form className="ReviewForm" onSubmit={this.handleSubmit}>
				<div className="text">
					<Textarea
						required
						aria-label="Type a review..."
						name="text"
						id="text"
						cols="30"
						rows="3"
						placeholder="Type a review.."
					/>
				</div>

				<div className="select">
					<label htmlFor="rating">Rate this food!</label>
					<select
						required
						aria-label="Rate this food!"
						name="rating"
						id="rating">
						<option value="1">1 Star</option>
						<option value="2">2 Stars</option>
						<option value="3">3 Stars</option>
						<option value="4">4 Stars</option>
						<option value="5">5 Stars</option>
					</select>
				</div>

				<Button type="submit">Post review</Button>
			</form>
		);
	}
}
