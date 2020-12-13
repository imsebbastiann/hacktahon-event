import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <Link to='/'><h1 className="logo">Eve.nts</h1></Link>
      <div className="menuItems">
        <p><Link to='/'>Acasa</Link></p>
        <p> Despre noi </p>
        <p><Link to='/events'>Evenimente</Link></p>
        <p>Create Event</p>
        <p> Contact </p>
      </div>
    </div>
  );
}

export default Navbar;
