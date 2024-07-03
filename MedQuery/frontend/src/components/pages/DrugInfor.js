import React, { useState } from "react";
import '../../App.css'; // Updated import path
import Footer from "../Footer";
import Navbar from "../Navbar";
import "./DrugInfor.css"; // Ensure the file name matches exactly

function DrugInfor() {
  const [searchInput, setSearchInput] = useState("");
  const [result, setResult] = useState("NO MEDICINE SELECTED");

  const medicines = [
    "Paracetamol",
    "Biogesic",
    "Bioflu",
    "Aspirin",
    "Ibuprofen",  
  ];

  const searchMedicine = () => {
    if (searchInput.trim() === "") {
      setResult("Please enter a medicine name to search.");
    } else {
      const matchedMedicine = medicines.find((medicine) =>
        medicine.toLowerCase().includes(searchInput.toLowerCase())
      );  
      if (matchedMedicine) {
        setResult(`Found: ${matchedMedicine}`);
      } else {
        setResult("No medicine found.");
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h2>How do you want to search for drug information?</h2>
        <div className="search-box">
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search Medicine"
          />
          <button onClick={searchMedicine}>🔍</button>
        </div>
        <div className="no-selection">
          <p>{result}</p>
          <img
            src="placeholder.png"
            alt="Medicine Icon"
            style={{ opacity: 0.1 }}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DrugInfor;
