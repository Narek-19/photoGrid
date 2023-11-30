import styles from "./style.module.css";

export const Slider = ({ min, max, value, handleChange }) => {
  return (
    <div>
      <input
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
        type="range"
        className={styles.slider}
      />
    </div>
  );
};
