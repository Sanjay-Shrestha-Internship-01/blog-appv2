import React, { Component } from 'react'
import { connect } from "react-redux";

class profile extends Component {
    render() {
        return (
            <div className="profile">
        <h1 className="profile__title">Edit your profile</h1>
        <label htmlFor="name"> Name</label>{" "}
        <input
          type="text"
          id="name"
          name="name"
          defaultValue={name}
          onChange=""
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
         value={this.state.email}
          onChange={this.handleOnChange}
        />
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="number"
          id="phoneNumber"
          name="phoneNumber"
          value=""
          onChange=""
        />
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          value=""
          onChange=""
        />
        <button
          className="button"
          type="submit"
          onClick=''
        >
          Submit
        </button>
      </div>
        );
    }
}
export default (profile);