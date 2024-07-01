import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", email: "", password: "", password2: "" });

  const handleSignUp = () => {
    // Here you can handle the signup logic, e.g., sending data to a server
    console.log("Signing up with:", formData);

    // For demo purposes, navigate to login after signup
    navigate("/ ");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    const passwordInputs = document.querySelectorAll("#signup-password, #signup-password2");
    passwordInputs.forEach((input) => {
      input.type = input.type === "password" ? "text" : "password";
    });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSignUp();
    }
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", alignItems: "center", justifyContent: "center", padding: "2rem", backgroundColor: "#f7fafc" }}>
      <div style={{ display: "flex", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", borderRadius: "8px", backgroundColor: "#2f855a" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "24rem", padding: "2rem", backgroundColor: "white", borderRadius: "8px 0 0 8px" }}>
          <h2 style={{ textAlign: "center", fontSize: "1.5rem", fontWeight: "600", color: "#2d3748" }}>MedQuery</h2>
          <p style={{ textAlign: "center", fontSize: "1rem", color: "#4a5568" }}>Create an Account</p>

          <form>
            <div style={{ marginTop: "1rem" }}>
              <label htmlFor="username" style={{ display: "block", fontSize: "0.875rem", fontWeight: "600", color: "#2d3748" }}>Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter Username here..."
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                style={{ width: "100%", padding: "0.5rem", border: "1px solid #cbd5e0", borderRadius: "0.375rem", marginTop: "0.5rem", backgroundColor: "#edf2f7", color: "#2d3748" }}
              />
            </div>

            <div style={{ marginTop: "1rem" }}>
              <label htmlFor="email" style={{ display: "block", fontSize: "0.875rem", fontWeight: "600", color: "#2d3748" }}>Email Address:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Email Address here..."
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                style={{ width: "100%", padding: "0.5rem", border: "1px solid #cbd5e0", borderRadius: "0.375rem", marginTop: "0.5rem", backgroundColor: "#edf2f7", color: "#2d3748" }}
              />
            </div>

            <div style={{ marginTop: "1rem" }}>
              <label htmlFor="signup-password" style={{ display: "block", fontSize: "0.875rem", fontWeight: "600", color: "#2d3748" }}>Password:</label>
              <input
                type="password"
                id="signup-password"
                name="password"
                placeholder="Enter Password here..."
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                style={{ width: "100%", padding: "0.5rem", border: "1px solid #cbd5e0", borderRadius: "0.375rem", marginTop: "0.5rem", backgroundColor: "#edf2f7", color: "#2d3748" }}
              />
              <label htmlFor="signup-password2" style={{ display: "block", fontSize: "0.875rem", fontWeight: "600", color: "#2d3748", marginTop: "0.5rem" }}>Confirm Password:</label>
              <input
                type="password"
                id="signup-password2"
                name="password2"
                placeholder="Confirm Password here..."
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                style={{ width: "100%", padding: "0.5rem", border: "1px solid #cbd5e0", borderRadius: "0.375rem", marginTop: "0.5rem", backgroundColor: "#edf2f7", color: "#2d3748" }}
              />
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "0.5rem" }}>
                <a href="#" style={{ fontSize: "0.75rem", color: "#a0aec0" }}>Forgot Password?</a>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input type="checkbox" onClick={togglePasswordVisibility} style={{ cursor: "pointer", marginRight: "0.25rem" }} />
                  <label htmlFor="showPassword" style={{ fontSize: "0.75rem", color: "#a0aec0", cursor: "pointer", whiteSpace: "nowrap" }}>Show Password</label>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={handleSignUp}
              style={{ width: "100%", padding: "0.75rem", backgroundColor: "#38a169", color: "white", fontWeight: "600", borderRadius: "0.375rem", marginTop: "1.5rem", cursor: "pointer" }}
            >
              Register
            </button>
          </form>

          <div style={{ textAlign: "center", marginTop: "1rem" }}>
            Already have an account?
            <a href="/" style={{ marginLeft: "0.5rem", color: "blue", textDecoration: "underline", cursor: "pointer" }}>Login</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
