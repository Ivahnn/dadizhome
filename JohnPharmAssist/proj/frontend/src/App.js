import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MedsList from "./components/MedsList";
import MedsDetails from "./components/MedsDetails";
import MedsForm from "./components/MedsForm";
import Home from "./components/pages/Home";
import Product from "./components/pages/Product";
import SignUp from "./components/pages/SignUp";
import Aboutus from "./components/pages/Aboutus";
import ContactUs from "./components/pages/Contactus";
import Ikaw from "./components/ikaw";
import Searchingmedicine from "./components/Searchmedicine";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/aboutus" element={<Aboutus />} />
          <Route exact path="/products" element={<Product />} />
          <Route exact path="/" element={<SignUp />} />
          <Route exact path="/medlist" element={<MedsList />} />
          <Route path="/meds/:id" element={<MedsDetails />} />
          <Route path="/add" element={<MedsForm />} />
          <Route exact path="/contactus" element={<ContactUs />} />
          <Route exact path="/Admin" element={<Ikaw />} />
          <Route exact path="/Searching" element={<Searchingmedicine />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
