import { useEffect, useState } from "react";
import { Slider } from "../PhotoshopTools/Slider";
import CloseIcon from "@mui/icons-material/Close";
import { filterOptions } from "../../filterOptions";
import styles from "./style.module.css";

export const Modal = ({ children, getImageStyle }) => {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const [options, setOptions] = useState(filterOptions);

  const selectedOption = options[selectedOptionIndex];

  const changeFilter = (index) => {
    setSelectedOptionIndex(index);
  };

  const handleSliderChange = ({ target }) => {
    setOptions((prevOptions) => {
      return prevOptions.map((option, index) => {
        if (index !== selectedOptionIndex) return option;
        return { ...option, value: target.value };
      });
    });
  };

  useEffect(() => {
    getImageStyle(options);
  }, [options]);

  return (
    <div className={styles.modal}>
      <div className={styles.closeIcon}>
        <CloseIcon />
      </div>
      <div>{children}</div>
      <div className={styles.toolsContainer}>
        <div className={styles.tools}>
          <div>
            {options.map((option, index) => {
              return (
                <div
                  onClick={() => changeFilter(index)}
                  className={`${
                    index === selectedOptionIndex ? styles.active : ""
                  }`}
                >
                  {option.nam}
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <Slider
            min={selectedOption.range.min}
            max={selectedOption.range.max}
            value={selectedOption.value}
            handleChange={handleSliderChange}
          />
        </div>
      </div>
    </div>
  );
};
