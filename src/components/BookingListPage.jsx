import React from "react";
import { MentorBookingCard } from "./MentorBookingCard.jsx";
import { Menu } from "./Menu.jsx";
import { bookings } from "./bookings";

export const BookingListPage = () => {
  const [bookingsArray, setBookingsArray] = React.useState(bookings);

  const removeBooking = (id) => {
    setBookingsArray((oldBookings) => {
      const newBookings = oldBookings.filter((booking) => booking.id !== id);
      return newBookings;
    });
  };
  return (
    <React.Fragment>
      <Menu />
      <main>
        {bookingsArray.map(({ id, name, status, date, time }) => {
          return (
            <div className="flexbox-v border">
              <MentorBookingCard
                key={id}
                mentorName={name}
                status={status}
                date={date}
                time={time}
              />
              <button onClick={() => removeBooking(id)}>Cancel</button>
            </div>
          );
        })}
      </main>
    </React.Fragment>
  );
};
