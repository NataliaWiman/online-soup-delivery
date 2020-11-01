import React from "react";
import { MinusIcon } from "../../assets/icons/Minus";
import { PlusIcon } from "../../assets/icons/Plus";

export const Stepper = ({ stepperValue, setStepperValue }:any) => {

  const handleDecrement = () => {
    setStepperValue((prevCount: number) => prevCount >= 1 ? prevCount - 1 : 0);
  }

  const handleIncrement = () => {
    setStepperValue((prevCount: number) => prevCount + 1);
  }

  return (
    <div className="stepper">
      <button onClick={handleDecrement} className="stepper--decrease"><span><MinusIcon /></span></button>
      <input type="text" placeholder="0" value={stepperValue} readOnly />
      <button onClick={handleIncrement} className="stepper--increase"><span><PlusIcon /></span></button>
    </div>
  )
};