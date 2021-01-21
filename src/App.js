import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { LoginPage } from './components/LoginPage';
import { CreateBookingPage } from './components/CreateBookingPage';
import { BookingListPage } from './components/BookingListPage';

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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
