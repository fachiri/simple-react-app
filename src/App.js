import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import NavbarSection from './components/Navbar';
import Home from './page/Home';
import GetRandom from './page/GetRandom';
import Search from "./page/Search";

class App extends React.Component {
  render() {
    return (
      <Router>
        <NavbarSection />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/get-random" element={<GetRandom />}/>
          <Route path="/search" element={<Search />}/>
        </Routes>
      </Router>
    );
  }
}

export default App;
