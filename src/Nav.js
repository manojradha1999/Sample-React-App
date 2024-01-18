import { NavLink } from "react-router-dom";
import React, { Component } from "react";

class Nav extends Component {
    render() { 
        return (
            <div>
                <NavLink to="/Home"><li>Home</li></NavLink>
                <NavLink to="/Product"><li>Product</li></NavLink>
                <NavLink to="/Contact"><li>Contact</li></NavLink>
                <h1> EKart </h1>
            </div>
        );
    }
}
 
export default Nav ;