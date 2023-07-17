import styles from "./Section.module.css";

const Section = ({ title, content }) => {
  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default Section;
