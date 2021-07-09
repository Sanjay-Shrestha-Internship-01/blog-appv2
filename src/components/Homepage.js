
import React from "react"
import { connect } from "react-redux";
import { getBlogList} from '../services/blog';

// import GoogleLogin from "react-google-login"

// import * as blogService from "../services/blog";

class Homepage extends React.Component {
    componentDidMount(){
      this.props.fetchBlogList();
    }
    render() {
      return (
        <div className="Homepage">
           <h3>
              All Blogs <span>{this.props.blogList.length}</span>
            </h3>
          {this.props.blogList.map((blog)=>(
            <div>
              
              <h1>{blog.title}</h1>
              <span className="user-name">{blog.users.name}</span>
              <p>{blog.description}</p>
              <button className="login-button">Details</button>
              <br />
            </div>
          ))}
          
        </div>
      );
    }
   
  }
  const mapStateToProps = ({blogList})=>({blogList})
  const mapDispatchToProps = (dispatch)=> ({
    fetchBlogList : ()=> dispatch(getBlogList()), 
  });
  export default connect(mapStateToProps, mapDispatchToProps)(Homepage);