import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

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
        navigate("/home");
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
    <div className="signup-container">
      <video autoPlay loop muted className="video-background">
        <source src="/videos/signup.mp4" autoPlay loop muted />
      </video>
      <div className="form-container">
        <div className="form-content">
          <div className="form-details">
            <h2>MedQuery</h2>
            <p>Login to your Account</p>
            <form onSubmit={handleLogin}>
              <div>
              <button style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", border: "1px solid #cbd5e0", padding: "0.5rem 1rem", borderRadius: "9999px", marginTop: "1rem" }}>
                <img src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA" alt="Google" style={{ width: "1.25rem", marginRight: "0.5rem" }} />
                <span>Sign in With Google</span>
              </button>
              </div>
              <div>
                <label htmlFor="email"></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="password"></label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit">Login</button>
            </form>
            <div>
              Don't have an account? <a href="/signup">Sign Up</a>
            </div>
          </div>
          <div className="image-container">
            <img
              src="/images/login1.png"
              alt="Login Image"
              className="form-image"
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
        </div>
      </div>
    </div>
  );
}

export default Login;
