import style from "./UniformHazard.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectNorm,
  selectSoil,
  selectReturnPeriod,
} from "../../redux/actions";
import { useEffect, useState } from "react";
import { getStandards } from "../../Helpers/backendRequests/requestToStandards";
import DesignSpectrumChart from "../chartsComponents/desingSpectrumChart/DesignSpectrumChart";
import requestToHazardSpectrum from "../../Helpers/backendRequests/requestToHazardSpectrum";

const UniformHazard = () => {
  const dispatch = useDispatch();

  const [inputPeriod, serInputPeriod] = useState("10");

  const handlePeriod = (event) => {
    const { value } = event.target;
    if (value) {
      dispatch(selectReturnPeriod(value));
      if (value in hazardSpectrum) return;
      dispatch(requestToHazardSpectrum(id, value));
    }
  };

  const id = useSelector((state) => state.slice.location.id);
  const hazardSpectrum = useSelector(
    (state) => state.slice.location.hazardSpectrum
  );
  const buttonsReturnPeriod = [475, 1000, 2475];
  const returnPeriodActive = useSelector(
    (state) => state.slice.returnPeriodActive
  );

  const norms = useSelector((state) => state.slice.norms);
  const soils = useSelector((state) => state.slice.soils);
  const normSelected = useSelector((state) => state.slice.normSelected);
  const soilSelected = useSelector((state) => state.slice.soilSelected);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const action = { selectNorm, selectSoil };
    dispatch(action[name](value));
  };

  useEffect(() => {
    !norms && dispatch(getStandards());
  }, []);

  return (
    <div className={style.probabilityContainer}>
      <h3>Espectro de Peligro Uniforme y Espectro de Diseño</h3>
      <span>
        <h4>Periodo de retorno en años:</h4>
        <input
          type="number"
          value={inputPeriod}
          onChange={(event) => serInputPeriod(event.target.value)}
        />
        <button value={inputPeriod} onClick={handlePeriod}>
          Calcular
        </button>

        {buttonsReturnPeriod.map((button) => (
          <button
            key={button}
            value={button}
            onClick={handlePeriod}
            className={
              returnPeriodActive.includes(button.toString())
                ? style.on
                : style.off
            }
          >
            {button}
          </button>
        ))}
      </span>

      <span>
        <h4>Periodos:</h4>
        <select value={normSelected} name="selectNorm" onChange={handleChange}>
          <option value="">Seleccionar norma</option>
          {norms?.map((norm) => (
            <option value={norm.value} key={norm.value}>
              {norm.name}
            </option>
          ))}
        </select>

        <select value={soilSelected} name="selectSoil" onChange={handleChange}>
          <option value="">Seleccionar tipo de suelo</option>
          {soils?.map((soil) => (
            <option value={soil.value} key={soil.value}>
              {soil.name}
            </option>
          ))}
        </select>
      </span>

      <br />
      <DesignSpectrumChart />
    </div>
  );
};

export default UniformHazard;
