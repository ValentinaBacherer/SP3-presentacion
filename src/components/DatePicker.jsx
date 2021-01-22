import React from "react";

export function DatePicker({ pickerType }) {
  return (
    <div class="flexbox">
      <h4>{pickerType === "date" ? "When?" : "At time"}</h4>
      <input type={pickerType}></input>
    </div>
  );
}
