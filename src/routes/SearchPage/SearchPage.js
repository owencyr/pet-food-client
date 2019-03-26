import React, { Component } from "react";
import FoodList from "../FoodList/FoodList";
import FoodListContext from "../../contexts/FoodListContext";
// import FoodApiService from "../../services/food-api-service";
// import SearchForm from "../../components/SearchForm";

export default class SearchPage extends Component {
	static contextType = FoodListContext;

	handleSubmit = e => {
		e.preventDefault();
		const query = e.target[0].value;
		this.context.setQuery(query);
	};

	render() {
		return (
			<section className="search">
				<form className="search-form" onSubmit={this.handleSubmit}>
					<label htmlFor="search">Search</label>
					<input
						type="text"
						className="search"
						placeholder="Search for Food..."
					/>
				</form>
				<FoodList />
			</section>
		);
	}
}
