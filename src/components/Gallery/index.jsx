import { useState, useRef } from "react";
import { data } from "../../galleryData";
import styles from "./style.module.css";
import { Modal } from "../Modal";
export const Gallery = () => {
  const imgRef = useRef();
  const [modal, setModal] = useState(false);
  const [tempImg, setTempImg] = useState("");
  const [imageStyle, setImageStyle] = useState({});

  const getImg = (imgSrc) => {
    setTempImg(imgSrc);
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const getImageStyle = (options) => {
    const filters = options.map((option) => {
      return `${option.property}(${option.value}${option.unit})`;
    });

    setImageStyle({ filter: filters.join(" ") });
  };

  return (
    <>
      <div className={styles.gallery}>
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className={styles.pics}
              onClick={() => getImg(item.imgSrc)}
            >
              <img
                src={item.imgSrc}
                style={{ width: "100%" }}
                alt="galleryImg"
              />
            </div>
          );
        })}
      </div>

      <Modal open={modal} getImageStyle={getImageStyle} closeModal={closeModal} currentImgRef = {imgRef}>
        <img ref = {imgRef} style={imageStyle} src={tempImg} alt="modal_img" />
      </Modal>
    </>
  );
};
