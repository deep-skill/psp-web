import axios from "axios";
import { setNorms } from "../../redux/actions";

export const getStandards = () => {
	return async (dispatch) => {
		await axios
			.get("/standards")
			.then((res) => res.data)
			.then((data) => dispatch(setNorms(data.data.standards)))
			.catch((err) => alert(err.response.data.error));
	};
};