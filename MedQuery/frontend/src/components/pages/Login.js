import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleLogin = async () => {
    const { username, password } = formData;

    try {
      const response = await fetch("http://127.0.0.1:8000/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (response.ok) {
        navigate("/home"); // Redirect to home page after successful login
      } else {
        let error = await response.json();
        console.error("Login failed:", error);
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", alignItems: "center", justifyContent: "center", padding: "2rem", backgroundColor: "#f7fafc" }}>
      <div style={{ boxShadow: "0 4px 8px rgba(0,0,0,0.1)", borderRadius: "8px", backgroundColor: "#2f855a", padding: "2rem", width: "24rem" }}>
        <h2 style={{ textAlign: "center", fontSize: "1.5rem", fontWeight: "600", color: "#2d3748" }}>MedQuery</h2>
        <p style={{ textAlign: "center", fontSize: "1rem", color: "#4a5568" }}>Login to your account</p>

        <div style={{ marginTop: "1rem" }}>
          <label htmlFor="username" style={{ display: "block", fontSize: "0.875rem", fontWeight: "600", color: "#2d3748" }}>Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter Username here..."
            value={formData.username}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            style={{ width: "100%", padding: "0.5rem", border: "1px solid #cbd5e0", borderRadius: "0.375rem", marginTop: "0.5rem", backgroundColor: "#edf2f7", color: "#2d3748" }}
            required
          />
        </div>

        <div style={{ marginTop: "1rem" }}>
          <label htmlFor="password" style={{ display: "block", fontSize: "0.875rem", fontWeight: "600", color: "#2d3748" }}>Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter Password here..."
            value={formData.password}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            style={{ width: "100%", padding: "0.5rem", border: "1px solid #cbd5e0", borderRadius: "0.375rem", marginTop: "0.5rem", backgroundColor: "#edf2f7", color: "#2d3748" }}
            required
          />
        </div>

        <button
          onClick={handleLogin}
          style={{ width: "100%", padding: "0.75rem", backgroundColor: "#38a169", color: "white", fontWeight: "600", borderRadius: "0.375rem", marginTop: "1.5rem", cursor: "pointer" }}
        >
          Login
        </button>

        <div style={{ textAlign: "center", marginTop: "1rem" }}>
          Don't have an account? <a href="/signup" style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }}>Sign Up</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
