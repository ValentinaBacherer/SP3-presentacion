import React from "react";
import { Link } from "react-router-dom";

export function Footer({
  linkEndPoint = "/create-booking",
  functionBtn = "navigateToBookings",
}) {
  return (
    <footer>
      <p>
        <Link to={linkEndPoint}>Navigate using a link</Link>
      </p>
      <p>
        <button class="xs-btn" onClick={{ functionBtn }}>
          Navigate using a button
        </button>
      </p>
    </footer>
  );
}
