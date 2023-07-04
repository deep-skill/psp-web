import axios from "axios";
import { setLocation } from "../../redux/actions";

const requestToLocation = (location) => {
  return async (dispatch) => {
    try {
      const { data } = await axios(
        `/location?lat=${location.lat}&long=${location.lng}`
      );
      data.location = location;
      return dispatch(setLocation(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export default requestToLocation;
