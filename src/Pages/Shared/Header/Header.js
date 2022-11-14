import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
// import app from '../../../../firebase/firebase.config';
import app from '../../../firebase/firebase.config';

import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
// import Google from "../../Home/Services/Google/Google";
import { FaGoogle} from "react-icons/fa";
import "./Header.css";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut().then().catch();
  };

  
//   const { providerLogin } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider()
  
  const auth=getAuth(app)

  const handleGoogleSignIn = () => {
      signInWithPopup(auth,googleProvider)
          .then(result => {
              const user = result.user;
              console.log(user);
          })
          .catch(error => console.error(error))
  }





















  const menuItems = (
    <>
      <li className="font-semibold">
        <Link to="/">Home</Link>
      </li>
      <li className="font-semibold">
        <Link to="/blog">Blog</Link>
      </li>

      

      {/* <li className='font-semibold'><Link to='/addservice'>Add servive</Link></li>
        <li className='font-semibold'><Link to='/myreview'>MY Review</Link></li> */}
      {user?.email ? (
        <>
          <li className="font-semibold">
            <Link to="/addservice">Add servive</Link>
          </li>
          <li className="font-semibold">
            <Link to="/myreview">MY Review</Link>
          </li>
          <li className="font-semibold">
            <button onClick={handleLogOut} className="btn-ghost">
              Sign Out
            </button>
          </li>
        </>
      ) : (
        <li className="font-semibold">
          <Link to="/login">Login</Link>
          <span><button onClick={handleGoogleSignIn} className="p-1 bg-amber-200 rounded"  variant="outline-primary"> <FaGoogle className="text-red-500"></FaGoogle> Login with Google</button></span>
          
        </li>
        
      )}
    </>
  );

  return (
    <div className="navbar h-20 mb-12 pt-12 bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          {/* <img src={logo} alt="" /> */}

          <img
            src="https://www.freeiconspng.com/thumbs/doctor-logo/doctor-logo-png-photo-5.png"
            className="logo_size"
            alt=""
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      {/* <div className="navbar-end">
                <button className="btn btn-outline btn-warning">Appointment</button>
            </div> */}
            {/* <button onClick={handleGoogleSignIn} className="me-2"  variant="outline-primary"> <FaGoogle></FaGoogle> Login with Google</button> */}
    </div>
  );
};

export default Header;
