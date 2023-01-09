import React from "react";

const Modal = (props) => {
  const { children } = props;

  return (
    <div className="modal">
        <div className="container">
            <button className="close"></button>
            <div className="content">{children}
            </div>
        </div>
    </div>
  )

export default Modal;
