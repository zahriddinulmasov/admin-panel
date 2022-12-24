import "./modal.scss";
import close from "../../assets/images/close.svg.png";
import { useRef } from "react";

export const Modal = ({ title, modalState, setModalState, children }) => {
  const modalRef = useRef(null);
  const btnRef = useRef(null);

  const handleCloseModal = (evt) => {
    if (modalRef.current === evt.target) {
      setModalState(false);
    }
  };

  const handleCloseModalByBtn =(evt) => {
    if(btnRef.current === evt.target){
        setModalState(false)
    }
  }

  return (
    modalState && (
      <div className="modal" onClick={handleCloseModal} ref={modalRef}>
        <div className="modal__inner rounded">
          <div className="modal__top pb-2 border-bottom">
            <h3>{title}</h3>

            <img onClick={handleCloseModalByBtn} ref={btnRef} src={close} alt="" width={25} height={25} />
          </div>

          <div className="mt-2">{children}</div>
        </div>
      </div>
    )
  );
};
