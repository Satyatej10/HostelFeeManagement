import React, { useState } from "react";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data)

      if (response.ok) {
        setMessage("Signup successful! 🎉");
      } else {
        setMessage(data.error || "Signup failed! ❌");
      }
    } catch (error) {
      setMessage("Error connecting to the server! 🚨");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", textAlign: "center" }}>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Enter username"
          value={formData.username}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "8px", margin: "5px 0" }}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "8px", margin: "5px 0" }}
        />
        <button type="submit" style={{ width: "100%", padding: "10px", marginTop: "10px" }}>
          Signup
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default SignupForm;
