import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import "./SignUp.css"; // Ensure your CSS file is correctly imported

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
              <div>
                <label htmlFor="signup-password">Password:</label>
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
                <label htmlFor="signup-password2">Confirm Password:</label>
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
          <div className="google-signup-container">
            <GoogleLogin
              clientId="1066612399190-jt1l07c6ou8lrmra595re5ru4ou5op1n.apps.googleusercontent.com"
              buttonText="Sign up with Google"
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

export default SignUp;
