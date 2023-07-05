import style from "./Graphic.module.css";
import "../../components/map/ViewMap.css";
import { CSSTransition } from "react-transition-group";
import Map from "../../components/map/Map";
import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import AnnualProbabilityOfLeave from "../../components/annualProbability/AnnualProbability";
import UniformHazardSpectrum from "../../components/uniformHazard/UniformHazard";
import requestToLocation from "../../Helpers/backendRequests/requestToLocation";

const Graphic = () => {
  const dispatch = useDispatch();
  const nodeRef = useRef(null);
  const [viewMap, setViewMap] = useState(false);
  const location = useSelector((state) => state.slice.location);

  const handleClick = () => {
    setViewMap(!viewMap);
  };

  const handleClickSelect = (location) => {
    dispatch(requestToLocation(location, dispatch));
    handleMapClose();
  };

  const handleMapClose = () => {
    setViewMap(false);
  };

  return (
    <div className={style.graphicContainer}>
      <CSSTransition
        in={viewMap}
        nodeRef={nodeRef}
        timeout={500}
        classNames="viewMap"
        unmountOnExit
      >
        <Map
          ref={nodeRef}
          savedLocation={location}
          handleClickSelect={handleClickSelect}
          handleClose={handleMapClose}
        />
      </CSSTransition>

      <br />

      <button className={style.buttonToMap} onClick={handleClick}>
        {location.lat.length !== 0
          ? `Latitud: ${location.lat}, Longitud: ${location.lng}`
          : "Seleccionar coordenadas"}
      </button>

      <br />

      <AnnualProbabilityOfLeave />

      <br />

      <UniformHazardSpectrum />
    </div>
  );
};

export default Graphic;
