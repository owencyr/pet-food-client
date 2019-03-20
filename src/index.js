import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { FoodListProvider } from "./contexts/FoodListContext";
// import { FoodProvider } from "./contexts/FoodContext";
import App from "./components/App/App";
import "./index.css";

ReactDOM.render(
	<BrowserRouter>
		<FoodListProvider>
			{/* <FoodProvider> */}
			<App />
			{/* </FoodProvider> */}
		</FoodListProvider>
	</BrowserRouter>,
	document.getElementById("root")
);
