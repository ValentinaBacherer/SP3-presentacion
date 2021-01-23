import { Footer } from "./Footer.jsx";
import React from "react";
import { Menu } from "./Menu.jsx";
import { MentorSelector } from "./MentorSelector.jsx";
import { DatePicker } from "./DatePicker.jsx";

export const CreateBookingPage = () => {
  return (
    <>
      <Menu />
      <main>
        <h1>Book a Mentor</h1>
        <MentorSelector />
        <DatePicker pickerType="date" />
        <DatePicker pickerType="time" />
        <button>Request</button>
      </main>
      <Footer linkEndPoint1="/bookings" linkEndPoint1="/" />
    </>
  );
};
