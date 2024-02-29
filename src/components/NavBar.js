import { Link } from 'react-router-dom';
import "../styles/navbar.css"
const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to='/' className={"logo"}>PIXME</Link>
      <ul>
      <li><Link to='/api/social/current-profile/'>Profile</Link></li>
      <li><Link to='/api/login/'>Login</Link></li>
      <li><Link to={'/api/logout/'}>Logout</Link></li>
      <li><Link to='/api/registration/'>Register</Link></li>
      </ul>
      {/*<Link to='/' className={"logo"}>PIXME</Link>*/}

      {/*<Link to='/api/social/current-profile/'>Profile</Link>*/}
      {/*<Link to='/api/login/'>Login</Link>*/}
      {/*<Link to={'/api/logout/'}>Logout</Link>*/}
      {/*<Link to='/api/registration/'>Register</Link>*/}

    </nav>
  );
};
export default Navbar;