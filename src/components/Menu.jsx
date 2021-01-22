import React from "react";
import { FiMenu } from "react-icons/fi";

export function Menu({ showIcon = "si" }) {
  return <header>{showIcon === "si" ? <FiMenu size="20" /> : ""}</header>;
}
