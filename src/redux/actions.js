import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	normSelected: "",
	soilSelected: "",
	norms: null,
	soils: null,
	periodSelected: {},
	returnPeriodInputted: 0,
	returnPeriodSelected: {},
};

export const slice = createSlice({
	name: "globalState",
	initialState,
	reducers: {
		setNorms: (state, { payload }) => {
			state.norms = payload.norms;
		},
		selectNorm: (state, { payload }) => {
			state.normSelected = payload;
			const norm = state.norms.find((norm) => norm.value === payload);
			state.soils = norm?.soils;
			state.soilSelected = "";
		},
		selectSoil: (state, { payload }) => {
			state.soilSelected = payload;
		},
		selectPeriod: (state, { payload }) => {
			state.periodSelected[payload] = !state.periodSelected[payload];
		},
		inputReturnPeriod: (state, { payload }) => {
			console.log(payload);
			state.returnPeriodInputted = payload;
		},
		selectReturnPeriod: (state, { payload }) => {
			state.returnPeriodSelected[payload] = !state.returnPeriodSelected[payload];
		},
	},
});
export const {
	setNorms,
	selectNorm,
	selectSoil,
	selectPeriod,
	inputReturnPeriod,
	selectReturnPeriod,
} = slice.actions;
export default slice.reducer;

// simulate request to backend
export const getNorms = () => {
	return (dispatch) => {
		fetch("/norms.json")
			.then((response) => response.json())
			.then((data) => dispatch(setNorms(data)))
			.catch((error) => {
				console.log(error.message);
			});
	};
};

// ---------- actions with axios ----------

// example
export const getServer = (info) => {
	return async (dispatch) => {
		await axios
			.get("/route", info)
			.then((res) => res.data)
			.then((data) => dispatch(actionReducer(data)))
			.catch((err) => alert(err.response.data.error));
	};
};
