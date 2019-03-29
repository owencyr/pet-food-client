import React, { Component } from "react";
import RatingForm from "../RatingForm/RatingForm";
import "./FoodListItem.css";

export default class FoodListItem extends Component {
	render() {
		const { food, ingredients, ratings } = this.props;
		const [foodRating] = ratings.filter(rating => rating.foodid === food.id);
		return (
			<section className="FoodListItem">
				<div className="FoodListItem__details">
					<div className="FoodListItem__text">
						<h2 className="FoodListItem__heading">
							{food.brand} {food.variety}
						</h2>
						<ul className="FoodListItem__composites">
							<li className="FoodListItem__kcal">{food.kcal} kcal/can</li>
							<li className="FoodListItem__grade">
								Pet Food Shopper Grade: {food.grade}
							</li>
							<li className="FoodListItem__rating">
								Rating {foodRating.rating}
							</li>
							<section className="rating-input">
								<RatingForm food={food} />
							</section>
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
					</div>
				</div>
			</section>
		);
	}
}
