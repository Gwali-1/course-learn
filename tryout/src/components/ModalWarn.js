import "./ModalWarn.css";

function ModalWarn(props) {
  return (
    <div className="modal-box">
      <p>{props.children}</p>
    </div>
  );
}

export default ModalWarn;
