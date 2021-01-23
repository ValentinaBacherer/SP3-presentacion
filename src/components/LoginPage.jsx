import { Link, useHistory } from "react-router-dom";
import { Icon } from "./Icon.jsx";
import { Input } from "./Input.jsx";
import { Menu } from "./Menu.jsx";

export const LoginPage = () => {
  const history = useHistory();

  const navigateToBookings = () => {
    history.push("/bookings");
  };

  return (
    <>
      <Menu showIcon="no" />
      <main>
        <Icon iconName="person" iconSize="50" />
        <h1>Mentor Booking</h1>
        <Input inputType="text" iconName="person" placeHolder="mentor" />
        <Input inputType="password" iconName="gear" placeHolder="password" />
        <button class="btn">Log in</button>
        <footer>
          <p>
            <Link to="/bookings">Navigate using a link</Link>
          </p>
          <p>
            <button class="xs-btn" onClick={navigateToBookings}>
              Navigate using a button
            </button>
          </p>
        </footer>
      </main>
    </>
  );
};
