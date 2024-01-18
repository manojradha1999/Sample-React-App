import React, { Component } from "react";
import ButtonClick from "./Buttonclick";
import OnHover from "./OnHover";
import Buttonclick from "./Buttonclick";
import Controlled from "./Controlled";
import Uncontrolled from "./Uncontrolled";
import Getdetails from "./Getdetails";
import Nav from "./Nav";
import Usestatehook from "./Usestatehook";

class Greet extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            Ace: "",
            Dep: "",
            Project: "",
            buttonName:"Submit"
        };
        this.changeNameState = this.changeNameState.bind(this);
        this.changeAceState = this.changeAceState.bind(this);
        this.changeDepState = this.changeDepState.bind(this);
        this.changeProjectState = this.changeProjectState.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    changeNameState( event ) {
        this.setState( {
            name : event.target.value,
        } );
    }

    changeAceState( event ) {
        this.setState( {
            Ace : event.target.value
        } );
    }

    changeDepState( event ) {
        this.setState( {
            Dep : event.target.value
        } );
    }

    changeProjectState( event ) {
        this.setState( {
            Project : event.target.value
        } );
    }

    onSubmit( event ) {

        let test = document.getElementsByClassName("test");
        if( event.target.outerText !== "Reset" ) {

            test[0].style.display="block";
            this.setState( {
            buttonName :"Reset"
            });

        } else{
            test[0].style.display="none";
            this.setState( {
                name: "",
                Ace: "",
                Dep: "",
                Project: "",
                buttonName:"Submit"
            });
        }
    }

    render() { 
        return ( 
            <div>
                {/* <div>
            <h1> Name <input type="text" id="name" value={this.state.name} onChange={ this.changeNameState}></input></h1>
            <h1> ACE.No <input type="text" id="Ace" value={this.state.Ace} onChange={ this.changeAceState}></input> </h1>
            <h1> Dep <input type="text" id="Dep" value={this.state.Dep} onChange={ this.changeDepState}></input> </h1>
            <h1> Project <input type="text" id="Project" value={this.state.Project} onChange={ this.changeProjectState}></input> </h1>
            <h1> <button type="button" onClick={this.onSubmit }> {this.state.buttonName} </button></h1>
            </div>
            <div>
            <li className="test" style={ { display:"none"}}>
                <h4>{this.state.name}</h4>
                <h4>{this.state.Ace}</h4>
                <h4>{this.state.Dep}</h4>
                <h4>{this.state.Project}</h4>
            </li>
            </div> */}
            {/* <Buttonclick/>
            <OnHover/>
            <Controlled/> */}
            <Uncontrolled/>
            <Usestatehook/>
            </div>
        );
    }
}
 
export default Greet;