import { useState } from "react";
import { data } from "../../galleryData";
import styles from "./style.module.css";
import { Modal } from "../Modal";
export const Gallery =()=>{
  const [modal, setModal] = useState(false);
  const [tempImg, setTempImg] = useState("");

  const getImg = (imgSrc) => {
    setTempImg(imgSrc);
    setModal(true);
  };

  return (
    <>
      <div className={styles.gallery}>
        {data.map((item, index) => {
          return (
            <div
              className={styles.pics}
              key={index}
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
      <Modal open={modal}>
        <img src={tempImg} alt="modal_img" />
      </Modal>
    </>
  );
}