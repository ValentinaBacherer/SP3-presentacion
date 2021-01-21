import { Link, useHistory } from "react-router-dom"

export const LoginPage = ()=>{
    const history = useHistory()
    
    const navigateToBookings = ()=>{
        history.push("/bookings");
    }

    // TODO: please implement me! 🥺

    return <div>
        <p>
        <Link to="/bookings">Navigate using a link</Link>
        </p>
        <p>
        <button onClick={navigateToBookings}>Navigate using a button</button>
        </p>
    </div>
}