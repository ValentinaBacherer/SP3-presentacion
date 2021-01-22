import React from "react";
import { mentors } from "./mentors";

export function MentorSelector() {
  return (
    <div class="flexbox">
      <h4>Wich Mentor?</h4>
      <input type="text" list="mentors"></input>
      <datalist id="mentors">
        {mentors.map(({ name }) => {
          return <option value={name} />;
        })}
      </datalist>
    </div>
  );
}
