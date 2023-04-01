import React,{ Component } from "react";
import logo1 from "../../src/rct.png";

export class Home extends Component{
    constructor(){
        super();

        this.state={
          firstName:"Bridgelabz"
        };
    }
    changeName=(event)=>{
        console.log(event.target.value);
        this.setState({firstName:event.target.value})
    }
    changeImage(event){
        console.log(event);
        console.log("Image Clicked");
        window.open("https://www.google.com","_blank"); 
    }
    render(){
      console.log("Method Rendor");
      return (
      <div>
        <h1>Hello from {this.state.firstName}</h1> 
        FIRSTNAME : <input type="text" onChange={this.changeName}></input>
        <img src={logo1} alt='photo' onClick={this.changeImage}></img>
        </div>
      );
    }

}

export default Home;