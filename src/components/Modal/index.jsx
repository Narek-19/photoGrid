import { Slider } from "../PhotoshopTools/Slider";
import styles from "./style.module.css";
import CloseIcon from "@mui/icons-material/Close";

export const Modal = ({ children }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.closeIcon}>
        <CloseIcon />
      </div>
      <div>{children}</div>
      <div className={styles.toolsContainer}>
        <div className={styles.tools}>
          <div>
            <div>Brightness</div>
            <div>Contrast</div>
            <div>Saturation</div>
            <div>Grayscale</div>
          </div>
          <div>
            <div>Sepia</div>
            <div>Hue Rotate</div>
            <div>Blur</div>
          </div>
        </div>
        <div>
          <Slider />
        </div>
      </div>
    </div>
  );
};
