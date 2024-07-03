import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css"; // Import your CSS file

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

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
                <label htmlFor="email"></label>
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
                <label htmlFor="username"></label>
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
              <div>
                <label htmlFor="signup-password"></label>
                <input
                  type="password"
                  id="signup-password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="signup-password2"></label>
                <input
                  type="password"
                  id="signup-password2"
                  name="password2"
                  placeholder="Confirm Password"
                  value={formData.password2}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit">Sign Up</button>
            </form>
            <div>
              Already have an account? <a href="/">Login here!</a>
            </div>
          </div>
          <div className="image-container">
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
