import Section from "../../components/landingInfo/Section";
import style from "./Landing.module.css";
import { titles, content } from "../../Helpers/texts";

const Landing = () => {
  return (
    <>
      <div className={style.landingContainer}>
        <header>
          <h1>Peligro Sìsmico en el Perù</h1>
          <p>
            ¡Bienvenido a nuestra plataforma de cálculo y visualización de
            probabilidades sísmicas en Perú!{" "}
          </p>
        </header>
        <section>
          <Section title={titles.objetives} content={content.objetives} />
          <Section title={titles.function} content={content.function} />
          <Section title={titles.getStarted} content={content.getStarted} />
        </section>
      </div>
    </>
  );
};

export default Landing;
