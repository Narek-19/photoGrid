import styles from "./style.module.css";

export const Slider = () => {
  return (
    <div>
      <input type="range" className={styles.slider} />
    </div>
  );
};
