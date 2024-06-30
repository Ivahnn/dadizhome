import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });

  const users = [
    { username: "ivahnn", password: "ivahnn123" },
    { username: "user2", password: "password2" },
    { username: "Admin", password: "admin123" },

  ];

  const handleLogin = () => {
    const { username, password } = formData;

    // Check if the entered credentials match any user
    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      // After successful login, navigate to the 'products' route
      navigate("/Home");
    } else {
      // Handle incorrect login
      alert("Incorrect username or password");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="login-form">
      <h2>Login to Your Account</h2>

      <form>
        <div className="form-group-username">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={handleChange}
          />
        </div>
        <div className="form-group-password">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
          />
          <div className="forgot">
            <p>Forgot Password?</p>
          </div>
        </div>

        <button className="loginbutton" type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
}

export default SignUp;
