import style from "./AnnualProbability.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectPeriod, selectDamping } from "../../redux/actions";
import ExceedanceProbabilityChart from "../chartsComponents/ExceedanceProbabilityChart/ExceedanceProbabilityChart";
import { setPeriod, setPeriodPercentage } from "./setPeriod";
import requestToExceedanceProbability from "../../Helpers/backendRequests/requestToExceedanceProbability";

const AnnualProbability = () => {
  const dispatch = useDispatch();

  const periods = setPeriod();
  const periodsPercentage = setPeriodPercentage();

  const id = useSelector((state) => state.slice.location.id);
  const dampingSelected = useSelector((state) => state.slice.dampingSelected);
  const exceedanceProbability = useSelector(
    (state) => state.slice.location.exceedanceProbability
  );

  const handleChange = (event) => {
    const { value } = event.target;
    if (value) {
      dispatch(selectPeriod(value));
      if (value in exceedanceProbability) return;
      dispatch(requestToExceedanceProbability(id, value));
    }
    dispatch(selectDamping(-1));
  };

  return (
    <div className={style.probabilityContainer}>
      <h3>Probabilidad Anual de Excedencia</h3>
      <span>
        <h4>Periodos:</h4>
        <select name="byPeriod" onChange={handleChange}>
          <option value="" key={"seleccionar"}>
            Seleccionar
          </option>
          {periods?.map((period) => (
            <option value={period.toString()} key={period.toString()}>
              {period === 0.075 ? period.toFixed(3) : period.toFixed(2)}
            </option>
          ))}
        </select>

        {periodsPercentage?.map((period) => (
          <button
            key={period.toString() + "%"}
            onClick={() => dispatch(selectDamping(period.toString()))}
            className={
              dampingSelected.find((damping) => damping === period.toString())
                ? style.on
                : style.off
            }
          >
            {period.toString() + "%"}
          </button>
        ))}
      </span>

      <br />
      <div className={style.chartContainer}>
        <ExceedanceProbabilityChart />
      </div>
    </div>
  );
};

export default AnnualProbability;
