
import React from "react"
import { connect } from "react-redux";
// import GoogleLogin from "react-google-login"

// import * as blogService from "../services/blog";

class HomePage extends Component {
    state = {
      
    };

  render(){
      return(
          <div> Homepage</div>
      );
  }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(HomePage);