import styles from "./style.module.css";

export const GalleryLayout = ({ children }) => {
  return <div className={styles.layout}>{children} </div>;
};
