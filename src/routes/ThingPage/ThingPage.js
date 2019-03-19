import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FoodContext from "../../contexts/FoodContext";
import FoodApiService from "../../services/food-api-service";
import { Hyph, Section } from "../../components/Utils/Utils";
import { FoodStarRating } from "../../components/FoodStarRating/FoodStarRating";
import ReviewForm from "../../components/ReviewForm/ReviewForm";
import "./FoodPage.css";

export default class FoodPage extends Component {
	static defaultProps = {
		match: { params: {} }
	};

	static contextType = FoodContext;

	componentDidMount() {
		const { foodId } = this.props.match.params;
		this.context.clearError();
		FoodApiService.getFood(foodId)
			.then(this.context.setFood)
			.catch(this.context.setError);
		FoodApiService.getFoodReviews(foodId)
			.then(this.context.setReviews)
			.catch(this.context.setError);
	}

	componentWillUnmount() {
		this.context.clearFood();
	}

	renderFood() {
		const { food, reviews } = this.context;
		return (
			<>
				<div
					className="FoodPage__image"
					style={{ backgroundImage: `url(${food.image})` }}
				/>
				<h2>{food.title}</h2>
				<FoodContent food={food} />
				<FoodReviews reviews={reviews} />
				<ReviewForm />
			</>
		);
	}

	render() {
		const { error, food } = this.context;
		let content;
		if (error) {
			content =
				error.error === `Food doesn't exist` ? (
					<p className="red">Food not found</p>
				) : (
					<p className="red">There was an error</p>
				);
		} else if (!food.id) {
			content = <div className="loading" />;
		} else {
			content = this.renderFood();
		}
		return <Section className="FoodPage">{content}</Section>;
	}
}

function FoodContent({ food }) {
	return <p className="FoodPage__content">{food.content}</p>;
}

function FoodReviews({ reviews = [] }) {
	return (
		<ul className="FoodPage__review-list">
			{reviews.map(review => (
				<li key={review.id} className="FoodPage__review">
					<p className="FoodPage__review-text">
						<FontAwesomeIcon
							size="lg"
							icon="quote-left"
							className="FoodPage__review-icon blue"
						/>
						{review.text}
					</p>
					<p className="FoodPage__review-user">
						<FoodStarRating rating={review.rating} />
						<Hyph />
						{review.user.full_name}
					</p>
				</li>
			))}
		</ul>
	);
}
