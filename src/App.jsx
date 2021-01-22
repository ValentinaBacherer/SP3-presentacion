import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { LoginPage } from "./components/LoginPage.jsx";
import { CreateBookingPage } from "./components/CreateBookingPage.jsx";
import { BookingListPage } from "./components/BookingListPage.jsx";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <LoginPage />
          </Route>
          <Route path="/create-booking" exact>
            <CreateBookingPage />
          </Route>
          <Route path="/bookings" exact>
            <BookingListPage />
          </Route>
          <Route path="*">
            <div>Not Found</div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
