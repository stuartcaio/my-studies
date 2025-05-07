import { Link } from "react-router-dom";
import "./menu.css";

export default function Menu() {
  return (
    <div className="menu">
      <ul>
        <li>
            <button><Link to="/my-study">My Study</Link></button>
        </li>
        <li>
            <button><Link to="/others-users">Others Users</Link></button>
        </li>
        <li>
            <button><Link to="/new-user">New User</Link></button>
        </li>
      </ul>
    </div>
  )
}