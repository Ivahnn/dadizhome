import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import DrugInfor from "./components/pages/DrugInfor";
import Login from "./components/pages/Login";
import Aboutus from "./components/pages/Aboutus";
import ContactUs from "./components/pages/Contactus";
import SignUp from "./components/pages/SignUp";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/aboutus" element={<Aboutus />} />
          <Route exact path="/druginformation" element={<DrugInfor />} />
          <Route exact path="/" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/contactus" element={<ContactUs />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
