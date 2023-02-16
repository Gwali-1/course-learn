import "./ModalWarn.css";

function ModalWarn(props) {
  const modalButtonHandler = function () {
    props.modalTogle();
  };
  return (
    <div className="modal-box">
      <p>{props.children}</p>
      <button onClick={modalButtonHandler}>okay</button>
    </div>
  );
}

export default ModalWarn;
