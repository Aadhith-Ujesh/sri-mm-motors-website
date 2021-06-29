import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
        <h1>Sri MM Motors</h1>
            <div className="links">
                <ul>
                        <li className="zy"><Link to = "/">Home</Link></li>
                        <li className="zy"><Link to = "/services">Services</Link></li>
                        <li className="zy"><Link to = "/about">About us</Link></li>
                        <li className="zy"><Link to = "/contact">Contact us</Link></li> 
                </ul>
            </div>
        </nav>
     );
}
 
export default Navbar;