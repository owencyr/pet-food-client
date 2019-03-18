import React, { Component } from "react";
// import SearchForm from "../../components/SearchForm";

export default class SearchPage extends Component {
	render() {
		return (
			<form className="search-form">
				<label htmlFor="search">Search</label>
				<input
					type="text"
					className="search"
					placeholder="Search for Food..."
				/>
			</form>
		);
	}
}
