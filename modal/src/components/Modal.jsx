import React, { useEffect } from "react";

const ESCAPE_KEYCODE = 27;
const Modal = ({ id = "modal", onClose = () => {}, children }) => {
  useEffect(() => {
    if (!window) return;

    const keyUpListener = (e) => {
      if (e.keyCode === ESCAPE_KEYCODE) onClose();
    };

    window.addEventListener("keyup", keyUpListener);

    return () => {
      window.removeEventListener("keyup", keyUpListener);
    };
  }, []);

  //Click fora do container pra fechar.
  const handleOutsideClick = (e) => {
    if (e.target.id === id) onClose();
  };

  return (
    <div id={id} className="modal" onClick={handleOutsideClick}>
      <div className="container">
        <button className="close" onClick={onClose}></button>
        <div className="content">{children}</div>
      </div>
    </div>
  );
};
export default Modal;
