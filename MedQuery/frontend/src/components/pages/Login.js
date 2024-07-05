import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
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
                <label htmlFor="email">Email:</label>
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
                <label htmlFor="password">Password:</label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Enter Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
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
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={showPassword}
                  onChange={togglePasswordVisibility}
                />
                Show Password
              </label>
            </div>
          </div>
          <div className="google-login-container">
            <GoogleLogin
              clientId="1066612399190-jt1l07c6ou8lrmra595re5ru4ou5op1n.apps.googleusercontent.com"
              buttonText="Sign in with Google"
              onSuccess={googleSuccess}
              onFailure={googleFailure}
              cookiePolicy={"single_host_origin"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
