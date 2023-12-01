import { useEffect, useState } from "react";
import { Slider } from "../PhotoshopTools/Slider";
// import CloseIcon from "@mui/icons-material/Close";
import { filterOptions } from "../../filterOptions";
import styles from "./style.module.css";

export const Modal = ({
  children,
  getImageStyle,
  open,
  closeModal,
  currentImgRef,
}) => {
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

  const handleDownload = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = currentImgRef.current.naturalWidth;
    canvas.height = currentImgRef.current.naturalHeight;

    ctx.filter = currentImgRef.current?.style.filter;

    ctx.drawImage(currentImgRef.current, 0, 0);
    ctx.font = "30px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("Created By Narek Chakhoyan", 50, 50);
    // Create a temporary link and trigger a click to download the modified image
    const downloadLink = document.createElement("a");
    downloadLink.href = canvas.toDataURL("image/png");
    downloadLink.download = "modified_image.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  useEffect(() => {
    getImageStyle(options);
  }, [options]);

  if (open) {
    return (
      <>
        <div className={styles.modal}>
          <div onClick={closeModal} className={styles.closeIcon}>
            X
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
            <div className={styles.gallerySlider}>
              <Slider
                min={selectedOption.range.min}
                max={selectedOption.range.max}
                value={selectedOption.value}
                handleChange={handleSliderChange}
              />
              <div onClick={handleDownload} className={styles.downloadBtn}>
                Download
              </div>
            </div>
          </div>
        </div>
        <div className={styles.background}></div>
      </>
    );
  }
};
