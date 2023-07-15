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
  returnPeriodSelected: "",
  returnPeriodActive: [],
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
    selectReturnPeriod: (state, { payload }) => {
      const returnPeriodActiveCopy = [...state.returnPeriodActive];
      const returnPeriod = returnPeriodActiveCopy.find(
        (period) => period === payload
      );
      if (returnPeriod) {
        state.returnPeriodActive = returnPeriodActiveCopy.filter(
          (period) => period !== payload
        );
      } else {
        if (state.returnPeriodActive.length < 4)
          state.returnPeriodActive.push(payload);
      }
    },
    resultPeriod: (state, { payload }) => {
      state.location.exceedanceProbability[payload.period] = payload.data;
    },
    resultReturnPeriod: (state, { payload }) => {
      state.location.hazardSpectrum[payload.returnPeriod] = payload.data;
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
  resultReturnPeriod,
} = slice.actions;
export default slice.reducer;
