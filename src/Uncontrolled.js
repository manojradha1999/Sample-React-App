import React, { Component } from "react";
import Nav from "./Nav";

class Uncontrolled extends Component {
    constructor(props) {
        super(props);

        this.input = React.createRef();
        this.password = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        let element = document.getElementsByClassName("navigation");
        element[0].style.display="block";
    }

    render() { 
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1> Login form!</h1>
                    <li>Name : <input required type="text" ref={this.input}/></li>
                    <li>Password : <input required type="password" ref={this.password}/></li>
                    <input type="Submit" value="Submit"/>
                </form>
                <div className="navigation" style={{ display:"none"}}>
                    <Nav/>
                </div>
            </div>
        );
    }
}
 
export default Uncontrolled;