import React from "react";
import { Link } from "react-router-dom";

export function Footer({
  linkEndPoint1 = "/create-booking",
  linkEndPoint2 = "/bookings",
}) {
  return (
    <footer>
      <p>
        <Link to={linkEndPoint1}>{linkEndPoint1}</Link>
      </p>
      <p>
        <Link to={linkEndPoint2}>{linkEndPoint2}</Link>
      </p>
    </footer>
  );
}
