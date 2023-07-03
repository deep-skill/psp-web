import style from "./UniformHazard.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
	getNorms,
	selectNorm,
	selectSoil,
	inputReturnPeriod,
	selectReturnPeriod,
} from "../../../../redux/actions";
import { useEffect, useState } from "react";

const UniformHazard = () => {
	const dispatch = useDispatch();

	const onSearch = () => {
		dispatch(inputReturnPeriod(0))
	};
	const returnPeriodInputted = useSelector(
		(state) => state.slice.returnPeriodInputted
	);

	const buttonsReturnPeriod = [475, 1000, 2475];
	const returnPeriodSelected = useSelector(
		(state) => state.slice.returnPeriodSelected
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
		!norms && dispatch(getNorms());
	}, []);

	return (
		<div className={style.probabilityContainer}>
			<h3>Espectro de Peligro Uniforme y Espectro de Diseño</h3>
			<span>
				<h4>Periodo de retorno en años:</h4>
				<input
					type="number"
          value={returnPeriodInputted}
					onChange={(event) => dispatch(inputReturnPeriod(event.target.value))}
				/>
				<button onClick={onSearch}>Calcular</button>

				{buttonsReturnPeriod.map((button) => (
					<button
						key={button}
						onClick={() => dispatch(selectReturnPeriod(button.toString()))}
						className={returnPeriodSelected[button] ? style.on : style.off}
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
			{/* graph here */}
		</div>
	);
};

export default UniformHazard;
