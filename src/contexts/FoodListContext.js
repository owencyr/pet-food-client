import React, { Component } from "react";

const FoodListContext = React.createContext({
	foodList: [],
	ingredientsList: [],
	ratingsList: [],
	query: null,
	isLoggedIn: false,
	error: null,
	setError: () => {},
	clearError: () => {},
	setFoodList: () => {},
	setIngredientsList: () => {},
	setRatingsList: () => {},
	updateLoggedIn: () => {}
});
export default FoodListContext;

export class FoodListProvider extends Component {
	state = {
		foodList: null,
		ingredientsList: null,
		ratingsList: null,
		query: null,
		isLoggedIn: false,
		error: null
	};

	setFoodList = foodList => {
		this.setState({ foodList });
	};

	setIngredientsList = ingredientsList => {
		this.setState({ ingredientsList });
	};

	setRatingsList = ratingsList => {
		this.setState({ ratingsList });
	};

	setQuery = query => {
		this.setState({ query });
	};

	updateLoggedIn = () => {
		this.setState({ loggedIn: window.localStorage.getItem("userid") !== null });
	};

	setError = error => {
		console.error(error);
		this.setState({ error });
	};

	clearError = () => {
		this.setState({ error: null });
	};

	render() {
		const value = {
			foodList: this.state.foodList,
			ingredientsList: this.state.ingredientsList,
			ratingsList: this.state.ratingsList,
			query: this.state.query,
			isLoggedIn: this.state.isLoggedIn,
			error: this.state.error,
			setError: this.setError,
			clearError: this.clearError,
			setFoodList: this.setFoodList,
			setIngredientsList: this.setIngredientsList,
			setRatingsList: this.setRatingsList,
			setQuery: this.setQuery,
			updateLoggedIn: this.updateLoggedIn
		};
		return (
			<FoodListContext.Provider value={value}>
				{this.props.children}
			</FoodListContext.Provider>
		);
	}
}
