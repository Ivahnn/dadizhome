import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import "../../App.css";
import Footer from "../Footer";
import Navbar from "../Navbar";
import "./DrugInfor.css";
import Carousel from "../Carousel";

import ChatBotButton from "../chatBot/ChatBotButton";
import ChatBotCart from "../chatBot/ChatBotCart";
import { useSelector } from "react-redux";

function DrugInfor() {
  const showModal = useSelector((state) => state.modal.modalIsOpen);
  const [searchInput, setSearchInput] = useState("");
  const [searchType, setSearchType] = useState("Generic");
  const [results, setResults] = useState([]);
  const [medicines, setMedicines] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Papa.parse("/MEDICINE_final.csv", {
      download: true,
      header: true,
      complete: function (results) {
        setMedicines(results.data);
        setIsLoading(false);
      },
      error: function (error) {
        console.error("Error loading CSV file:", error);
        setIsLoading(false);
      },
    });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchTerm = searchInput.toLowerCase().trim();

    if (!searchTerm) {
      alert("Please input Medicine in search bar.");
      return;
    }

    if (!medicines.length) {
      console.error("Medicines data is not loaded.");
      return;
    }

    const filteredResults = medicines.filter((medicine) => {
      if (searchType === "Generic" && medicine.generic_name) {
        return medicine.generic_name.toLowerCase().includes(searchTerm);
      } else if (searchType === "Brand" && medicine.brand_names) {
        return medicine.brand_names.toLowerCase().includes(searchTerm);
      }
      return false;
    });

    setResults(filteredResults);
    setSuggestions([]);
  };

  const handleInputChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchInput(searchTerm);

    if (!searchTerm) {
      setSuggestions([]);
      return;
    }

    const suggestionResults = medicines
      .filter((medicine) => {
        if (searchType === "Generic" && medicine.generic_name) {
          return medicine.generic_name.toLowerCase().includes(searchTerm);
        } else if (searchType === "Brand" && medicine.brand_names) {
          return medicine.brand_names.toLowerCase().includes(searchTerm);
        }
        return false;
      })
      .slice(0, 5); 

    setSuggestions(suggestionResults);
  };

  const selectSuggestion = (suggestion) => {
    setSearchInput(suggestion);
    setSuggestions([]);
  };

  const images = [
    "images/1.png",
    "images/2.png",
    "images/3.png",
    "images/4.png",
    "images/5.png",
  ];

  return (
    <>
      <Navbar />
      {showModal && <ChatBotCart />}
      <ChatBotButton />
      <Carousel images={images} />
      <div className="container drug-infor-container">
        <h3>How do you want to search for drug information?</h3>
        <div className="drug-search-box">
          <form onSubmit={handleSearch} className="drug-search-form">
            <div className="search-form-group">
              <select
                name="searchtype"
                className="form-control search-type-select"
                value={searchType}
                onChange={(e) => setSearchType(e.target.value)}
                aria-label="Select search type"
              >
                <option value="Generic">By Generic Name</option>
                <option value="Brand">By Brand Name</option>
              </select>
            </div>
            <div className="search-form-group">
              <input
                className="form-control drug-search-input"
                placeholder="Search for a medicine..."
                type="text"
                value={searchInput}
                onChange={handleInputChange}
                aria-label="Search for a medicine"
              />
              {suggestions.length > 0 && (
                <ul className="suggestions-list">
                  {suggestions.map((suggestion, index) => (
                    <li
                      key={index}
                      className="suggestion-item"
                      onClick={() =>
                        selectSuggestion(
                          suggestion.generic_name || suggestion.brand_names
                        )
                      }
                    >
                      {suggestion.generic_name || suggestion.brand_names}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="search-form-group">
              <button className="btn btn-primary drug-search-btn" type="submit">
                <i className="fa fa-search search-icon"></i> Search
              </button>
            </div>
          </form>
        </div>

        <div className="drug-results">
          {isLoading && <p>Loading...</p>}
          {!isLoading && results.length === 0 && (
            <div className="drug-placeholder">
              <img
                src="/images/placeholder.png"
                alt="No Medicine Selected"
                className="placeholder-image"
              />
            </div>
          )}
          {!isLoading && results.length > 0 && (
            <ul className="results-list">
              {results.map((medicine, index) => (
                <li key={index} className="result-item">
                  <h4>{medicine.drug_name}</h4>
                  <p>
                    <strong>Generic Name:</strong> {medicine.generic_name}
                  </p>
                  <p>
                    <strong>Brand Names:</strong> {medicine.brand_names}
                  </p>
                  <p>
                    <strong>Medical Condition:</strong>{" "}
                    {medicine.medical_condition}
                  </p>
                  <p className="side-effects">
                    <strong>Side Effects:</strong> {medicine.side_effects}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DrugInfor;
