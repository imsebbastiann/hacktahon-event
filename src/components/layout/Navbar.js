import { Link } from "react-router-dom";

function Navbar(){

    return(
        <div className='navbar'>
            <Link to='/' className='logo'> InteractED </Link>
            
        </div>
    )
}

export default Navbar;