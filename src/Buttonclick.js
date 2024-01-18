import React, { Component } from 'react';

class Buttonclick extends Component {

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

                <button onClick={(event)=> this.incrementCounter(event)}>count: {this.state.count}</button>

               

            </div>

         );

    }

}

 

export default Buttonclick;