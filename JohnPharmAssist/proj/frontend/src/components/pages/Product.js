import React from "react";
import '../../App.css'; // Updated import path
import Footer from "../Footer";
import MedsList from "../MedsList";
import Navbar from "../Navbar";
import SearchingMedicine from "../Searchmedicine";

function Product() {
  return (
    <>
      <Navbar/>
      <SearchingMedicine/>
      <Footer />  
    </>
  );
}

export default Product;
