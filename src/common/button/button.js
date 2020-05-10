import React, { useState, useRef } from "react";
import classes from "./button.module.css";

const Button = (props) => {
  const [buttonCoords, setButtonCoords] = useState({
    x: 0,
    y: 0,
    animating: false,
  });

  const timeout = useRef(null);

  const showRipple = (event) => {
    if (timeout.current) {
      clearTimeout(timeout.current);
      timeout.current = null;
      resetRipple();
    }
    let currentTargetRect = event.currentTarget.getBoundingClientRect();

    const event_offsetX = event.pageX - currentTargetRect.left;
    const event_offsetY = event.pageY - currentTargetRect.top;

    setButtonCoords({ x: event_offsetX, y: event_offsetY, animating: false });
    setTimeout(() => {
      setButtonCoords((prev) => ({ ...prev, animating: true }));
    }, 0);
    timeout.current = setTimeout(resetRipple, 400);
  };

  const resetRipple = () => {
    setButtonCoords({ x: 0, y: 0, animating: false });
  };
  let rippleClasses = [classes.ripple];
  if (buttonCoords.animating) {
    rippleClasses.push(classes.animating);
  }
  if (buttonCoords.x === 0 && buttonCoords.y === 0) {
    rippleClasses.push(classes.hidden);
  }

  return (
    <button
      className={classes.button}
      onMouseDown={showRipple}
      onClick={props.click}
      //   onMouseUp={resetRipple}
    >
      {props.children}
      <div
        className={rippleClasses.join(" ")}
        style={{ top: `${buttonCoords.y}px`, left: `${buttonCoords.x}px` }}
      ></div>
    </button>
  );
};

export default Button;
