import React, { Component } from 'react';

class OnHover extends Component {

    constructor(props) {

        super(props);

 

        this.state={

            count: 0

        }

    }

 

    incrementCounter=(event)=> {

        this.setState({

            count: this.state.count + 1

          });

    }

    render() {

        return (

            <div>

                ButtonClick

                <li onMouseOver={(event)=> this.incrementCounter(event)}>count: {this.state.count}</li>

               

            </div>

         );

    }

}

 

export default OnHover;