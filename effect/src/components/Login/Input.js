import React, { useRef, useImperativeHandle } from "react";
import classes from "./Login.module.css";

const Input = React.forwardRef((props, ref) => {
  const inputref = useRef();
  const activate = function () {
    inputref.current.focus();
  };

  useImperativeHandle(ref, () => {
    return {
      focus: activate,
    };
  });
  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor="email">{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
});

export default Input;
