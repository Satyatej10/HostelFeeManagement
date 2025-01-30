import React from "react";
import "../index.css";

const LoginPage = () => {
  return (
    <div className="container">
      <div className="card">
        <h2>Login</h2>
        <form>
          <label>Email:</label>
          <input type="email" required />
          <br />
          <label>Password:</label>
          <input type="password" required />
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
