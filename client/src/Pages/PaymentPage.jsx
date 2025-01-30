import React, { useState } from "react";
import './PaymentPage.css'
function PaymentPage() {
  const [amount] = useState(6500);
  const [message, setMessage] = useState("");

  const handlePayment = () => {
    setMessage("Processing Payment..."); 
    setTimeout(() => {
      setMessage("✅ Payment Successful!");
    }, 2000);
  };

  return (
    <div className="container">
      <h2>🏠 Hostel Fee Payment</h2>
      <div className="amount-box">
        <p>💰 Amount to Pay: <strong>₹{amount}</strong></p>
      </div>
      <div className="card-form">
        <input type="text" placeholder="💳 Card Number" />
        <div className="row">
          <input type="text" placeholder="📆 Expiry Date" />
          <input type="text" placeholder="🔒 CVV" />
        </div>
        <input type="text" placeholder="📝 Name on Card" />
        <button onClick={handlePayment}>✅ Pay Now</button>
      </div>
      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default PaymentPage;
