import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", email: "", password: "", password2: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:8000/auth/signup/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        navigate("/"); // Redirect to login page after successful signup
      } else {
        const errorData = await response.json();
        console.error("Signup failed:", errorData);
        alert(JSON.stringify(errorData)); // Display error details
      }
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };
    
  
  return (
    <div style={{ display: "flex", minHeight: "100vh", alignItems: "center", justifyContent: "center", padding: "2rem", backgroundColor: "#f7fafc" }}>
      <div style={{ boxShadow: "0 4px 8px rgba(0,0,0,0.1)", borderRadius: "8px", backgroundColor: "#2f855a", padding: "2rem", width: "24rem" }}>
        <h2 style={{ textAlign: "center", fontSize: "1.5rem", fontWeight: "600", color: "#2d3748" }}>MedQuery</h2>
        <p style={{ textAlign: "center", fontSize: "1rem", color: "#4a5568" }}>Create an Account</p>

        <form onSubmit={handleSignUp}>
          <div style={{ marginTop: "1rem" }}>
            <label htmlFor="username" style={{ display: "block", fontSize: "0.875rem", fontWeight: "600", color: "#2d3748" }}>Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter Username here..."
              value={formData.username}
              onChange={handleChange}
              style={{ width: "100%", padding: "0.5rem", border: "1px solid #cbd5e0", borderRadius: "0.375rem", marginTop: "0.5rem", backgroundColor: "#edf2f7", color: "#2d3748" }}
              required
            />
          </div>

          <div style={{ marginTop: "1rem" }}>
            <label htmlFor="email" style={{ display: "block", fontSize: "0.875rem", fontWeight: "600", color: "#2d3748" }}>Email Address:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email Address here..."
              value={formData.email}
              onChange={handleChange}
              style={{ width: "100%", padding: "0.5rem", border: "1px solid #cbd5e0", borderRadius: "0.375rem", marginTop: "0.5rem", backgroundColor: "#edf2f7", color: "#2d3748" }}
              required
            />
          </div>

          <div style={{ marginTop: "1rem" }}>
            <label htmlFor="signup-password" style={{ display: "block", fontSize: "0.875rem", fontWeight: "600", color: "#2d3748" }}>Password:</label>
            <input
              type="password"
              id="signup-password"
              name="password"
              placeholder="Enter Password here..."
              value={formData.password}
              onChange={handleChange}
              style={{ width: "100%", padding: "0.5rem", border: "1px solid #cbd5e0", borderRadius: "0.375rem", marginTop: "0.5rem", backgroundColor: "#edf2f7", color: "#2d3748" }}
              required
            />
          </div>

          <div style={{ marginTop: "1rem" }}>
            <label htmlFor="signup-password2" style={{ display: "block", fontSize: "0.875rem", fontWeight: "600", color: "#2d3748" }}>Confirm Password:</label>
            <input
              type="password"
              id="signup-password2"
              name="password2"
              placeholder="Confirm Password here..."
              value={formData.password2}
              onChange={handleChange}
              style={{ width: "100%", padding: "0.5rem", border: "1px solid #cbd5e0", borderRadius: "0.375rem", marginTop: "0.5rem", backgroundColor: "#edf2f7", color: "#2d3748" }}
              required
            />
          </div>

          <button
            type="submit"
            style={{ width: "100%", padding: "0.75rem", backgroundColor: "#38a169", color: "white", fontWeight: "600", borderRadius: "0.375rem", marginTop: "1.5rem", cursor: "pointer" }}
          >
            Register
          </button>
        </form>

        <div style={{ textAlign: "center", marginTop: "1rem" }}>
          Already have an account? <a href="/" style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }}>Login here!</a>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
