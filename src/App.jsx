//App
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Component
import NavBar from "./Components/Reusables/NavBar";

//Pages
import HomePage from "./Components/Pages/HomePage";
import ReviewPage from "./Components/Pages/ReviewPage";

//Style
import "./App.css";

function App() {
  
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/reviews" element={<ReviewPage/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
