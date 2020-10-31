import React from "react";

export const Success = ({ text, isSuccess }: any) => 
  <div className={"success" + (isSuccess ? " success--show" : " success--hide")}>
    <button className="button"><span>{text}</span></button>
  </div>
;