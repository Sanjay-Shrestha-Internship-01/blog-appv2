import React, { Component } from "react";
// import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { GoogleLogin, GoogleLogout } from 'react-google-login';

class Navbar extends Component {
  render() {
    const { isLoggedIn, userData } = this.props;
    
    return (
      <div className="navbar">
        <h1 className="navbar__header">Blog Post</h1>
        <div className="navbar__login">
          {isLoggedIn? (
            // <Link to="/logout">
              <button className="login-button" onClick={() => GoogleLogout()}>Logout</button>
            // </Link>
          ) : (
            <>
              {/* <Link to="/login"> */}
                <button className="login-button" onClick={() => GoogleLogin()}>
                  Login/signup
                </button>
              {/* </Link> */}
            </>
          )}

          {isLoggedIn? (
            <div className="user">
              <img
                src={userData.image}
                alt="user-image"
                className="user-image"
              />
              <h1 className="user-name">{userData.name}</h1>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     isLoggedIn: state.auth.isLoggedIn,
//     userData: state.auth.userData,
//   };
// };

// const mapDispatchToProps = () => {
//   return {
//     LoggedIn,
//     LoggedOut,
//   };
// };
export default (Navbar);
// connect(mapStateToProps, mapDispatchToProps())