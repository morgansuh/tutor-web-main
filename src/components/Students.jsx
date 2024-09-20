import React, { useState } from "react";
import axios from "axios"; // Make sure axios is installed

const Students = () => {
  // State for login form
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [message, setMessage] = useState(""); // State for messages
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  // Handle login form submission
  const handleLogin = async (event) => {
    event.preventDefault(); // Prevent page refresh
    setMessage(""); // Clear previous messages

    try {
      const response = await axios.post("http://localhost:4000/login", {
        email: loginEmail,
        password: loginPassword,
      });

      // Check if login is successful
      if (response.data.email) {
        setMessage(`Student logged in: ${response.data.email}`);
        setIsLoggedIn(true); // Mark the user as logged in
      } else {
        setMessage("Incorrect login. Please try again.");
      }
    } catch (err) {
      console.error("Login error:", err); // Log error for debugging
      setMessage("Incorrect login. Please try again.");
    }
  };

  return (
    <div>
      {!isLoggedIn ? (
        <>
          <h2>Student Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              required
            />
            <button type="submit">Login</button>
          </form>

          {/* Display the message if login fails */}
          {message && <p>{message}</p>}
        </>
      ) : (
        <h2>Welcome, {loginEmail}!</h2>
      )}
    </div>
  );
};

export default Students;
