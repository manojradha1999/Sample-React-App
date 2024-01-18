import React, { Component } from "react";
import axios from "axios";

class Getdetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            details: []
        }

        this.getCustomersData = this.getCustomersData.bind(this);

    }

    getCustomersData = () => {
        axios.get("http://localhost:3000/Products")
            .then((data) => {
                this.setState({
                    details: data.data
                })
            })
            .catch(( error ) => {
                console.log(error)
            });
    };
    render() { 
        return (<div>
            <button type="Button" onClick={ this.getCustomersData}>Get Details</button>
            {this.state.details.map(detail => <div>{detail.id}.{detail.title}</div>)}
        </div>);
    }
}
 
export default Getdetails;