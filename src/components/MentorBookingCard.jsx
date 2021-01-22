import React from "react";
import { StatusTag } from "./StatusTag";

export function MentorBookingCard({ mentorName, status, date, time }) {
  return (
    <div className="flexbox-v">
      <div className="flexbox">
        <h3>{mentorName}</h3>
        <StatusTag status={status} />
      </div>
      <div className="flexbox">
        <h4>{date}</h4>
        <h4>{time}</h4>
      </div>
    </div>
  );
}
