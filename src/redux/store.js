import { configureStore } from "@reduxjs/toolkit";
import globalState from "./actions";

export const store = configureStore({
	reducer: {
		slice: globalState,
	},
});
