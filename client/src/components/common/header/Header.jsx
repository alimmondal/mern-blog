import React, { useState } from "react";
import Head from "./Head";
import "./header.css";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const { logout, user } = useAuth();
  const [navbar, setNavbar] = useState(false);

  const handleLogout = async () => {
    await logout();
  };

  return (
    <>
      <Head />
      <header>
        <div className="container py-4">
          <nav>
            <ul
              className={navbar ? "navbar" : "flex"}
              onClick={() => setNavbar(false)}
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/all">Culture</Link>
              </li>
              <li>
                <Link to="/all">Politics</Link>
              </li>
              <li>
                <Link to="/all">Memes</Link>
              </li>
              <li>
                <Link to="/all">Sports</Link>
              </li>
              {!user && (
                <>
                  <li>
                    <Link to={"/login"}>Login</Link>
                  </li>
                  <li>
                    <Link to={"/register"}>Register</Link>
                  </li>
                </>
              )}

              {user && (
                <>
                  <li>
                    <Link to={"/dashboard"}>Dashboard</Link>
                  </li>
                  {/* <li>
                    <button
                      onClick={handleLogout}
                      className="bg-red-500 text-white px-2 py-1"
                    >
                      Logout
                    </button>
                  </li>
                  <li className="w-10 h-7 rounded-full border-2 border-black">
                    <img src={user?.photoURL || "/public/placeholder.jpg"} />
                  </li> */}
                </>
              )}
            </ul>

            <button className="barIcon" onClick={() => setNavbar(!navbar)}>
              {navbar ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
