import './App.css';
import React from 'react';
import { getBlogList} from './services/blog';
import {connect} from 'react-redux';
import Login from './components/login';
// import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

class App extends React.Component {
  componentDidMount(){
    this.props.fetchBlogList();
  }
  render() {
    return (
      <div className="App">
        {this.props.blogList.map((blog)=>(
          <div>
            <Login />
            <h3>{blog.title}</h3>
            <p>{blog.description}</p>
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
export default connect(mapStateToProps, mapDispatchToProps)(App);
