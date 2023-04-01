import React from "react";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import { Route,Routes,Link } from "react-router-dom";

class App extends React.Component{
  render(){
    return(
      <div>
        <nav>
          <Link to="/home">Home</Link> | <Link to="/about">About</Link> |{"  "}
          <Link to="/contact">Contact</Link>
        </nav>
        <Routes>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
      </div>
    );
  }
}

export default App;
