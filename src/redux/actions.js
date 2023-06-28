import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	buttonOn: false,
	value: 0,
};

export const slice = createSlice({
	name: "globalState",
	initialState,
	reducers: {
		changeButtonOn: (state) => {
			state.buttonOn = !state.buttonOn;
		},
		incrementByAmount: (state, action) => {
			state.value += action.payload;
		},
	},
});
export const { changeButtonOn, incrementByAmount } = slice.actions;
export default slice.reducer;

// ---------- actions with axios ----------

export const getServer = (info) => {
	return async (dispatch) => {
		await axios
			.get("/", info)
			.then((res) => res.data)
			.then((data) => dispatch(incrementByAmount(data)))
			.catch((err) => alert(err.response.data.error));
		return;
	};
};
