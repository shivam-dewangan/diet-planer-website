// src/components/Header.jsx
import { Link } from "react-router-dom";
import './Header.css';

export default function Header() {
  return (
    <header className="app-header">
      <div className="logo">🥗 Diet Planner</div>
      <nav className="nav-links">
        <Link to="/home">Home</Link>
        <Link to="/subscription">Subscription</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </nav>
    </header>
  );
}
