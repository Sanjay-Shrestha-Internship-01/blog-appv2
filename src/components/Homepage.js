
import React from "react"
import { connect } from "react-redux";
import { getBlogList} from '../services/blog';
import Navbar from './NavBar';
// import GoogleLogin from "react-google-login"

// import * as blogService from "../services/blog";

class Homepage extends React.Component {
    componentDidMount(){
      this.props.fetchBlogList();
    }
    state={
      searchInput: "",
      filterRepos: [],
    }
    handleSearchInput = (event) => {
      const searchInput = event.target.value;
      this.setState({ searchInput: searchInput });
      this.filterRepos(
        
        searchInput
      );
    };
    filterRepos = (searchInput) => {
      console.log( searchInput);
      const filterRepos = this.props.blogList
        
        .filter((repo) => {
          if (searchInput === "") {
            return true;
          } else if (repo.title.toLowerCase().indexOf(searchInput.toLowerCase()) > -1) {
            return true;
          } else {
            return false;
          }
        });
        this.setState({filterRepos});
    };
  

    render() {
      return (
          <>
          <Navbar />
          <div className="blog-page">
          <div className="search">
            <input
              type="search"
              id="search"
              placeholder="Search Blog"
              value={this.state.searchInput}
              onChange={this.handleSearchInput}
              className="input-search"
            ></input>
          </div>
        <div className="blog-list">
           <h3>
              All Blogs <span>{this.state.filterRepos.length}</span>
            </h3>
          {this.state.filterRepos.map((blog)=>(
            <div className="blog-post">
              
              <h1 className="post-title">{blog.title}</h1>
              <span className="user-name">{blog.users.name}</span>
              <p className="post-description">Description: {blog.description}</p>
              <button className="details-button">Details</button>
              <br />
            </div>
          ))}
          
        </div>
        </div>
        </>
      );
    }
   
  }
  const mapStateToProps = ({blogList})=>({blogList})
  const mapDispatchToProps = (dispatch)=> ({
    fetchBlogList : ()=> dispatch(getBlogList()), 
  });
  export default connect(mapStateToProps, mapDispatchToProps)(Homepage);