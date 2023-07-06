import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: {
    id: "",
    lat: "",
    lng: "",
    exceedanceProbability: {},
    hazardSpectrum: {},
    designSpectrum: [],
  },
  normSelected: "",
  soilSelected: "",
  norms: null,
  soils: null,
  periodSelected: 0,
  dampingSelected: ["5"],
  returnPeriodInputted: 0,
  returnPeriodSelected: {},
  historyLocation: [],
};

export const slice = createSlice({
  name: "globalState",
  initialState,
  reducers: {
    setLocation: (state, { payload }) => {
      state.location = {
        ...state.location,
        lat: payload.location.lat,
        lng: payload.location.lng,
        id: payload.data,
      };
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
      state.periodSelected = payload;
    },
    selectDamping: (state, { payload }) => {
      const dampingSelectedCopy = [...state.dampingSelected];
      const dampingFound = state.dampingSelected.find(
        (damping) => payload !== "5" && damping === payload
      );
      if (payload === -1) {
        state.dampingSelected = ["5"];
      } else if (dampingFound) {
        state.dampingSelected = dampingSelectedCopy.filter(
          (damping) => damping !== payload
        );
      } else {
        if (payload !== "5") {
          state.dampingSelected.push(payload);
        }
      }
    },
    inputReturnPeriod: (state, { payload }) => {
      state.returnPeriodInputted = payload;
    },
    selectReturnPeriod: (state, { payload }) => {
      state.returnPeriodSelected[payload] =
        !state.returnPeriodSelected[payload];
    },
    resultPeriod: (state, { payload }) => {
      state.location.exceedanceProbability[payload.period] = payload.data;
    },
  },
});
export const {
  setLocation,
  setNorms,
  resultPeriod,
  selectNorm,
  selectSoil,
  selectPeriod,
  selectDamping,
  inputReturnPeriod,
  selectReturnPeriod,
} = slice.actions;
export default slice.reducer;
