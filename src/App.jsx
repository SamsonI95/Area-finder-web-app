//App
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Component
import NavBar from "./Components/Reusables/NavBar";

//Pages
import HomePage from "./Components/Pages/HomePage";

//Style
import "./App.css";
import ReviewPage from "./Components/Pages/ReviewPage";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/reviews" element={<ReviewPage/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
