import React, { Component } from "react";
import Controlled from "./Controlled";
import Nav from "./Nav";

class Home extends Component {
    render() { 
        return (
        <div>
            Welcome Home!!
            <Nav/>
            <Controlled/>
        </div>);
    }
}
 
export default Home;