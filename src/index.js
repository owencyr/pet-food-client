import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { FoodListProvider } from "./contexts/FoodListContext";
import App from "./components/App/App";
import "./index.css";

ReactDOM.render(
	<BrowserRouter>
		<FoodListProvider>
			<App />
		</FoodListProvider>
	</BrowserRouter>,
	document.getElementById("root")
);
