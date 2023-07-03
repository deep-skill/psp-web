import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	location: { lat: -12.0, lng: -77.0 },
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
		setLocation: (state, { payload }) => {
			state.location = payload;
		},
		setNorms: (state, { payload }) => {
			state.norms = payload;
		},
		selectNorm: (state, { payload }) => {
			state.normSelected = payload;
			const norm = state.norms.find((norm) => norm.value === payload);
			state.soils = norm?.soilType;
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
	setLocation,
	setNorms,
	selectNorm,
	selectSoil,
	selectPeriod,
	inputReturnPeriod,
	selectReturnPeriod,
} = slice.actions;
export default slice.reducer;
