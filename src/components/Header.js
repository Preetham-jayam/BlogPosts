import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {signInWithPopup,signOut} from 'firebase/auth'
import { auth,provider } from "../config";
export const Header = () => {
  const [isLoggedIn,setIsLoggedIn] = useState(JSON.parse(localStorage.getItem("isLoggedIn")) || false);

  function loginHandler(){
      signInWithPopup(auth,provider)
      .then((res)=>{
        setIsLoggedIn(true);
        localStorage.setItem("isLoggedIn", true);
      })
  }

  function logoutHandler(){
    signOut(auth);
    setIsLoggedIn(false);
    localStorage.setItem('isLoggedIn',false);
  }
  return (
    <header>
      <Link to="/" className="logo">
        <span>InfiniteIdeas</span>
      </Link>
      <nav className="nav">
        <NavLink to="/" className="link">
          Home
        </NavLink>
        {isLoggedIn ? (
          <>
            <NavLink to="/create" className="link">
              Create
            </NavLink>
            <button className="auth" onClick={logoutHandler}>
              <i className="bi bi-box-arrow-right"></i>Logout
            </button>
          </>
        ) : (
          <button className="auth-login" onClick={loginHandler}>
            <i className="bi bi-google "></i>Login
          </button>
        )}
      </nav>
    </header>
  );
};
