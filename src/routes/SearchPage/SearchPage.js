import React, { Component } from "react";
import FoodApiService from "../../services/food-api-service";
// import SearchForm from "../../components/SearchForm";

export default class SearchPage extends Component {
	handleSubmit = e => {
		e.preventDefault();
		foods = FoodApiService.getFoods();
		debugger;
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
				<FoodList items={foods} />
			</section>
		);
	}
}
