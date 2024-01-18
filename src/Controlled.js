import React, { Component } from "react";

class Controlled extends Component {
    constructor(props) {
        super(props);
        this.state={
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }   

    handleChange( event ){
        this.setState({
            value: event.target.value
        });
    }

    handleSubmit(event) {
        alert('Submitted :' + this.state.value);
    }


    render() { 
        return (
            <form onSubmit={this.handleSubmit}>
                <h1> Controlled form!</h1>
                Name : <input type="text" value={this.state.value} onChange={this.handleChange}/>
                <input type="Submit" value="Submit"/>
            </form>
        );
    }
}
 
export default Controlled;