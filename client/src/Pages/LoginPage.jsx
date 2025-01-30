import React, { useState } from "react";
import bgImage from "../assets/img1.webp";

const LoginPage = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showCreateAccount, setShowCreateAccount] = useState(false);

  const containerStyle = {
    position: "relative",
    minHeight: "100vh",
    backgroundImage: `url(${bgImage}),linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 1))`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "20px",
  };

  const overlayStyle = {
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    backdropFilter: "blur(10px)", // Blurred background
    background: "rgba(0, 0, 0, 0.4)", // Increase the alpha value to dim the background
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  

  const cardStyle = {
    backgroundColor: "white",
    padding: "32px",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    width: "100%",
    maxWidth: "400px",
    textAlign: "left",
    color: "#333",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  };

  return (
    <div style={containerStyle}>
      <div
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          fontSize: "2rem",
          fontWeight: "bold",
        }}
      >
        Homyx
      </div>
      {!showLogin && !showRegister && !showCreateAccount ? (
        <div>
          <h1 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Welcome to Homyx</h1>
          <p style={{ fontSize: "2rem", fontWeight: "bold" }}>Find Your Home Away From Home</p>
          <button
            onClick={() => setShowLogin(true)}
            style={{
              margin: "10px",
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "white",
              borderRadius: "5px",
              border: "none",
            }}
          >
            Dorm
          </button>
          <button
            onClick={() => setShowRegister(true)}
            style={{
              margin: "10px",
              padding: "10px 20px",
              backgroundColor: "#28a745",
              color: "white",
              borderRadius: "5px",
              border: "none",
            }}
          >
            Explore
          </button>
        </div>
      ) : null}

      {showLogin && (
        <div style={overlayStyle}>
          <div style={cardStyle}>
            <h2>Login</h2>
            <input type="text" placeholder="Username" style={inputStyle} />
            <input type="password" placeholder="Password" style={inputStyle} />
            <button
              style={{ ...inputStyle, backgroundColor: "#007bff", color: "white" }}
            >
              Login
            </button>
            <p>
              Don't have an account?{" "}
              <button
                onClick={() => {
                  setShowLogin(false);
                  setShowRegister(true);
                }}
                style={{
                  background: "none",
                  border: "none",
                  color: "#007bff",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                Register
              </button>
            </p>
            <button
              onClick={() => setShowLogin(false)}
              style={{
                background: "none",
                border: "none",
                color: "#dc3545",
                cursor: "pointer",
              }}
            >
              Back
            </button>
          </div>
        </div>
      )}

      {showRegister && (
        <div style={overlayStyle}>
          <div style={cardStyle}>
            <h2>Register</h2>
            <input type="text" placeholder="First Name" style={inputStyle} />
            <input type="text" placeholder="Last Name" style={inputStyle} />
            <input type="date" placeholder="Date of Birth" style={inputStyle} />
            <input type="text" placeholder="Mobile Number" style={inputStyle} />
            <input type="email" placeholder="Email" style={inputStyle} />
            <input type="text" placeholder="Aadhaar No" style={inputStyle} />
            <input type="text" placeholder="Year of Study" style={inputStyle} />
            <input type="text" placeholder="Roll Number" style={inputStyle} />
            <input type="text" placeholder="Branch" style={inputStyle} />
            <input type="text" placeholder="College" style={inputStyle} />
            <button
              onClick={() => {
                setShowRegister(false);
                setShowCreateAccount(true);
              }}
              style={{ ...inputStyle, backgroundColor: "#28a745", color: "white" }}
            >
              Register
            </button>
            <p>
              Already have an account?{" "}
              <button
                onClick={() => {
                  setShowRegister(false);
                  setShowLogin(true);
                }}
                style={{
                  background: "none",
                  border: "none",
                  color: "#007bff",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                Login
              </button>
            </p>
            <button
              onClick={() => setShowRegister(false)}
              style={{
                background: "none",
                border: "none",
                color: "#dc3545",
                cursor: "pointer",
              }}
            >
              Back
            </button>
          </div>
        </div>
      )}

      {showCreateAccount && (
        <div style={overlayStyle}>
          <div style={cardStyle}>
            <h2>Create Account</h2>
            <input type="text" placeholder="Username" style={inputStyle} />
            <input type="password" placeholder="Password" style={inputStyle} />
            <input type="password" placeholder="Confirm Password" style={inputStyle} />
            <button
              style={{ ...inputStyle, backgroundColor: "#28a745", color: "white" }}
            >
              Create
            </button>
            <button
              onClick={() => {
                setShowCreateAccount(false);
                setShowRegister(true);
              }}
              style={{
                background: "none",
                border: "none",
                color: "#dc3545",
                cursor: "pointer",
              }}
            >
              Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginPage;
