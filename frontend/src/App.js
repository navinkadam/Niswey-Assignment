import React from "react";

import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/Navigation/Navbar";
import Loader from "./components/Loader";

import Pages from "./pages";

function App() {
  return (
    <div className="App">
      <Router basename="/">
        <Loader />
        <Navbar />
        <Pages />
      </Router>
    </div>
  );
}

export default App;
