
import React, { Component } from 'React';
import { connect } from "react-redux";

class login extends Component {
    render(){
        return(
            <div className="home__page">
            {!isSignedIn ? (
            <div className="login__message">
                 <h2>  Signup  </h2>
                 <GoogleLogin
                 clientId="454029935526-k6g0ovemu1pqscp1hd7ldlbqf0jh6gtl.apps.googleusercontent.com"
                 render={(renderProps) =>(
                     <button
                     onClick={renderProps.onClick}
                     disabled={renderProps.disabled}
                     className="login__button"
                     > 
                     Login with google
                     </button>
                 )}
                 onSuccess={login}
                 onFailure={login}
                 isSignedIn={true}
                 cookiePolicy={"single_host_origin"}
                 />
             </div>
             ):(
                 ""
             )} 
         </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(login);