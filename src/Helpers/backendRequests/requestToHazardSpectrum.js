import axios from "axios";
import { resultReturnPeriod } from "../../redux/actions";

const requestToHazardSpectrum = (location, tr) => {
  return async (dispatch) => {
    try {
      const { data } = await axios(
        `/hazardspectrum?location=${location}&tr=${tr}`
      );
      const series = [];

      data.data.map((value) => {
        series.push([parseFloat(value.x), parseFloat(value.y)]);
      });

      const result = { returnPeriod: tr, data: series };

      return dispatch(resultReturnPeriod(result));
    } catch (error) {
      console.log(error);
    }
  };
};

export default requestToHazardSpectrum;
