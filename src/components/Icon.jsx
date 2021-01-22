import React from "react";
import { GoGear } from "react-icons/go";
import { MdPerson } from "react-icons/md";

export function Icon({ iconName, iconSize }) {
  console.log(iconName);
  return (
    <div>
      {iconName === "person" ? (
        <MdPerson size={iconSize} />
      ) : (
        <GoGear size={iconSize} />
      )}
    </div>
  );
}
