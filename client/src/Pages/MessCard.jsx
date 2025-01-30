import React from "react";

const MessCardPage = () => {
  return (
    <div style={styles.body}>
      {/* Top Navigation Bar */}
      <nav style={styles.navbar}>
        <div style={styles.logo}>HostelFee</div>
        <ul style={styles.navLinks}>
          <li><a href="#" style={styles.navLink}>Home</a></li>
          <li><a href="#" style={styles.navLink}>Account</a></li>
          <li><a href="#" style={styles.navLink}>History</a></li>
          <li style={styles.dropdown}>
            <a href="#" style={styles.navLink}>
              <img src="profile-icon.png" alt="Profile" style={styles.profileIcon} />
            </a>
            <ul style={styles.dropdownMenu}>
              <li><a href="#" style={styles.dropdownLink}>Settings</a></li>
              <li><a href="#" style={styles.dropdownLink}>Log Out</a></li>
            </ul>
          </li>
        </ul>
      </nav>

      {/* Mess Card Balance */}
      <div style={styles.messCard}>
        <h2 style={styles.messCardTitle}>Your Mess Card Balance</h2>
        <div style={styles.balanceCard}>
          <div style={styles.balanceInfo}>
            <p style={styles.balanceText}>Current Balance</p>
            <h1 style={styles.balanceAmount}>$150.00</h1>
            <p style={styles.balanceText}>Total Spent: $350.00</p>
            <p style={styles.balanceText}>Available Credits: $50.00</p>
          </div>
          <div style={styles.progressBar}>
            <div style={{ ...styles.progress, width: "60%" }}></div>
          </div>
        </div>
        <div style={styles.actions}>
          <button style={styles.button}>Add Money</button>
          <button style={styles.button}>View Transaction History</button>
          <button style={styles.button}>Recharge</button>
        </div>
      </div>

      {/* Transaction History Table */}
      <div style={styles.transactionHistory}>
        <h2 style={styles.transactionTitle}>Transaction History</h2>
        <div style={styles.filters}>
          <input type="text" placeholder="Search..." style={styles.filterInput} />
          <select style={styles.filterSelect}>
            <option>All</option>
            <option>Credits</option>
            <option>Debits</option>
          </select>
        </div>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.tableHeader}>Date</th>
              <th style={styles.tableHeader}>Description</th>
              <th style={styles.tableHeader}>Amount</th>
              <th style={styles.tableHeader}>Type</th>
            </tr>
          </thead>
          <tbody>
            <tr style={styles.tableRow}>
              <td style={styles.tableCell}>2023-10-10</td>
              <td style={styles.tableCell}>Mess Fee</td>
              <td style={styles.tableCell}>$50.00</td>
              <td style={styles.tableCell}>Debit</td>
            </tr>
            <tr style={styles.tableRow}>
              <td style={styles.tableCell}>2023-10-05</td>
              <td style={styles.tableCell}>Recharge</td>
              <td style={styles.tableCell}>$100.00</td>
              <td style={styles.tableCell}>Credit</td>
            </tr>
          </tbody>
        </table>
        <div style={styles.pagination}>
          <button style={styles.paginationButton}>Previous</button>
          <span style={styles.paginationText}>Page 1 of 5</span>
          <button style={styles.paginationButton}>Next</button>
        </div>
      </div>

      {/* Notification */}
      <div style={styles.notification}>
        <p style={styles.notificationText}>Your balance is low. Please recharge soon!</p>
      </div>
    </div>
  );
};

// Internal CSS Styles
const styles = {
  body: {
    fontFamily: "'Arial', sans-serif",
    margin: 0,
    padding: 0,
    background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)",
    color: "#333",
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    background: "#fff",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#007bff",
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
    margin: 0,
    padding: 0,
  },
  navLink: {
    textDecoration: "none",
    color: "#333",
    transition: "color 0.3s",
  },
  dropdown: {
    position: "relative",
  },
  profileIcon: {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
  },
  dropdownMenu: {
    display: "none",
    position: "absolute",
    background: "#fff",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: "5px",
    padding: "10px",
    right: 0,
  },
  dropdownLink: {
    textDecoration: "none",
    color: "#333",
  },
  messCard: {
    textAlign: "center",
    margin: "40px auto",
    maxWidth: "600px",
  },
  balanceCard: {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  balanceInfo: {
    marginBottom: "20px",
  },
  balanceText: {
    margin: "10px 0",
  },
  balanceAmount: {
    fontSize: "48px",
    margin: "10px 0",
    color: "#007bff",
  },
  progressBar: {
    background: "#e0e0e0",
    borderRadius: "10px",
    height: "10px",
  },
  progress: {
    background: "#007bff",
    height: "100%",
    borderRadius: "10px",
  },
  actions: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginTop: "20px",
  },
  button: {
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    background: "#007bff",
    color: "#fff",
    cursor: "pointer",
    transition: "transform 0.3s, background 0.3s",
  },
  transactionHistory: {
    margin: "40px auto",
    maxWidth: "800px",
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  filters: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  filterInput: {
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    flex: 1,
  },
  filterSelect: {
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "5px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  tableHeader: {
    padding: "10px",
    textAlign: "left",
    borderBottom: "1px solid #ddd",
  },
  tableRow: {
    transition: "background 0.3s",
  },
  tableCell: {
    padding: "10px",
    textAlign: "left",
    borderBottom: "1px solid #ddd",
  },
  pagination: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginTop: "20px",
  },
  paginationButton: {
    padding: "5px 10px",
    border: "none",
    borderRadius: "5px",
    background: "#007bff",
    color: "#fff",
    cursor: "pointer",
  },
  notification: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    background: "#ff4d4d",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
    animation: "slideIn 0.5s ease-out",
  },
  notificationText: {
    margin: 0,
  },
};

export default MessCardPage;