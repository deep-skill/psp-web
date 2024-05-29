import axios from "axios";
import { resultPeriod } from "../../redux/actions";

const requestToExceedanceProbability = (location, period, lat, long) => {
  return async (dispatch) => {
    try {
      const { data } = await axios(
        `/eprobability?location=${location}&period=${period}&lat=${lat}&long=${long}`
      );
      const series = [];

      data.data.map((value) => {
        series.push([
          Math.log10(parseFloat(value.x)),
          Math.log10(parseFloat(value.y)),
        ]);
      });

      const result = { period: period, data: series };

      return dispatch(resultPeriod(result));
    } catch (error) {
      console.log(error);
    }
  };
};

export default requestToExceedanceProbability;
