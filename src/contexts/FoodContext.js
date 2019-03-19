import React, { Component } from "react";

export const nullFood = {
	author: {},
	tags: []
};

const FoodContext = React.createContext({
	food: nullFood,
	reviews: [],
	error: null,
	setError: () => {},
	clearError: () => {},
	setFood: () => {},
	clearFood: () => {}
});

export default FoodContext;

export class FoodProvider extends Component {
	state = {
		food: nullFood,
		error: null
	};

	setError = error => {
		console.error(error);
		this.setState({ error });
	};

	clearError = () => {
		this.setState({ error: null });
	};

	setFood = food => {
		this.setState({ food });
	};

	setReviews = reviews => {
		this.setState({ reviews });
	};

	clearFood = () => {
		this.setFood(nullFood);
		this.setReviews([]);
	};

	addReview = review => {
		this.setReviews([...this.state.reviews, review]);
	};

	render() {
		const value = {
			food: this.state.food,
			reviews: this.state.reviews,
			error: this.state.error,
			setError: this.setError,
			clearError: this.clearError,
			setFood: this.setFood,
			setReviews: this.setReviews,
			clearFood: this.clearFood,
			addReview: this.addReview
		};
		return (
			<FoodContext.Provider value={value}>
				{this.props.children}
			</FoodContext.Provider>
		);
	}
}
