import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./SignUp.css";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    try {
      const response = await fetch("http://localhost:8000/auth/login/", {
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

  const googleSuccess = async (response) => {
    const tokenId = response.tokenId;

    try {
      const googleResponse = await fetch(
        "http://localhost:3000/auth/google/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ tokenId }),
        }
      );

      if (googleResponse.ok) {
        navigate("/home");
      } else {
        let error = await googleResponse.json();
        console.error("Google Sign-In failed:", error);
      }
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  const googleFailure = (error) => {
    console.error("Google Sign-In failed:", error);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
              <div className="password-container">
                <label htmlFor="password"></label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Enter Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <span
                  className="toggle-password-icon"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              <div>
                <a href="/" className="styled-link">
                  Forgot Password?
                </a>
                <button className="google-signin-button">
                  <img
                    src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
                    alt="Google"
                    className="google-signin-img"
                  />
                  <span>Sign in With Google</span>
                </button>
              </div>
              <div>
                <button type="submit">Login</button>
              </div>
            </form>
            <div>
              <a href="/signup">Don't have an account? Sign Up</a>
            </div>
          </div>
          <div className="image-container">
            <img
              src="/images/login1.png"
              alt="Login Pic"
              className="form-image"
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "0.5rem",
              }}
            >
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  whiteSpace: "nowrap",
                }}
              ></label>
            </div>
          </div>
          <div className="google-login-container">
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
