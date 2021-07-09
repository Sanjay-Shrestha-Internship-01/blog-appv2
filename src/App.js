import './App.css';
import React from 'react';
// import { getBlogList} from './services/blog';
// import {connect} from 'react-redux';
import HomePage from "./components/Homepage";
import Login from './components/login';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";


class App extends React.Component {
 
  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/login" component={Login}></Route>
       
        
      </Switch>
    </BrowserRouter>
    );
  }
 
}

export default(App);

// dispatch({type: 'SET_BLOG_LIST', payload: []})
// dispatch(setBlogList([]));

// function setBlogLIst(payload) {
//   return {
//     type: 'SET_BLOG_LIST', payload: []
//   }
// }

// dispatch(getBlogList([]));
// function getBlogList() {
//   return async (dispatch) {
//     const result = await 
//   }
// }