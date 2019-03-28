import React, { Component } from "react";

const FoodListContext = React.createContext({
	foodList: [],
	ingredientsList: [],
	ratingsList: [],
	userRatedFoods: [],
	query: null,
	loggedIn: false,
	error: null,
	setError: () => {},
	clearError: () => {},
	setFoodList: () => {},
	setIngredientsList: () => {},
	setRatingsList: () => {},
	setUserRatedFoods: () => {},
	updateLoggedIn: () => {}
});
export default FoodListContext;

export class FoodListProvider extends Component {
	state = {
		foodList: null,
		ingredientsList: null,
		ratingsList: null,
		userRatedFoods: null,
		query: null,
		loggedIn: false,
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

	setUserRatedFoods = userRatedFoods => {
		this.setState({ userRatedFoods });
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
			userRatedFoods: this.state.userRatedFoods,
			query: this.state.query,
			loggedIn: this.state.loggedIn,
			error: this.state.error,
			setError: this.setError,
			clearError: this.clearError,
			setFoodList: this.setFoodList,
			setIngredientsList: this.setIngredientsList,
			setRatingsList: this.setRatingsList,
			setUserRatedFoods: this.setUserRatedFoods,
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
