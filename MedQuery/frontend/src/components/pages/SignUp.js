import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./SignUp.css"; // Import your CSS file

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const { email, password, password2 } = formData;

    if (!email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }

    if (password !== password2) {
      alert("Passwords do not match. Please try again.");
      return;
    }

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
      alert("Error signing up. Please try again later.");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const googleSuccess = async (response) => {
    const tokenId = response.tokenId;

    try {
      const googleResponse = await fetch(
        "http://localhost:3000/accounts/",
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
        console.error("Google Sign-Up failed:", error);
      }
    } catch (error) {
      console.error("Error signing up with Google:", error);
    }
  };

  const googleFailure = (error) => {
    console.error("Google Sign-Up failed:", error);
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
            <p>Create an Account</p>
            <form onSubmit={handleSignUp}>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="password-container">
                <label htmlFor="signup-password"></label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="signup-password"
                  name="password"
                  placeholder="Password"
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
              <div className="password-container">
                <label htmlFor="signup-password2"></label>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="signup-password2"
                  name="password2"
                  placeholder="Confirm Password"
                  value={formData.password2}
                  onChange={handleChange}
                  required
                />
                <span
                  className="toggle-password-icon"
                  onClick={toggleConfirmPasswordVisibility}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              <div>
                <button className="google-signin-button" type="button">
                  <img
                    src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
                    alt="Google"
                    className="google-signin-img"
                  />
                  <span>Sign in With Google</span>
                </button>
              </div>
              <button type="submit">Sign Up</button>
            </form>
            <div>
              Already have an account? <a href="/">Login here!</a>
            </div>
          </div>
          <div className="image-containersignup">
            <img
              src="/images/singup.png"
              alt="Your Image"
              className="form-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
