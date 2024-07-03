import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    try {
      const response = await fetch("http://127.0.0.1:8000/auth/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
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
      handleLogin(e);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", alignItems: "center", justifyContent: "center", padding: "2rem", backgroundColor: "#f7fafc" }}>
      <div style={{ boxShadow: "0 4px 8px rgba(0,0,0,0.1)", borderRadius: "8px", backgroundColor: "#2f855a", padding: "2rem", width: "24rem" }}>
        <h2 style={{ textAlign: "center", fontSize: "1.5rem", fontWeight: "600", color: "#2d3748" }}>MedQuery</h2>
        <p style={{ textAlign: "center", fontSize: "1rem", color: "#4a5568" }}>Welcome Back!</p>

        <form onSubmit={handleLogin}>
          <button style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", border: "1px solid #cbd5e0", padding: "0.5rem 1rem", borderRadius: "9999px", marginTop: "1rem" }}>
            <img src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA" alt="Google" style={{ width: "1.25rem", marginRight: "0.5rem" }} />
            <span>Sign in With Google</span>
          </button>

          <div style={{ marginTop: "1rem" }}>
            <label htmlFor="email" style={{ display: "block", fontSize: "0.875rem", fontWeight: "600", color: "#2d3748" }}>Email Address:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email here..."
              value={formData.email}
              onChange={handleChange}
              onKeyPress={handleKeyPress}
              style={{ width: "100%", padding: "0.5rem", border: "1px solid #cbd5e0", borderRadius: "0.375rem", marginTop: "0.5rem", backgroundColor: "#edf2f7", color: "#2d3748" }}
              required
            />
          </div>

          <div style={{ marginTop: "1rem" }}>
            <label htmlFor="password" style={{ display: "block", fontSize: "0.875rem", fontWeight: "600", color: "#2d3748" }}>Password:</label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Enter Password here..."
              value={formData.password}
              onChange={handleChange}
              onKeyPress={handleKeyPress}
              style={{ width: "100%", padding: "0.5rem", border: "1px solid #cbd5e0", borderRadius: "0.375rem", marginTop: "0.5rem", backgroundColor: "#edf2f7", color: "#2d3748" }}
              required
            />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "0.5rem" }}>
              <label style={{ display: "flex", alignItems: "center", whiteSpace: "nowrap" }}>
                <input
                  type="checkbox"
                  checked={showPassword}
                  onChange={togglePasswordVisibility}
                  style={{ marginRight: "0.5rem" }}
                />
                Show Password
              </label>
              <a href="/" style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }}>Forgot Password?</a>
            </div>
          </div>

          <button
            type="submit"
            style={{ width: "100%", padding: "0.75rem", backgroundColor: "#38a169", color: "white", fontWeight: "600", borderRadius: "0.375rem", marginTop: "1.5rem", cursor: "pointer" }}
          >
            Login
          </button>
        </form>

        <div style={{ textAlign: "center", marginTop: "1rem" }}>
          Don't have an account? <a href="/signup" style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }}>Sign Up</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
