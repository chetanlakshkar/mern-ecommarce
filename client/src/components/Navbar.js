import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {logoutUser} from "../actions/userActions"

export default function Navbar() {
  const cartreducer = useSelector((state) => state.cartReducer);
  const { cartItems } = cartreducer;
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const dispatch=useDispatch()
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="/">
          SHAY SHOP
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"><i class="fas fa-bars" style={{color:'white'}}></i></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto">
            {" "}
            {currentUser ? (
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                 <i className="fa fa-user" aria-hidden="true"></i> {currentUser.name}
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a className="dropdown-item" href="/profile">
                    PROFILE
                  </a>
                  <a className="dropdown-item" href="orders">
                    ORDERS
                  </a>
                  <li className="dropdown-item" onClick={()=>{dispatch(logoutUser())}}>
                    LOGOUT <i className="fas fa-sign-out-alt"></i>
                  </li>
                </div>
              </div>
            ) : (
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  login
                </a>
              </li>
            )}
            <li className="nav-item">
              <a className="nav-link" href="/cart">
                <i className="fas fa-shopping-cart"></i>
                {cartItems.length}
              </a>
            </li>
          </div>
        </div>
      </nav>
    </div>
  );
}
