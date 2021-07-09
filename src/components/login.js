
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { Modal } from 'react-bootstrap';
import { googleOAuth2 } from '../services/google';


class Login extends Component {
  render() {
    let self = this;
    
    function LoginModal() {   
      return (
        <div className="login-page">  
          <Modal show={true} className="google-login">
            <Modal.Header>
              <Modal.Title></Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <GoogleLogin
                clientId="454029935526-k6g0ovemu1pqscp1hd7ldlbqf0jh6gtl.apps.googleusercontent.com"
                buttonText="Sign in with Google"
                onSuccess={self.props.googleOAuth2}
                onFailure={self.props.googleOAuth2}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
              />              
            </Modal.Body>
          </Modal>
        </div>
      );
    }

    function LoggedIn(props) {
      return (
        <GoogleLogout
          clientId="454029935526-k6g0ovemu1pqscp1hd7ldlbqf0jh6gtl.apps.googleusercontent.com"
          buttonText="Logout"
          onLogoutSuccess={self.props.googleOAuth2}
        />
      );
    }

    function LoggedOut(props) {
      return (
        <LoginModal />
      );     
    }

    function HandleAuth(props) {
      const isLoggedIn = props.isLoggedIn;
      if (isLoggedIn) {
        return <LoggedIn />;
      }
      return <LoggedOut />;
    }

    return (
      <HandleAuth isLoggedIn={typeof this.props.googleReducer.accessToken !== 'undefined'} />
    );
  }
};

function mapStateToProps (state) {
  console.log("state mapStateToProps", state);
  return {
      ...state,
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators ({ googleOAuth2 }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

