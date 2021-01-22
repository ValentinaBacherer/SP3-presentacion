import React from "react";
import { Icon } from "./Icon.jsx";

export function Input({ inputType, iconName, placeHolder }) {
  return (
    <div class="input">
      <Icon iconName={iconName} size="20" />
      <input type={inputType} placeHolder={placeHolder}></input>
    </div>
  );
}
