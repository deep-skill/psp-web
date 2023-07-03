import style from "./AnnualProbability.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectPeriod } from "../../redux/actions";

import { setPeriod, setPeriodPercentage } from "./setPeriod";

const AnnualProbability = () => {
	const dispatch = useDispatch();

	const periods = setPeriod();
	const periodsPercentage = setPeriodPercentage();

	const periodSelected = useSelector(
		(state) => state.slice.periodSelected
	);

	const handleChange = () => {};

	return (
		<div className={style.probabilityContainer}>
			<h3>Probabilidad Anual de Excedencia</h3>
			<span>
				<h4>Periodos:</h4>
				<select name="byPeriod" onChange={handleChange}>
					{periods?.map((period) => (
						<option value={period.toString()} key={period.toString()}>
							{period.toString()}
						</option>
					))}
				</select>

				{periodsPercentage?.map((period) => (
					<button
						key={period.toString() + "%"}
						onClick={() => dispatch(selectPeriod(period.toString()))}
						className={periodSelected[period] ? style.on : style.off}
					>
						{period.toString() + "%"}
					</button>
				))}
			</span>

			<br />
			{/* graph here */}
		</div>
	);
};

export default AnnualProbability;
