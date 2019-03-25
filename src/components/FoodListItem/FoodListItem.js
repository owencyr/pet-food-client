import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import { FoodStarRating } from "../FoodStarRating/FoodStarRating";
import RatingForm from "../RatingForm/RatingForm";
import "./FoodListItem.css";

export default class FoodListItem extends Component {
	render() {
		const { food, ingredients, ratings } = this.props;
		// debugger;
		return (
			<section className="FoodListItem">
				<div className="FoodListItem__details">
					<div className="FoodListItem__text">
						<h2 className="FoodListItem__heading">
							{food.brand} {food.variety} dinner
						</h2>
						<ul className="FoodListItem__composites">
							<li className="FoodListItem__kcal">{food.kcal}</li>
							<li className="FoodListItem__grade">{food.grade}</li>
							<li className="FoodListItem__rating">
								{'sum of "rating" table grouped by food.id = ratings.food_id'}
								{/* Composite Rating, sum of "rating" table grouped by food.id = ratings.food_id */}
							</li>
							<RatingForm food_id={food.id} />
						</ul>
						<ul className="FoodListItem__ingredients">
							<h3>Ingredients:</h3>
							<li className="FoodListItem__ingredient">
								{ingredients[food.i1 - 1].name}
							</li>
							<li className="FoodListItem__ingredient">
								{ingredients[food.i2 - 1].name}
							</li>
							<li className="FoodListItem__ingredient">
								{ingredients[food.i3 - 1].name}
							</li>
							<li className="FoodListItem__ingredient">
								{ingredients[food.i4 - 1].name}
							</li>
							<li className="FoodListItem__ingredient">
								{ingredients[food.i5 - 1].name}
							</li>
						</ul>

						{/* <p className="FoodListItem__description">
							{truncate(food.content)}
						</p> */}
					</div>

					{/* <div className="FoodListItem__reviews">
						<FoodStarRating rating={food.average_review_rating} />
						<span id="FoodListItem__review-count">
							{readableReviewCount(food.number_of_reviews)}
						</span>
					</div> */}
				</div>
			</section>
		);
	}
}

// function readableReviewCount(number) {
// 	switch (number) {
// 		case 0:
// 			return "no reviews yet";

// 		case 1:
// 			return `based on 1 review`;

// 		default:
// 			return `based on ${number} reviews`;
// 	}
// }

// function truncate(text) {
// 	const words = text.split(" ");

// 	if (words.length > 10) {
// 		return words.slice(0, 10).join(" ") + " ...";
// 	}

// 	return text;
// }
