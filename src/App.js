import './App.css';
import React from 'react';
import { getBlogList} from './services/blog';
import {connect} from 'react-redux';
class App extends React.Component {
  componentDidMount(){
    this.props.fetchBlogList();
  }
  render(){
    return (
      <div className="App">
        {this.props.blogList.map(blog=>(
          <div>
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
  fetchBlogList : ()=> dispatch(getBlogList())
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
