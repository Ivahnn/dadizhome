import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });

  const users = [
    { username: "admin", password: "asd" },
  ];

  const handleLogin = () => {
    const { username, password } = formData;

    // Check if the entered credentials match any user
    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      // After successful login, navigate to the 'Home' route
      navigate("/Home");
    } else {
      // Handle incorrect login
      alert("Incorrect username or password");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    const passwordInput = document.getElementById("password");
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
  };

  const redirectToSignUp = () => {
    navigate("/signup"); // Redirect to the signup 
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", alignItems: "center", justifyContent: "center", padding: "2rem", backgroundColor: "#f7fafc" }}>
      <div style={{ display: "flex", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", borderRadius: "8px", backgroundColor: "#2f855a" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "24rem", padding: "2rem", backgroundColor: "white", borderRadius: "8px 0 0 8px" }}>
          <h2 style={{ textAlign: "center", fontSize: "1.5rem", fontWeight: "600", color: "#2d3748" }}>MedQuery</h2>
          <p style={{ textAlign: "center", fontSize: "1rem", color: "#4a5568" }}>Welcome back!</p>

          <button style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", border: "1px solid #cbd5e0", padding: "0.5rem 1rem", borderRadius: "9999px", marginTop: "1rem" }}>
            <img src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA" alt="Google" style={{ width: "1.25rem", marginRight: "0.5rem" }} />
            <span>Sign in With Google</span>
          </button>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "1rem" }}>
            <span style={{ flex: "1", height: "1px", backgroundColor: "#e2e8f0" }}></span>
            <span style={{ padding: "0 0.5rem", fontSize: "0.875rem", color: "#a0aec0" }}>or login with email</span>
            <span style={{ flex: "1", height: "1px", backgroundColor: "#e2e8f0" }}></span>
          </div>

          <form>
            <div style={{ marginTop: "1rem" }}>
              <label htmlFor="username" style={{ display: "block", fontSize: "0.875rem", fontWeight: "600", color: "#2d3748" }}>Email Address</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter Email here..."
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                style={{ width: "100%", padding: "0.5rem", border: "1px solid #cbd5e0", borderRadius: "0.375rem", marginTop: "0.5rem", backgroundColor: "#edf2f7", color: "#2d3748" }}
                autoFocus // Adding autoFocus attribute here
              />
            </div>


            <div style={{ marginTop: "1rem" }}>
              <label htmlFor="password" style={{ display: "block", fontSize: "0.875rem", fontWeight: "600", color: "#2d3748" }}>Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter Password here..."
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
              onClick={handleLogin}
              style={{ width: "100%", padding: "0.75rem", backgroundColor: "#38a169", color: "white", fontWeight: "600", borderRadius: "0.375rem", marginTop: "1.5rem", cursor: "pointer" }}
            >
              Login
            </button>
          </form>

          <div style={{ textAlign: "center", marginTop: "1rem" }}>
            Don't have an account?
            <a href="#" onClick={redirectToSignUp} style={{ marginLeft: "0.5rem", color: "blue", textDecoration: "underline", cursor: "pointer" }}>Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
