import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/index";
import Jumbotron from "./components/Jumbotron/index";
import Saved from "./containers/saved";
import Search from "./containers/search";

class App extends Component {
  
  render() {
    return (
      <Router>
        <Navbar />
        <Jumbotron />
        <Search />
        <Saved />
    </Router>
    )
  }
  }

// function App() {
//   return (
//     <Router>
//         <Navbar />
//         <Jumbotron />
//         <Route exact path="/" component={Search} />
//         <Route exact path="/search" component={Search} />
//         <Route exact path="/saved" component={Saved} />
//     </Router>
//   );
// }

export default App;
