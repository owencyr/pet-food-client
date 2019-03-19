import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FoodStarRating } from "../FoodStarRating/FoodStarRating";
import "./FoodListItem.css";

export default class FoodListItem extends Component {
	render() {
		const { food } = this.props;

		return (
			<Link to={`/food/${food.id}`} className="FoodListItem">
				<div
					className="FoodListItem__image"
					style={{ backgroundImage: `url(${food.image})` }}
				/>

				<div className="FoodListItem__details">
					<div className="FoodListItem__text">
						<h2 className="FoodListItem__heading">{food.title}</h2>
						<p className="FoodListItem__description">
							{truncate(food.content)}
						</p>
					</div>

					<div className="FoodListItem__reviews">
						<FoodStarRating rating={food.average_review_rating} />
						<span id="FoodListItem__review-count">
							{readableReviewCount(food.number_of_reviews)}
						</span>
					</div>
				</div>
			</Link>
		);
	}
}

function readableReviewCount(number) {
	switch (number) {
		case 0:
			return "no reviews yet";

		case 1:
			return `based on 1 review`;

		default:
			return `based on ${number} reviews`;
	}
}

function truncate(text) {
	const words = text.split(" ");

	if (words.length > 10) {
		return words.slice(0, 10).join(" ") + " ...";
	}

	return text;
}
